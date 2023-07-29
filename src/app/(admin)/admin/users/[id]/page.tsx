"use client";

import * as React from "react";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import useUser from "@/hooks/useUser";
import { Trash2, PlusCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alertDialog";
import { useRef } from "react";
import AddCourseModal from "@/components/AddCourseModal";
import { useCourses } from "@/hooks/useCourses";
import Cookies from "js-cookie";

interface pageProps {
  params: {
    id: string;
  };
}

const Page: FC<pageProps> = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const { courses } = useCourses();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [enrolledCourses, setEnrolledCourses] = useState(user?.enrollment);
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setEnrolledCourses(user.enrollment);
      setIsLoading(false);
    }
  }, [user]);

  const handleDelete = async (courseId: string, studentId: string) => {
    const accessToken = Cookies.get("token");

    try {
      const response = await fetch(`http://localhost:8000/user/enrollment`, {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId, studentId }),
      });

      if (response.ok) {
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (name: string, email: string) => {
    const accessToken = Cookies.get("token");

    try {
      const response = await fetch(`http://localhost:8000/user/${user?.id}`, {
        method: "PATCH",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      console.log(response);
      if (response.ok) {
        window.location.href = "/admin/users";
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCourse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setOpen(true);
  };

  const handleChildCancel = () => {
    setOpen(false);
  };

  return (
    <form className="ml-8 mt-16 mr-8">
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            User
          </h2>

          <div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="userid"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                User ID (auto-generated)
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="userid"
                    id="userid"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={user?.id}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    id="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Email
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="purchased courses"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Purchased courses
              </label>
              <ScrollArea className="block w-full max-w-2xl h-72 rounded-md border">
                <div className="p-4">
                  {user?.enrollment.map((enroll) => (
                    <React.Fragment key={enroll.courseId}>
                      <div className="text-sm flex justify-between">
                        {enroll.courseName}
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Trash2 size={20} color="red" />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                The right to access this course will be removed
                                from this user.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  handleDelete(
                                    enroll.courseId,
                                    enroll.studentId
                                  )
                                }
                              >
                                {" "}
                                Yes, delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                      <Separator className="my-2" />
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="sm:grid sm:grid-cols-9 sm:items-end sm:gap-4">
              <button
                onClick={handleAddCourse}
                type="submit"
                className="col-start-6 px-3 py-2 text-xs font-medium text-center inline-flex items-center justify-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add course &nbsp;
                <PlusCircle size={20} color="white" />
              </button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <AddCourseModal
            open={open}
            setClose={handleChildCancel}
            user={user}
            enrolledCourses={enrolledCourses}
          />
        )}

        <div className="border-t mt-8">
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary-button px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleUpdate(name!, email!)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
