import "@/styles/globals.css"
import Layout from "../../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
/*
import '@/styles/globals.css'
import { AuthProvider } from '../../ctx/authContext'
import { CartProvider } from '../../ctx/cartContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CartProvider>
  )
}
*/
