import styles from './LogoIcon.module.css'

export default function LogoIcon() {
    return (
        <div className={styles.logo}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="40" height="32" rx="4" stroke="url(#logoGrad1)" strokeWidth="2.5" />
                <path d="M14 20h20M14 26h14M14 32h8" stroke="url(#logoGrad1)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="38" cy="34" r="8" fill="url(#logoGrad2)" />
                <path d="M35 34l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="logoGrad1" x1="4" y1="8" x2="44" y2="40">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="logoGrad2" x1="30" y1="26" x2="46" y2="42">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
