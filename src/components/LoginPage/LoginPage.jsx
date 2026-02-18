import { useState, useCallback } from 'react'
import Particles from '../Particles/Particles'
import LoginCard from '../LoginCard/LoginCard'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    const [successGlow, setSuccessGlow] = useState(false)

    const handleLoginSuccess = useCallback((email) => {
        setSuccessGlow(true)
        setTimeout(() => {
            alert(`Welcome! Logged in as ${email}`)
            setSuccessGlow(false)
        }, 400)
    }, [])

    return (
        <>
            <Particles />
            <main className={styles.wrapper}>
                <LoginCard onSuccess={handleLoginSuccess} glowing={successGlow} />
                <footer className={styles.footer}>
                    <p>&copy; 2026 Meeting Intelligence. All rights reserved.</p>
                </footer>
            </main>
        </>
    )
}
