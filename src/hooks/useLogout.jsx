import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const useLogout = () => {
   const { setAuth } = useContext(AuthContext)
   const navigate = useNavigate()

   const logout = () => {
      document.cookie = "auth=; path=/; max-age=0";
      setAuth({ roleName: 'Guest' });
      navigate('/login', { relative: true })
   };

   return logout
}

export default useLogout