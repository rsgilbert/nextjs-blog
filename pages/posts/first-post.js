import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/layout"



export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My First post</title>
            </Head>
            
            <h1>First post</h1>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <Image
                src="/images/iphone13.jpeg"
                height={100}
                width="100"
                alt="Iphone13"
            />
        </Layout>
    )
}