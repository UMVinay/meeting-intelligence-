import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import MeetingList from '../components/MeetingList/MeetingList';
import ChatWidget from '../components/ChatWidget/ChatWidget';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch {
            setError('Failed to log out');
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                {/* Header Area */}
                <header className={styles.topHeader}>
                    <div className={styles.searchBar}>
                        <span className={styles.searchIcon}>🔍</span>
                        <input type="text" placeholder="Search meetings..." />
                    </div>
                    <div className={styles.actions}>
                        <span className={styles.userEmail}>{currentUser?.email}</span>
                        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                    </div>
                </header>

                {error && <div className={styles.errorAlert}>{error}</div>}

                <MeetingList />
                <ChatWidget />
            </main>
        </div>
    );
};

export default Dashboard;
