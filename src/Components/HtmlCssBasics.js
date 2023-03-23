import React, { useState } from 'react';
import HeaderPage from './HeaderPage';
import * as ED from 'react-bootstrap'
import HtmlPDF from '../pdf/html_tutorial.pdf'
import CSSPDF from '../pdf/css_tutorial.pdf'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HtmlCssBasics = (props) => {
   
    return (
        <div>
&nbsp;&nbsp;&nbsp;
<ED.Container className='outer-page-content-container'>
    &nbsp;&nbsp;&nbsp;
    <div className='border bg-light p-2'>
    <ED.Row>
   
    <ED.Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11} style={{ textAlign: 'right' }}>
    <button type="button" className='btn btn-basic'><a href={HtmlPDF} target="_blank" rel="noreferrer">Download HTML Reference Book</a></button>
    <button type="button" className='btn btn-basic'><a href={CSSPDF} target="_blank" rel="noreferrer">Download CSS Reference Book</a></button></ED.Col>
    <ED.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1} style={{ textAlign: 'right' }}>
  <b>PROGRESS</b>  <CircularProgressbar value={props.data} text={`${props.data}%`} />
    </ED.Col>
    </ED.Row>
    </div>
<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
<h1>What You Should Already Know</h1>                 
                </div>
<div className='border bg-light p-2'>
                
<p>Before starting with React.JS, you should have intermediate experience in:</p>
<ul>
   <li>HTML</li>
   <li>CSS</li>
   <li>JavaScript</li>
</ul>

<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">HTML Introduction</h1>
                </div>
                <ul>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                </ul>

                <h6>Refere the below Concepts</h6>
                <div class="alert alert-info">
                <ul>
                    <li>Elements</li>
                    <li>Attributes</li>
                    <li>Headings</li>
                    <li>Paragraphs</li>
                    <li>Styles</li>
                    <li>Images</li>
                    <li>Tables</li>
                    <li>Links</li>
                    <li>Forms </li>
                    <li>HTML Media etc.</li>
                </ul>
                </div>


                <div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">CSS Introduction</h1>
                </div>
                <ul>
                    <li>CSS stands for Cascading Style Sheets</li>
                    <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                    <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files</li>

                </ul>
                <h6>Refere the Below Concepts</h6>
                <div class="alert alert-info">

                <ul>
                   <li>CSS Selectors</li>
                   <li>Colors</li>
                   <li>Backgrounds</li>
                   <li>Borders</li>
                   <li>Margins</li>
                   <li>Padding</li>
                   <li>Box Model</li>
                   <li>Css Fonts</li>
                   <li>Apllying styles for Links,Tables,images</li>
                   <li>Position etc.</li>
                </ul>
                </div>

                </div>
    </ED.Container>            
        </div>
    );
};

export default HtmlCssBasics;