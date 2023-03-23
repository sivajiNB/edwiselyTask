import React from 'react';
import * as ED from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ReactJSPrograms = (props) => {
    return (
        <div>
            &nbsp;&nbsp;
<ED.Container className='outer-page-content-container'>
    &nbsp;
    <div className='border bg-light p-2'>

<ED.Row>
<ED.Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}></ED.Col>
   <ED.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1} style={{ textAlign: 'right',float:"right" }}>
   <b>PROGRESS</b> <CircularProgressbar value={props.data} text={`${props.data}%`} />
    </ED.Col>

    </ED.Row></div>
<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">Sample React Js Programs</h1>
                </div>
<div className='border bg-light p-2'>
<div class="alert alert-success">
    <ol>
        <li>Create a simple React component that displays "Hello, World!" on the screen.</li>
        <li>Create a counter component that has a button that increments a counter and displays the current count on the screen.</li>
        <li>Create a component that displays a list of items using the map() method and an array of data.</li>
        <li>Create a component that displays a form with input fields and a submit button.</li>
        <li>Create a component that fetches data from an API and displays it on the screen.</li>
        <li>Create a component that uses React Router to navigate between different pages.</li>
        <li>Create a component that displays a modal window when a button is clicked.</li>
        <li>Create a component that uses React Hooks to manage state and update the UI.

</li>
        <li>Create a component that uses Redux to manage state and update the UI.</li>
        <li>Create a component that uses context to share data between components.</li>
        <li>Create a component that displays a timer that counts down from a specified time.

</li>
        <li>Create a component that allows users to upload a file and displays the file name on the screen.</li>
        <li>Create a component that uses React Transition Group to animate the appearance and disappearance of elements on the screen.</li>
        <li>Create a component that allows users to drag and drop items on the screen.</li>
        <li>Create a component that displays a progress bar while data is being loaded from an API.

</li>
        <li>Create a component that displays a chart using a library like Chart.js.</li>
        <li>Create a component that displays a video player with play, pause, and stop buttons.</li>
        <li>Create a component that displays a map using a library like Leaflet.</li>
        <li>Create a component that displays a carousel of images using a library like react-slick.

</li>
<li>Create a component that allows users to filter and sort a list of</li>
    </ol>
    </div>

                </div>
    </ED.Container> 
            
        </div>
    );
};

export default ReactJSPrograms;