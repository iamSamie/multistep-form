import { useContext } from 'react'
import { Context } from '../../../context'
import { SettingMonthOnlineService } from './SettingMonthOnlineService'
import { SettingMonthLargerStorage } from './SettingMonthLargerStorage'
import { SettingMonthCustomizableProfile } from './SettingMonthCustomizableProfile'

function SettingMonth() {
    const { setStepThreeCompleted } = useContext(Context)
    setStepThreeCompleted(true)

    return (
        <div className="setting">
            <SettingMonthOnlineService />
            <SettingMonthLargerStorage />
            <SettingMonthCustomizableProfile />
        </div>
    )
}

export { SettingMonth }
