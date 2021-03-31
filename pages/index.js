import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLES}articles`);
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}

export default function Home({ data }) {
	console.log(data);
  return (
		<>
		<Layout title='De Naald'>
			<div className={styles.grid}>
				{data.map(article =>
						<Link href={`articles/${article.slug}`} key={article.id} >
							<a className={styles.card}>
								<h3>{article.title} &rarr;</h3>
								<p>{article.description}</p>
							</a>
						</Link>
				)}
			</div>
		</Layout>
		</>
  )
}
