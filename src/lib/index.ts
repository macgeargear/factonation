export async function getInstructors() {
  const res = await fetch("http://localhost:8000/user/ins/instructor");
  const instructorData = await res.json();
  return instructorData.data;
}
