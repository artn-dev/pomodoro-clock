import App from 'next/app'
import '../styles/index.css'


const MyApp = ({ Component, pageProps }) => {
    return <Component { ...pageProps } />
}

export default App
