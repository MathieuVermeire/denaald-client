import Layout from "../../components/Layout";
import Link from 'next/link';
import Comments from "../../components/Comments";
import AddComment from "../../components/AddComment";
import { useState } from "react";

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLES}articles`)
	const data = await res.json();

	return {
		paths: data.map((articles) => ({ params: { slug: articles.slug}})),
		fallback: false,
	}
}


export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLES}articles/${params.slug}`);
	const data = await res.json();

	return {
		props: {
			data
		},
		revalidate: 1,
	}
}

const DetailPage = ({ data }) => {
	const [comments, setComments] = useState(data.comments);
	console.log([...data.comments]);

	const handleAddComment = async (object) => {
		object.article = data.id;
		const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLES}comments`,{
			method: 'POST',
			body: JSON.stringify(object),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		if(res) {
			setComments([...data.comments, object])
		}
	};

	return (
		<Layout title={data.title}>
			<Link href='/'>
				<a>HOME</a>
			</Link>
			<div>
				<p>{data.author.name}</p>
				<p>{data.description}</p>
				<h2>Comments</h2>
				<Comments comments={comments} />
				<AddComment comments={comments} addComment={handleAddComment} data={data} />
			</div>
		</Layout>
	);
}

export default DetailPage;
