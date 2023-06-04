import { useContext } from 'react'
import { Context } from '../../context'

function StepOneInptutName() {
    const { inputName, setInputName, isValidName, setIsValidName } = useContext(Context)

    const handleName = (event) => {
        setInputName(
            event.target.value.replace(/[А-Яа-яёЁ]|[0-9]|[!/?><.,/'";:{}=+-_()&^%$#@*§|~`]/, '')
        )
    }
    const nameBlur = () => {
        inputName.length < 5 ? setIsValidName(false) : setIsValidName(true)
    }
    return (
        <div className="name">
            <p className="text-name">Name</p>
            <p className="invalid-text">{isValidName ? '' : 'Please, enter correct value'}</p>
            <input
                value={inputName}
                className={isValidName ? 'input-name' : 'input-name invalid-input'}
                placeholder="e.g. Stephen King"
                onChange={handleName}
                onBlur={nameBlur}
            />
        </div>
    )
}

export { StepOneInptutName }
