import { useContext } from 'react'
import { Context } from '../../context'

function NavBarMobile() {
    const { step } = useContext(Context)
    return (
        <nav>
            <div className="num-step">
                <div className={step === 1 ? 'nav-one active-step' : 'nav-one'}>
                    <span className="number-step">1</span>
                </div>
                <div className={step === 2 ? 'nav-two active-step' : 'nav-two'}>
                    <span className="number-step">2</span>
                </div>
                <div className={step === 3 ? 'nav-three active-step' : 'nav-three'}>
                    <span className="number-step">3</span>
                </div>
                <div className={step === 4 ? 'nav-four active-step' : 'nav-four'}>
                    <span className="number-step">4</span>
                </div>
            </div>
        </nav>
    )
}

export { NavBarMobile }
