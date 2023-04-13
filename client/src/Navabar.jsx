import './css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navbar() {

  const [hamb , setHamb] = useState(true);
  function updateHamb(e) {
    setHamb(hamb => !hamb);
  } 

  return (
    <div id="navbar">
      <h1>TaxiService</h1>
        
        <FontAwesomeIcon icon={faBars}  className={hamb ? "hamb active " : "hamb"} onClick={updateHamb}/>
      <ul className={hamb ? "menuActive" : "menuInactive"}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;
