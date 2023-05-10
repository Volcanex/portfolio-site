import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <header className={styles['App-header']}>
                    <h1 className={styles.Title}>Gabriel&apos;s playground!</h1>
                    <button className={styles.Home_button}>Enter</button>
                </header>
            </div>
        </div>
    );
}

export default App;
