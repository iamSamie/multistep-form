import { useContext } from 'react'
import { Context } from '../../context'

function FinishYear() {
    const {
        price,
        planChange,
        onlineService,
        largerStorage,
        customizableProfile,
        setStepFourCompleted,
    } = useContext(Context)

    setStepFourCompleted(true)

    return (
        <div className="finish-data">
            <div className="data">
                <div className="first-basket">
                    <div className="tariff">
                        <p className="tariff-price-text">{planChange}/yr</p>
                    </div>
                    <div className="total-price">
                        <p className="tariff-price-text">${price * 10}/yr</p>
                    </div>
                </div>
                <hr />
                <div className="second-basket">
                    <div className="second-online-service">
                        {onlineService ? 'Online service' : ''}
                    </div>
                    <div className="second-basket-price-1">
                        {onlineService ? `+${onlineService * 10}$/yr` : ''}
                    </div>
                    <div className="larger-storage">{largerStorage ? 'Larger storage' : ''}</div>
                    <div className="second-basket-price-2">
                        {largerStorage ? `+${largerStorage * 10}$/yr` : ''}
                    </div>
                    <div className="customizable-profile">
                        {customizableProfile ? 'Customizable Profile' : ''}
                    </div>
                    <div className="second-basket-price-3">
                        {customizableProfile ? `+${customizableProfile * 10}$/yr` : ''}
                    </div>
                </div>
            </div>
            <div className="total">
                <div className="total-total">Total (per year)</div>
                <div className="summary">{`${
                    (price + onlineService + largerStorage + customizableProfile) * 10
                }$/yr`}</div>
            </div>
        </div>
    )
}

export { FinishYear }
