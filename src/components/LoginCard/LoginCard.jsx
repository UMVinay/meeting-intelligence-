import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import InputField from '../InputField/InputField'
import SocialButtons from '../SocialButtons/SocialButtons'
import LogoIcon from '../LogoIcon/LogoIcon'
import styles from './LoginCard.module.css'

export default function LoginCard({ onSuccess, glowing }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [shake, setShake] = useState(false)
    const [generalError, setGeneralError] = useState('')

    const { login, googleSignIn } = useAuth()
    const navigate = useNavigate()

    const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

    const validateEmail = useCallback(() => {
        const val = email.trim()
        if (!val) { setEmailError('Email address is required'); return false }
        if (!isValidEmail(val)) { setEmailError('Please enter a valid email address'); return false }
        setEmailError('')
        return true
    }, [email])

    const validatePassword = useCallback(() => {
        if (!password) { setPasswordError('Password is required'); return false }
        if (password.length < 6) { setPasswordError('Password must be at least 6 characters'); return false }
        setPasswordError('')
        return true
    }, [password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const eValid = validateEmail()
        const pValid = validatePassword()

        if (!eValid || !pValid) {
            setShake(true)
            setTimeout(() => setShake(false), 500)
            return
        }

        try {
            setGeneralError('')
            setLoading(true)
            await login(email, password)
            onSuccess?.(email.trim()) // Trigger glowing effect
            setTimeout(() => navigate('/'), 1000) // Navigate after effect
        } catch (error) {
            console.error("Login failed", error)
            setGeneralError('Failed to log in: ' + error.message)
            setShake(true)
            setTimeout(() => setShake(false), 500)
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            setGeneralError('')
            setLoading(true)
            await googleSignIn()
            navigate('/')
        } catch (error) {
            console.error("Google Sign-In failed", error)
            // Show the actual error message from Firebase to help with debugging
            setGeneralError(error.message || 'Failed to log in with Google')
        } finally {
            setLoading(false)
        }
    }

    const cardClasses = [
        styles.card,
        shake ? styles.shake : '',
        glowing ? styles.glowing : '',
    ].filter(Boolean).join(' ')

    return (
        <div className={cardClasses}>
            {/* Brand */}
            <div className={styles.brand}>
                <LogoIcon />
                <h1 className={styles.title}>Meeting Intelligence</h1>
                <p className={styles.subtitle}>Action Item Generator</p>
            </div>

            {generalError && <div className={styles.errorBanner}>{generalError}</div>}

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
                <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={email}
                    onChange={setEmail}
                    error={emailError}
                    onBlur={() => email.trim() && validateEmail()}
                    icon="email"
                />

                <InputField
                    id="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={setPassword}
                    error={passwordError}
                    onBlur={() => password && validatePassword()}
                    icon="lock"
                    showToggle
                    onToggle={() => setShowPassword((v) => !v)}
                    isRevealed={showPassword}
                />

                <div className={styles.forgotRow}>
                    <a href="#" className={styles.forgotLink}>forgot password?</a>
                </div>

                <button
                    type="submit"
                    className={styles.loginBtn}
                    disabled={loading}
                >
                    {loading ? (
                        <span className={styles.loader}>
                            <svg className={styles.spinner} viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4 31.4" strokeLinecap="round" />
                            </svg>
                        </span>
                    ) : (
                        <span>Log In</span>
                    )}
                </button>
            </form>

            {/* Divider */}
            <div className={styles.divider}><span>or continue with</span></div>

            {/* Social Login */}
            <SocialButtons onGoogleClick={handleGoogleSignIn} />

            {/* Sign Up */}
            <p className={styles.signupText}>
                Don&apos;t have an account?{' '}
                <a href="#" className={styles.signupLink}>Create one</a>
            </p>
        </div>
    )
}
