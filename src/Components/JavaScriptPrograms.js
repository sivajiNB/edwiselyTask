import React from 'react';
import * as ED from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const JavaScriptPrograms = (props) => {
    return (
        <div>
            &nbsp;&nbsp;
<ED.Container className='outer-page-content-container'>
    &nbsp;
    <div className='border bg-light p-2'>

<ED.Row>
<ED.Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}></ED.Col>
    
   <ED.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1} style={{ textAlign: 'right' }}>
   <b>PROGRESS</b> <CircularProgressbar value={props.data} text={`${props.data}%`} />
    </ED.Col>

    </ED.Row></div>

<div className="inner-herbpage-service-title-sub mb-4p5 mt-3">
                    <h1 className="mb-3"> Sample JavaScript Programs</h1>
                </div>
<div className='border bg-light p-2'>
<div class="alert alert-info">
    <ol>
        <li>Write a function that takes two numbers as parameters and returns their sum.</li>
        <li>Write a function that takes a string as a parameter and returns the length of the string.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns the largest number in the array.</li>
        <li>Write a function that takes an array of strings as a parameter and returns the longest string in the array.</li>
        <li>Write a function that takes a number as a parameter and returns true if the number is even and false if it's odd.</li>
        <li>Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same backward as forward) and false otherwise.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.</li>
        <li>Write a function that takes an array of strings as a parameter and returns an array of the same strings sorted alphabetically.</li>
        <li>Write a function that takes a number as a parameter and returns an array of all the factors of that number.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns an array of only the even numbers in the original array.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns an array of only the odd numbers in the original array.</li>
        <li>Write a function that takes a string as a parameter and returns a new string with all the vowels removed.</li>
        <li>Write a function that takes an array of strings as a parameter and returns the shortest string in the array.</li>
        <li>Write a function that takes two arrays as parameters and returns a new array containing only the elements that appear in both arrays.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns the product of all the numbers in the array.</li>
        <li>Write a function that takes a string as a parameter and returns a new string with the first letter of each word capitalized.</li>
        <li>Write a function that takes an array of numbers as a parameter and returns an array of only the prime numbers in the original array.</li>
        <li>Write a function that takes a string as a parameter and returns the reverse of the string.</li>
        <li>Write a function that takes an array of strings as a parameter and returns a new array containing only the strings that are palindromes.</li>
        <li>Write a function that takes a number as a parameter and returns true if the number is a prime number and false otherwise.</li>
    </ol>
</div>
                </div>
    </ED.Container> 
            
        </div>
    );
};

export default JavaScriptPrograms;