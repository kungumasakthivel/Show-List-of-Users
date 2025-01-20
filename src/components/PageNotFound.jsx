import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const nav = useNavigate()
    const navToHome = () => {
        nav('/')
    }
  return (
    <div className="h-dvh flex flex-col justify-center text-center">
      <p className='font-extrabold text-3xl w-full '>Page Not Found</p>
      <button className="btn" onClick={navToHome}>Home page</button>
    </div>
  )
}

export default PageNotFound
