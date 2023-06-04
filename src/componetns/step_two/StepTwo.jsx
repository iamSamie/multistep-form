import { useContext } from 'react'
import { Button } from '../navbar/Button'
import { PlanMonth } from './PlanMonth'
import { PlanYear } from './PlanYear'
import { StepTwoHeader } from './StepTwoHeader'
import { Context } from '../../context'
import { StepTwoToggle } from './StepTwoToggle'

function StepTwo() {
    const { month } = useContext(Context)
    return (
        <div className="two">
            <div className="step-two">
                <StepTwoHeader />
                {month ? <PlanYear /> : <PlanMonth />}
                <StepTwoToggle />
            </div>
            <Button />
        </div>
    )
}

export { StepTwo }
