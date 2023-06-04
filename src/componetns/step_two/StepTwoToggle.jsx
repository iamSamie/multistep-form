import { useContext } from 'react'
import { Context } from '../../context'

function StepTwoToggle() {
    const { month, setMonth } = useContext(Context)

    const isChecked = () => {
        setMonth(!month)
    }
    return (
        <div className="toggle">
            <div className="month">Monthly</div>
            <label className="switch">
                <input
                    type="checkbox"
                    className="switch__input"
                    checked={month}
                    onChange={isChecked}
                />
                <span className="switch__slider"></span>
            </label>
            <div className="year">Yearly</div>
        </div>
    )
}

export { StepTwoToggle }
