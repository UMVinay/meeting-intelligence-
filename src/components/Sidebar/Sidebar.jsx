import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}></div>
                <span className={styles.logoText}>Meeting Intel</span>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.active}>
                        <Link to="/" className={styles.link}>
                            <span className={styles.icon}>📅</span>
                            Meetings
                        </Link>
                    </li>
                    <li>
                        <Link to="/action-items" className={styles.link}>
                            <span className={styles.icon}>✅</span>
                            Action Items
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports" className={styles.link}>
                            <span className={styles.icon}>📊</span>
                            Reports
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.profile}>
                <div className={styles.avatar}>U</div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>User Name</span>
                    <span className={styles.userRole}>Admin</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
