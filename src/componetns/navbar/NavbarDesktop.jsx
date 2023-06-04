import { useContext } from 'react'
import { Context } from '../../context'

function NavbarDesktop() {
    const { step } = useContext(Context)
    return (
        <nav>
            <div className="nav">
                <div className="nav-one">
                    <div className={step === 1 ? 'number active-step' : 'number'}>
                        <span className="number-step">1</span>
                    </div>
                    <div className="info">
                        <p className="stennum">STEP 1</p>
                        <p className="info-text">YOUR INFO</p>
                    </div>
                </div>
                <div className="nav-two">
                    <div className={step === 2 ? 'number active-step' : 'number'}>
                        <span className="number-step">2</span>
                    </div>
                    <div className="info">
                        <p className="stennum">STEP 2</p>
                        <p className="info-text">SELECT PLAN</p>
                    </div>
                </div>
                <div className="nav-tree">
                    <div className={step === 3 ? 'number active-step' : 'number'}>
                        <span className="number-step">3</span>
                    </div>
                    <div className="info">
                        <p className="stennum">STEP 3</p>
                        <p className="info-text">ADD-ONS</p>
                    </div>
                </div>
                <div className="nav-four">
                    <div className={step === 4 ? 'number active-step' : 'number'}>
                        <span className="number-step">4</span>
                    </div>
                    <div className="info">
                        <p className="stennum">STEP 4</p>
                        <p className="info-text">SUMMARY</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { NavbarDesktop }
