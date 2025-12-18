import { Outlet } from "react-router-dom"
import Navbar from "./Componets/Navbar"
import Footer from "./Componets/Footer"


const App = () => {
  return (
    <div className='min-h-screen w-full px-6 sm:px-10 md:px-20 bg-[#fffbf0]  text-[#273006]'>
       {/* Navbar */}
       <header><Navbar/></header>
       {/* Main content  */}
       <main><Outlet/></main>
       {/* Footer */}
       <footer><Footer/></footer>
    </div>
  )
}

export default App