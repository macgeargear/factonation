import { UserDto } from '@/types/dto'
import { useEffect, useState } from 'react'

const useUserList = () => {
  const [users, setUsers] = useState<UserDto[] | null>(null);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/user/")
        const responseBody = await res.json()
        setUsers(responseBody.data)
        setError(false);
        setLoading(false);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    users,
    setUsers,
    loading,
    error,
  }
}

export default useUserList;