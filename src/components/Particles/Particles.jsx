import { useEffect, useRef } from 'react'
import styles from './Particles.module.css'

const COLORS = [
    'rgba(99, 102, 241, 0.12)',
    'rgba(139, 92, 246, 0.10)',
    'rgba(168, 85, 247, 0.08)',
    'rgba(99, 102, 241, 0.06)',
]

export default function Particles({ count = 20 }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const particles = []
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div')
            el.className = styles.particle
            const size = Math.random() * 120 + 40
            el.style.width = `${size}px`
            el.style.height = `${size}px`
            el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)]
            el.style.left = `${Math.random() * 100}%`
            el.style.animationDuration = `${Math.random() * 15 + 12}s`
            el.style.animationDelay = `${Math.random() * 10}s`
            container.appendChild(el)
            particles.push(el)
        }

        return () => {
            particles.forEach((p) => p.remove())
        }
    }, [count])

    return <div ref={containerRef} className={styles.container} />
}
