import { useContext } from 'react'
import { Context } from '../../context'

function StepOneInputPhone() {
    const { inputPhone, setInputPhone, isValidPhoneNumber, setIsValidPhoneNumber } =
        useContext(Context)

    const handlePhoneNumber = (event) => {
        let num = event.target.value
        function phoneNum(num) {
            const regex = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g
            const onlyNumbers = num.replace(/[^\d]/g, '')
            const subst = '+$1 ($2) $3-$4-$5'

            setInputPhone(onlyNumbers.replace(regex, subst))
        }
        phoneNum(num)
    }
    const phoneBlur = () => {
        inputPhone.length !== 18 ? setIsValidPhoneNumber(false) : setIsValidPhoneNumber(true)
    }

    return (
        <div className="phone">
            <p className="text-name">Phone Number</p>
            <p className="invalid-text">
                {isValidPhoneNumber ? '' : 'Please, enter correct value'}
            </p>
            <input
                maxLength={11}
                value={inputPhone}
                className={
                    isValidPhoneNumber ? 'input-phonenumber' : 'input-phonenumber invalid-input'
                }
                placeholder="e.g. 79999999999"
                onChange={handlePhoneNumber}
                onBlur={phoneBlur}
            />
        </div>
    )
}

export { StepOneInputPhone }
