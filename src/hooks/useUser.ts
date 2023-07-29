import { UserDto } from "@/types/dto";
import { useEffect, useState } from "react";

const useUser = (id: string) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/user/${id}`);
        const responseBody = await res.json();
        setUser(responseBody.data);
        setError(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return {
    user,
    setUser,
    loading,
    error,
  };
};

export default useUser;
