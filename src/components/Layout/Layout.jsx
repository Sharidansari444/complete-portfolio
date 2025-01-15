import Home from "../../pages/Home"
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Menu from "../Menu/Menu";
import "./Layout.css"
import { useState } from "react";


const Layout = () => {
  const [toggle, setToggle] = useState(true)

  const handletoggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className="sidebar-section">
        <div className={ toggle? "sidebar-toggle sidebar" :  "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handletoggle} >
              {toggle ? (<AiOutlineDoubleLeft size={30} />) : (<MdOutlineKeyboardDoubleArrowRight  size={45}/>)}

            </p>
          </div>
            <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  )
}

export default Layout