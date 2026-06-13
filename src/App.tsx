import { useEffect } from "react"
import AudioPlay from "./components/base/AudioPlay"
import Router from "./routes/Index"
import { useAuthStore } from "./store/AuthStore"

const App = () => {

  const { LoginInMockUser, currentUser } = useAuthStore()
  const Init = () => {
    if (import.meta.env.VITE_MOCK_USER && currentUser == null) {
      LoginInMockUser()
    }
  }

  useEffect(() => {
    Init()
  }, [])
  return (
    <>
      <AudioPlay />
      <Router />
    </>
  )
}

export default App