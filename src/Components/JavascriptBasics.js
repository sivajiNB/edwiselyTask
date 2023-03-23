import React from 'react';
import * as ED from 'react-bootstrap'
import "../edwiselystylesheet.css"
import JavaScriptPdf from '../pdf/javascript_tutorial.pdf'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const JavascriptBasics = (props) => {
    return (
        <div>
            &nbsp;&nbsp;
            <ED.Container className='outer-page-content-container'>
            &nbsp;&nbsp;&nbsp;
    <div className='border bg-light p-2'>

    <ED.Row>
    <ED.Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11} style={{ textAlign: 'right' }}>
    <button type="button" className='btn btn-basic'><a href={JavaScriptPdf} target="_blank" rel="noreferrer">Download JavaScript Reference Book</a></button>
   </ED.Col>
   <ED.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1} style={{ textAlign: 'right' }}>
   <b>PROGRESS</b><CircularProgressbar value={props.data} text={`${props.data}%`} />
    </ED.Col>

    </ED.Row></div>

                        <div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">JavaScript Introduction</h1>
                </div>
            <div className='border bg-light p-2'>

                            <p>JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.</p>
                            <p></p>
                            <p>

                            </p>
                            <h5>JavaScript Variables</h5>
                            <p>Variables are containers for storing data (storing data values).
</p>
<p>4 Ways to Declare a JavaScript Variable:</p>
<div class="alert alert-success">

<ul>
    <li>using Var</li>
    <li>using let</li>
    <li>using const</li>
    <li>using nothing</li>

</ul>
</div>

<br/>
<h6>Example</h6>
<p></p>
<p>
var x = 5;</p>
<p>let y = 6;</p>
<p>const z = x + y;</p>
<p></p>

<h5>When to Use JavaScript var?</h5>
<p>
Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.</p>
<p></p>
<h5>Let Varible</h5>
<div class="alert alert-success">

<ul>
    <li>The let keyword was introduced in ES6(2015).</li>
    <li>Variables defined with let can not be redeclared.</li>
    <li>Variables defined with let must be declared before use.</li>
    <li>Variables defined with let have block scope.</li>
</ul>
</div>

<h5>Const Varible</h5>
<div class="alert alert-success">
<ul>
    <li>The const keyword was introduced in ES6 (2015).</li>
    <li>Variables defined with const cannot be Redeclared.</li>
    <li>Variables defined with const cannot be Reassigned.</li>
    <li>Variables defined with const have Block Scope.</li>
</ul>
</div>

<p></p>
<h6>
When to use JavaScript const?
</h6>
<p>
Always declare a variable with const when you know that the value should not be changed.</p>

<p>Use const when you declare:</p>
<div class="alert alert-success">

<ul>
    <li>A new Array</li>
    <li>A new Object</li>
    <li>A new Function</li>
    <li>A new RegExp</li>
</ul>
</div>


<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">JavaScript Datatypes</h1>
                </div>
<p> data types refer to the types of values that can be used and manipulated in a program.</p>
<p>JavaScript has 8 Datatypes</p>
<div class="alert alert-success">

<ol>
    <li> String</li>
    <li>Number</li>
    <li>Bigint</li>
    <li>Boolean</li>
    <li>Undefined</li>
    <li> Null</li>
    <li>Symbol</li>
    <li>Object</li>
</ol>
</div>


<p>The Object </p>
<p>The object data type can contain:</p>
<div class="alert alert-success">
<ol>
    
    <li>An Object</li>
    <li>An Array</li>
    <li>A Date</li>


</ol></div>

<h5>Example</h5>
<pre>
<p>// Numbers:</p>
let length = 16;
let weight = 7.5;

<p>// Strings:</p>
let color = "Yellow";
let lastName = "Johnson";

<p>// Booleans</p>
let x = true;
let y = false;


<p>// Array object:</p>
const cars = ["Saab", "Volvo", "BMW"];

<p>// Date object:</p>
const date = new Date("2022-03-25");
</pre>

<p>

</p>
<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3">Learn below Mentioned Concepts</h1>
                </div>
                <div class="alert alert-success">

                <ul>
                    <li>Functions</li>
                    <li>Objects</li>
                    <li>Events</li>
                    <li>Strings & String Methods</li>
                    <li>Arrays & Array Methods</li>
                    <li>Conditional Statements</li>
                    <li>Loops</li>
                    <li>ES6 features</li>
                </ul>
                </div>
</div>

            </ED.Container>
          
            
        </div>
    );
};

export default JavascriptBasics;