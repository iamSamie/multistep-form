import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextFunction = ({ children }) => {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [step, setStep] = useState(1)
    const [isValidName, setIsValidName] = useState(true)
    const [isValidEmail, setIsvalidEmail] = useState(true)
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)
    const [stepOneCompleted, setStepOneCompleted] = useState(false)
    const [stepTwoCompleted, setStepTwoCompleted] = useState(false)
    const [stepThreeCompleted, setStepThreeCompleted] = useState(false)
    const [stepFourCompleted, setStepFourCompleted] = useState(false)
    const [month, setMonth] = useState(false)
    const [planChange, setPlanChange] = useState()
    const [price, setPrice] = useState()
    const [onlineService, setOnlineService] = useState(0)
    const [largerStorage, setLargerStorage] = useState(0)
    const [customizableProfile, setCustomizableProfile] = useState(0)
    return (
        <Context.Provider
            value={{
                inputName,
                setInputName,
                inputEmail,
                setInputEmail,
                inputPhone,
                setInputPhone,
                step,
                setStep,
                isValidName,
                setIsValidName,
                isValidEmail,
                setIsvalidEmail,
                isValidPhoneNumber,
                setIsValidPhoneNumber,
                stepOneCompleted,
                setStepOneCompleted,
                stepTwoCompleted,
                setStepTwoCompleted,
                stepThreeCompleted,
                setStepThreeCompleted,
                stepFourCompleted,
                setStepFourCompleted,
                month,
                setMonth,
                planChange,
                setPlanChange,
                onlineService,
                setOnlineService,
                largerStorage,
                setLargerStorage,
                customizableProfile,
                setCustomizableProfile,
                price,
                setPrice,
            }}>
            {children}
        </Context.Provider>
    )
}
