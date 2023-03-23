import React from 'react';
import MultiStep from 'react-multistep';
import JavascriptBasics from './JavascriptBasics';
import JavaScriptPrograms from './JavaScriptPrograms';
import ReactBasics from './ReactBasics';
import ReactJSPrograms from './ReactJSPrograms';

const MainPage = () => {
    const steps = [
        {title: 'Basics', component: <JavascriptBasics/>},
        {title: 'Pre Request Programming Language', component:<JavaScriptPrograms/>},
        {title: 'React JS Basics', component: <ReactBasics/>},
        {title: 'React JS Tasks', component: <ReactJSPrograms/>}
      ];

      const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }
    return (
        <div>
            {/* <MultiStep activeStep={0} showNavigation={true} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/> */}
            <MultiStep  steps={steps}/>

            
        </div>
    );
};

export default MainPage;