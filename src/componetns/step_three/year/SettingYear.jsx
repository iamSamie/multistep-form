import { useContext } from 'react'
import { Context } from '../../../context'
import { SettingYearOnlineService } from './SettingYearOnlineService'
import { SettingYearLargerStorage } from './SettingYearLargerStorage'
import { SettingYaerCustomizableProfile } from './SettingYaerCustomizableProfile'

function SettingYear() {
    const { setStepThreeCompleted } = useContext(Context)
    setStepThreeCompleted(true)

    return (
        <div className="setting">
            <SettingYearOnlineService />
            <SettingYearLargerStorage />
            <SettingYaerCustomizableProfile />
        </div>
    )
}

export { SettingYear }
