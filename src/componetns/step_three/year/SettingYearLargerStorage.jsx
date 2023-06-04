import { useContext } from 'react'
import { Context } from '../../../context'

function SettingYearLargerStorage() {
    const { setLargerStorage, largerStorage } = useContext(Context)

    const handleStorage = (event) => {
        if (event.target.checked) {
            setLargerStorage(2)
        } else {
            setLargerStorage(0)
        }
    }

    return (
        <div>
            <label
                htmlFor="checkbox2"
                className={largerStorage ? 'online-service plan-checked' : 'online-service'}>
                <input
                    className="setting-input"
                    type="checkbox"
                    id="checkbox2"
                    checked={largerStorage ? 'checked' : ''}
                    onChange={handleStorage}
                />
                <div className="setting-text">
                    <div className="set-text">Larger storage</div>
                    <div className="set-description">Extra 1TB of cloud save</div>
                </div>
                <div className="setting-price">+$20/yr</div>
            </label>
        </div>
    )
}

export { SettingYearLargerStorage }
