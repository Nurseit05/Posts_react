import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./context/context";

function App() {
  
  const [isAuth, setAuth] = useState(true)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <>
      <AuthContext.Provider value={{
        isAuth,
        setAuth,
        isLoading
      }}>
        <Navbar/>
      </AuthContext.Provider>
    </>
  )
}
export default App;