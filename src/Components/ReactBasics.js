import React from 'react';
import * as ED from 'react-bootstrap'
import ReactjsPdf from '../pdf/reactjs_tutorial.pdf'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ReactBasics = (props) => {
    return (
        <div>
            &nbsp;&nbsp;
<ED.Container className='outer-page-content-container'>
&nbsp;&nbsp;&nbsp;
<div className='border bg-light p-2'>

    <ED.Row>
    <ED.Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11} style={{ textAlign: 'right' }}>
    <button type="button" className='btn btn-basic'><a href={ReactjsPdf} target="_blank" rel="noreferrer">Download JavaScript Reference Book</a></button>
   </ED.Col>
   <ED.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1} style={{ textAlign: 'right' }}>
   <b>PROGRESS</b><CircularProgressbar value={props.data} text={`${props.data}%`} />
    </ED.Col>

    </ED.Row></div>

<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3"> ReactJs Basics</h1>
                </div>
<div className='border bg-light p-2'>
<p>React is a popular open-source JavaScript library used for building user interfaces (UIs) and front-end web applications. It was developed by Facebook and is now maintained by a community of developers.

React allows developers to create reusable UI components, which can be combined to build complex user interfaces. React uses a declarative approach to programming, which means developers describe what they want to accomplish and React takes care of the details of how to achieve it.</p>


<h6>Features of React Js</h6>

<ol>
    <li>Virtual DOM: React uses a virtual Document Object Model (DOM) to manage the UI, which is a lightweight representation of the actual DOM. By using the virtual DOM, React minimizes the number of updates required to the actual DOM, resulting in faster performance.

</li>
    <li>Component-Based: React is built around the concept of reusable UI components, which can be used to build complex UIs. These components can be combined together to create the entire application UI.</li>
    <li>Declarative programming: With React, you simply define what the UI should look like based on the current state, and React takes care of updating the actual DOM as needed. This makes the code easier to understand and debug.

</li>
    <li>One-way data flow: In React, data flows in one direction, from parent to child components. This makes it easier to reason about how data is changing within the application.</li>
    <li>JSX: React uses JSX, a syntax extension to JavaScript, which allows developers to write HTML-like code in their JavaScript files. This makes it easier to write and maintain UI code.</li>
    <li>Performance: React has been designed with performance in mind. By using the virtual DOM and only updating the parts of the UI that need to be changed, React applications are faster and more efficient.</li>
    <li>Rich ecosystem: React has a large and growing ecosystem of libraries and tools, including Redux, React Router, and React Native, which allow developers to build a wide range of applications, from web applications to mobile apps</li>
</ol>

<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">Concepts</h1>
                </div>
                <div class="alert alert-info">
                <ul>
                    <li>JSX</li>
                    <li>Components</li>
                    <li>Props</li>
                    <li>Hooks</li>
                    <li>Forms</li>
                    <li>Router-dom</li>
                    <li>Redux</li>

                </ul></div>

                </div>
    </ED.Container> 
            
        </div>
    );
};

export default ReactBasics;