import { useContext } from 'react'
import { StepOne } from './step_one/StepOne'
import { Context } from '../context'
import { StepTwo } from './step_two/StepTwo'
import { StepThree } from './step_three/StepThree'
import { StepFour } from './step_four/StepFour'
import { StepFive } from './step_five/StepFive'

function Form() {
    const { step } = useContext(Context)
    if (step === 1) return <StepOne />
    if (step === 2) return <StepTwo />
    if (step === 3) return <StepThree />
    if (step === 4) return <StepFour />
    if (step === 5) return <StepFive />
}

export { Form }
