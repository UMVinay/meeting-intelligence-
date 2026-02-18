import styles from './MeetingList.module.css';

const MOCK_MEETINGS = [
    {
        id: 1,
        title: "Product Roadmap Review",
        date: "Today, 10:00 AM",
        summary: "Discussed Q3 goals, prioritized feature X, and assigned action items to the design team.",
        participants: 5
    },
    {
        id: 2,
        title: "Weekly Engineering Sync",
        date: "Yesterday, 2:00 PM",
        summary: "Updates on backend migration. Blocker identified in API gateway. Next sprint planning scheduled.",
        participants: 12
    },
    {
        id: 3,
        title: "Client: Acme Corp Discovery",
        date: "Feb 12, 11:30 AM",
        summary: "Client requirements gathering. Key focus on security and compliance modules.",
        participants: 4
    }
];

const MeetingList = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Recent Meetings</h1>
                    <p className={styles.subtitle}>View summaries and action items</p>
                </div>
                <button className={styles.uploadBtn}>
                    <span>+</span> Upload Transcript
                </button>
            </div>

            <div className={styles.grid}>
                {MOCK_MEETINGS.map(meeting => (
                    <div key={meeting.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.meetingTitle}>{meeting.title}</h3>
                            <span className={styles.date}>{meeting.date}</span>
                        </div>
                        <p className={styles.summary}>{meeting.summary}</p>
                        <div className={styles.footer}>
                            <span className={styles.participants}>👥 {meeting.participants} participants</span>
                            <button className={styles.viewBtn}>View details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetingList;
