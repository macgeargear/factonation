"use client";
import axios from "axios";
import { FormEvent, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "@/components/ui/button";
import SelectInstructor from "./SelectInstructor";
import { LessonDto } from "@/types/dto";

export default function AddCourseForm() {
  const [file, setFile] = useState<Blob>();
  const [imageId, setImageId] = useState("");
  const [price, setPrice] = useState("");
  const [saledPrice, setSaledPrice] = useState("");
  const [details, setDetails] = useState("");
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");

  const [lessons, setLessons] = useState<LessonDto>();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", file as Blob);
      formData.append("imageId", imageId);
      formData.append("price", price);
      formData.append("saledPrice", saledPrice);
      formData.append("details", details);
      formData.append("courseName", courseName);
      formData.append("instructor", instructor);
      // formData.append("lessons", lessons);

      await axios.post("http://localhost:8000/course", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(formData);
      // await fetch("http://localhost:8000/course", {
      //   method: "POST",
      //   body: JSON.stringify({ formData, caption }),
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Course</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course</DialogTitle>
          <DialogDescription>
            กด submit เพื่อสร้างคอรสเรียนสุดมหัศจรรย์
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col w-full">
          <Label htmlFor="file">Course Image</Label>
          <input
            onChange={(e) => {
              if (e.target.files) setFile(e.target.files[0]);
            }}
            id="file"
            type="file"
            accept="image/*"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="price">Price</Label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="price"
            placeholder="9999"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="saledPrice">Saled Price</Label>
          <input
            value={saledPrice}
            onChange={(e) => setSaledPrice(e.target.value)}
            type="text"
            id="saledPrice"
            placeholder="20"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="details">details</Label>
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            type="text"
            id="details"
            placeholder="details"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="courseName">courseName</Label>
          <input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
            id="courseName"
            placeholder="courseName"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="instructor">instructorId</Label>
          <SelectInstructor setInstructor={setInstructor} />
          {/* Lesson form */}
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
