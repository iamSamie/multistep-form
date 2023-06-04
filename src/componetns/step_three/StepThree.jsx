import { useContext } from 'react'
import { Button } from '../navbar/Button'
import { SettingMonth } from './month/SettingMonth'
import { SettingYear } from './year/SettingYear'
import { Context } from '../../context'
import { StepThreeHeader } from './StepThreeHeader'

function StepThree() {
    const { month } = useContext(Context)
    return (
        <div className="three">
            <div className="step-three">
                <StepThreeHeader />
                {month ? <SettingYear /> : <SettingMonth />}
            </div>
            <Button />
        </div>
    )
}

export { StepThree }
