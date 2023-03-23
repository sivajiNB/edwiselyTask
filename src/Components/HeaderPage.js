import React from 'react';
import "../edwiselystylesheet.css"
import * as ED from 'react-bootstrap'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill,BsCoin} from 'react-icons/bs'
import {SiSemanticuireact} from 'react-icons/si'
import {GiPathDistance} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';

const HeaderPage = (props) => {
  let navigate=useNavigate()
  const Homapageredirect=()=>{
    navigate("*")

  }
    return (
        <div>
            <ED.Navbar bg="dark">
        <ED.Container>
          
          <ED.Navbar.Brand style={{color:"white"}}><SiSemanticuireact color="green"/>&nbsp;&nbsp;React JS Learning Path &nbsp;&nbsp;<GiPathDistance color="green"/></ED.Navbar.Brand>

          <ED.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ED.Navbar.Collapse id="responsive-navbar-nav">
                        <ED.Nav className="me-auto"></ED.Nav>
                        <ED.Nav>

          <ED.Nav.Link ><span style={{color:"white",fontSize:"25px",float:"right"}}> <AiOutlineHome onClick={Homapageredirect}/></span></ED.Nav.Link>
          <ED.Nav.Link ><span style={{color:"white",fontSize:"25px",float:"right"}}><BsFillPersonFill /></span></ED.Nav.Link>
          <ED.Nav.Link ><span style={{color:"white",}}> Reward Points&nbsp;<BsCoin color='green'/></span><br/><span style={{color:"white"}}>{props!==undefined&&props.data}</span>&nbsp;&nbsp;<BsCoin color='green'/></ED.Nav.Link>


                        </ED.Nav>
                    </ED.Navbar.Collapse>
        </ED.Container>
      </ED.Navbar>
            
        </div>
    );
};

export default HeaderPage;