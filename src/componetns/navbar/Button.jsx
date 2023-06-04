import { useContext } from 'react'
import { Context } from '../../context'

function Button() {
    const {
        step,
        setStep,
        stepOneCompleted,
        stepTwoCompleted,
        stepThreeCompleted,
        stepFourCompleted,
    } = useContext(Context)

    const nextStep = () => {
        if (stepOneCompleted) {
            setStep(2)
        }
        if (stepOneCompleted && stepTwoCompleted && step === 2) {
            setStep(3)
        }
        if (stepOneCompleted && stepTwoCompleted && stepThreeCompleted && step === 3) {
            setStep(4)
        }
        if (
            stepOneCompleted &&
            stepTwoCompleted &&
            stepThreeCompleted &&
            stepFourCompleted &&
            step === 4
        ) {
            setStep(5)
        }
    }
    const prevStep = () => {
        setStep(step - 1)
    }
    if (step === 1) {
        return (
            <div className="button">
                <button className="go-back"></button>
                <button onClick={nextStep} className="next-step">
                    Next Step
                </button>
            </div>
        )
    } else {
        return (
            <div className={step === 5 ? 'none-button' : 'button'}>
                <button onClick={prevStep} className="go-back">
                    Go Back
                </button>
                <button onClick={nextStep} className="next-step">
                    Next Step
                </button>
            </div>
        )
    }
}

export { Button }
