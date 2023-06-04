import { Form } from './componetns/Form'
import { NavBarMobile } from './componetns/navbar/NavBarMobile'
import { NavbarDesktop } from './componetns/navbar/NavbarDesktop'
import { Button } from './componetns/navbar/Button'
import { ContextFunction } from './context'
import { useEffect, useState } from 'react'

function App() {
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    const handleResize = () => setWindowWidth(window.screen.width)
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowWidth])

    return (
        <ContextFunction>
            <main>
                {windowWidth < 768 ? <NavBarMobile /> : <NavbarDesktop />}
                <Form />
                {windowWidth < 768 ? <Button /> : ''}
            </main>
        </ContextFunction>
    )
}
export default App
