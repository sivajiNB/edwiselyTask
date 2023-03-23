import React from 'react';
import "../edwiselystylesheet.css"
import * as ED from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Dashboard = () => {
  let navigate=useNavigate()
  const NextPage=()=>{
    navigate("/mainpage")

  }
    return (
        <div>
            <HeaderPage/>
      <br />
      
<ED.Container>
    <ED.Row>
        <ED.Col>
            <ED.Card>
                <ED.Card.Body >
                   <ED.Card.Title><span style={{ color: 'green', }}>Learn Continually -There's always "one More thing" to learn</span></ED.Card.Title>
                    <img src={logo} className="App-logo" alt="logo" style={{float:"center"}} />
<button className='btn btn-success' onClick={NextPage}>Start Learning ReactJs Now &nbsp;<BsFillArrowRightCircleFill/></button>                    

                </ED.Card.Body>
            </ED.Card>
        </ED.Col>
    </ED.Row>
</ED.Container>
      


     
     
            
        </div>
    );
};

export default Dashboard;