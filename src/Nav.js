import React,{useState,useEffect} from 'react'
import "./Nav.css"
function Nav() {
    const [show,Handleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                Handleshow(true);
            }
            else{
                Handleshow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
        
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
          <img className="nav__logo"
          style={{backgroundColor:"none"}} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="logo"/>  
           <img className="nav__avtar" 
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="logo"/>  
        </div>
    )
}

export default Nav
