import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Layout = ({ title, children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
			</header>
			<main className={styles.main}>{children}</main>
		</div>
	 );
}

export default Layout;
