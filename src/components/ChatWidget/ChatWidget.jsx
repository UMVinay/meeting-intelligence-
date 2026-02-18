import { useState } from 'react';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your Meeting Intelligence Assistant. How can I help you today?", isBot: true }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMsg = { id: Date.now(), text: input, isBot: false };
        setMessages(prev => [...prev, newUserMsg]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "I can help verify that action item. Would you like me to add it to the list?",
                isBot: true
            }]);
        }, 1000);
    };

    return (
        <div className={`${styles.widget} ${isOpen ? styles.open : ''}`}>
            {isOpen && (
                <div className={styles.window}>
                    <div className={styles.header}>
                        <span>Meeting Assistant</span>
                        <button onClick={toggleChat} className={styles.closeBtn}>&times;</button>
                    </div>
                    <div className={styles.messages}>
                        {messages.map(msg => (
                            <div key={msg.id} className={`${styles.message} ${msg.isBot ? styles.bot : styles.user}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSend} className={styles.inputArea}>
                        <input
                            type="text"
                            placeholder="Ask about your meetings..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.sendBtn}>➤</button>
                    </form>
                </div>
            )}
            <button onClick={toggleChat} className={styles.toggleBtn}>
                {isOpen ? '💬' : '🤖'}
            </button>
        </div>
    );
};

export default ChatWidget;
