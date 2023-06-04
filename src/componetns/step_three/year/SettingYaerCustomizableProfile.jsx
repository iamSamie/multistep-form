import { useContext } from 'react'
import { Context } from '../../../context'

function SettingYaerCustomizableProfile() {
    const { setCustomizableProfile, customizableProfile } = useContext(Context)

    const handleCustomizable = (event) => {
        if (event.target.checked) {
            setCustomizableProfile(2)
        } else {
            setCustomizableProfile(0)
        }
    }

    return (
        <div>
            <label
                htmlFor="checkbox3"
                className={customizableProfile ? 'online-service plan-checked' : 'online-service'}>
                <input
                    className="setting-input"
                    type="checkbox"
                    id="checkbox3"
                    checked={customizableProfile ? 'checked' : ''}
                    onChange={handleCustomizable}
                />
                <div className="setting-text">
                    <div className="set-text">Customizable Profile</div>
                    <div className="set-description">Custom theme on your profile</div>
                </div>
                <div className="setting-price">+$20/yr</div>
            </label>
        </div>
    )
}

export { SettingYaerCustomizableProfile }
