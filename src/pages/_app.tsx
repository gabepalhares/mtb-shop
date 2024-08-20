import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { Header } from "../components/Header"
import { Container } from "@/styles/pages/app";
import { CartContextProvider } from "../contexts/CartContext"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {  
  return (
  <CartContextProvider>
  <Container>
    <Header />
    <ToastContainer />
    <Component {...pageProps} />
  </Container>
  </CartContextProvider>
  )
}