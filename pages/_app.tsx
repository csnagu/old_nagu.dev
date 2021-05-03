import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 text-gray-600 dark:bg-gray-900 dark:text-gray-200 h-screen">
      <Component {...pageProps} />
    </div>
  )
}
