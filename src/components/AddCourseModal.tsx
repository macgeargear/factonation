"use client";

import * as React from "react";
import { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useCourses } from "@/hooks/useCourses";
import { CourseDto, EnrollmentDto } from "@/types/dto";
import Cookies from "js-cookie";

export default function AddCourseModal({
  open,
  setClose,
  enrolledCourses,
  user,
}: any) {
  const cancelButtonRef = useRef(null);
  const { courses, isLoading, isError } = useCourses();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error</div>;

  //get only unique courses to display on the list
  const allCoursesArr: CourseDto[] = courses.data;
  const uniqueCourseIds: Set<string> = new Set(
    enrolledCourses.map((course: EnrollmentDto) => course.courseId)
  );

  const uniqueCourses = allCoursesArr.filter((course) => {
    console.log(!uniqueCourseIds.has(course.id));
    return !uniqueCourseIds.has(course.id);
  });

  //enrolled courses

  const createEnrollment = async (selectedCourses: string[]) => {
    const accessToken = Cookies.get("token");

    try {
      for (let i = 0; i < selectedCourses.length; i++) {
        const courseId = selectedCourses[i];
        console.log(courseId);
        await fetch(`http://localhost:8000/user/student/enroll`, {
          method: "POST",
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: user.id,
            courseId,
          }),
        });
      }

      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Add courses for this user
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="p-4">
                      <fieldset>
                        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                          {uniqueCourses &&
                            uniqueCourses.map((course) => (
                              <div
                                key={course.id}
                                className="relative flex py-4 justify-between"
                              >
                                <div className="min-w-0 flex items-start text-sm leading-6">
                                  <label
                                    htmlFor={`course-${course.courseName}`}
                                    className="select-none font-medium text-gray-900"
                                  >
                                    {course.courseName}
                                  </label>
                                </div>
                                <div className="ml-3 flex h-6 items-center">
                                  <input
                                    id={`course-${course.id}`}
                                    name={`course-${course.courseName}`}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    onChange={(e) => {
                                      const courseId = course.id;
                                      if (e.target.checked) {
                                        setSelectedCourses(
                                          (selectedCourses) => [
                                            ...selectedCourses,
                                            courseId,
                                          ]
                                        );
                                      } else {
                                        setSelectedCourses((selectedCourses) =>
                                          selectedCourses.filter(
                                            (id) => id !== courseId
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={(e) => createEnrollment(selectedCourses)}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={setClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
