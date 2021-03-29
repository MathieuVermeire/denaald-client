import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Layout = ({ data, title }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>{title}</h1>

				<div className={styles.grid}>
					{data.map(article =>
						<div key={article.id} className={styles.card}>
							<h3>{article.title} &rarr;</h3>
							<p>{article.description}</p>
						</div>
					)}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	 );
}

export default Layout;
