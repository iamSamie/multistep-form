import { useContext } from 'react'
import { Context } from '../../context'

function StepOneInputEmail() {
    const { inputEmail, setInputEmail, isValidEmail, setIsvalidEmail } = useContext(Context)

    const handleEmail = (event) => {
        setInputEmail(event.target.value.replace(/[А-Яа-яёЁ]|[{}%§~`]/, ''))
    }
    const emailBlur = () => {
        inputEmail.length < 12 ? setIsvalidEmail(false) : setIsvalidEmail(true)
    }

    return (
        <div className="email">
            <p className="text-name">Email Address</p>
            <p className="invalid-text">{isValidEmail ? '' : 'Please, enter correct value'}</p>
            <input
                value={inputEmail}
                className={isValidEmail ? 'input-email' : 'input-email invalid-input'}
                placeholder="e.g. stephenking@gmail.com"
                onChange={handleEmail}
                onBlur={emailBlur}
            />
        </div>
    )
}

export { StepOneInputEmail }
