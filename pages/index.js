import Head from 'next/head'
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLES}/articles`);
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}

export default function Home({ data }) {
	console.log(process.env.NEXT_PUBLIC_ARTICLES);
  return (
		<Layout data={data} title='Articles' />
  )
}
