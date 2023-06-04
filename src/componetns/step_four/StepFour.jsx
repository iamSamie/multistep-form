import { useContext } from 'react'
import { Button } from '../navbar/Button'
import { FinishMonth } from './FinishMonth'
import { FinishYear } from './FinishYear'
import { Context } from '../../context'

function StepFour() {
    const { month } = useContext(Context)
    return (
        <div className="four">
            <div className="step-four">
                <header>
                    <h3>Finishing up</h3>
                    <span className="header-span">
                        Double-check everything looks OK before confirming.
                    </span>
                </header>
                {month ? <FinishYear /> : <FinishMonth />}
            </div>
            <Button />
        </div>
    )
}

export { StepFour }
