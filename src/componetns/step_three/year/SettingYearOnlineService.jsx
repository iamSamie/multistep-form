import { useContext } from 'react'
import { Context } from '../../../context'

function SettingYearOnlineService() {
    const { setOnlineService, onlineService } = useContext(Context)

    const handleService = (event) => {
        if (event.target.checked) {
            setOnlineService(1)
        } else {
            setOnlineService(0)
        }
    }

    return (
        <div>
            <label
                htmlFor="checkbox1"
                className={onlineService ? 'online-service plan-checked' : 'online-service'}>
                <input
                    className="setting-input"
                    type="checkbox"
                    id="checkbox1"
                    checked={onlineService ? 'checked' : ''}
                    onChange={handleService}
                />
                <div className="setting-text">
                    <div className="set-text">Online service</div>
                    <div className="set-description">Access to multiplayer games</div>
                </div>
                <div className="setting-price">+$10/yr</div>
            </label>
        </div>
    )
}

export { SettingYearOnlineService }
