import { useContext } from 'react'
import { Button } from '../navbar/Button'
import { Context } from '../../context'
import { StepOneHeader } from './StepOneHeader'
import { StepOneInptutName } from './StepOneInputName'
import { StepOneInputEmail } from './StepOneInputEmail'
import { StepOneInputPhone } from './StepOneInputPhone'

function StepOne() {
    const { inputName, inputEmail, inputPhone, setStepOneCompleted } = useContext(Context)

    if (inputName.length > 5 && inputEmail.length > 12 && inputPhone.length === 18) {
        setStepOneCompleted(true)
    }

    return (
        <div className="one">
            <div className="step-one">
                <StepOneHeader />
                <StepOneInptutName />
                <StepOneInputEmail />
                <StepOneInputPhone />
            </div>
            <Button />
        </div>
    )
}

export { StepOne }
