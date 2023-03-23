import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as ED from 'react-bootstrap'
import "../edwiselystylesheet.css"
import JavascriptBasics from './JavascriptBasics';
import JavaScriptPrograms from './JavaScriptPrograms';
import ReactBasics from './ReactBasics';
import ReactJSPrograms from './ReactJSPrograms';
import HeaderPage from './HeaderPage';
import HtmlCssBasics from './HtmlCssBasics';
import Swal from 'sweetalert2';

const steps = ['Basic Requirements', 'Required Programming Language', 'Sample Programs','ReactJs Basics','Programs on React Js'];

export default function MainCompletePage() {
  const [activeStep, setActiveStep] =useState(0);
  const [completed, setCompleted] =useState({});
  const [percentage,setPercentage]=useState(0)


  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    Swal.fire("Good Job!","Completed Step Successfully and Move to the Next Step","success")
    const newCompleted = completed;
    setPercentage(percentage+20)
    newCompleted[activeStep] = true;
    
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setPercentage(0)
    setActiveStep(0);
    setCompleted({});
  };

  return (
      <div>
<HeaderPage data={percentage}/>
&nbsp;
&nbsp;

<ED.Container>
<ED.Row >
                    <ED.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            <h1></h1>
                        </div>
                    </ED.Col>
                </ED.Row>
</ED.Container>
<br/>

    <ED.Container className='outer-page-content-container'>
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
             <b> {label}</b>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished the Course
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset} variant="contained">Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
              {
                  activeStep==0&&<HtmlCssBasics data={percentage}/>
              }
              {
                  activeStep==1&&<JavascriptBasics data={percentage}/>
              }
              {
                  activeStep==2&&<JavaScriptPrograms data={percentage}/>
              }
              {
                  activeStep==3&&<ReactBasics data={percentage}/>
              }
              {
                  activeStep==4&&<ReactJSPrograms data={percentage}/>
              }
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
              variant="contained"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }} variant="contained">
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} variant="contained">
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    </ED.Container>
    </div>
  );
}
