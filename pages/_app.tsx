import '../styles/global.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 text-gray-600 dark:bg-gray-900 dark:text-gray-200 h-screen">
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
