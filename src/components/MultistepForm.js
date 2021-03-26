import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core'
// components import
import StepOne from './StepOne'

const useStyles = makeStyles({
    root: {
        width: "75%",
        margin: "6rem auto",
        border: "1px solid #999",
        // "& .MuiStepIcon-root.MuiStepIcon-active": {
        //     color: "green"
        // },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "green"
        }
    }
})

const MultistepForm = () => {
    //REACT HOOKS
    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () => {
        return ["SIGN UP", "CHOOSE PLAN", "CHECKOUT"]
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const steps = getSteps()

    const getStepsContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <StepOne/>
            case 1:
                return "Step Two (CHOOSE PLAN)"
            case 2:
                return "Step Three (CHECKOUT)"
            default: return "Unknown Step"
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel> {label} </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {activeStep === steps.length ? "The Steps Completed" : (
                    <>
                        {getStepsContent(activeStep)}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length ? "Finish" : "Next"}
                        </Button>
                    </>
                )}
            </>
        </div>
    )
}

export default MultistepForm
