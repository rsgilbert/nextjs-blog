import '../styles/global.css'

export default function App({ Component, pageProps }) {
    console.log('I am the app')
    return <Component {...pageProps} />
}