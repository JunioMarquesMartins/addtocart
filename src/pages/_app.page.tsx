import '../styles/global.css'
import { Provider } from 'react-redux'
import store from '../store'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
