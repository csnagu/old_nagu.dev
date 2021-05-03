import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "nagu";
export const siteTitle = "nagu.dev";
const descriptionContent = "homepage";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl p-5 mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={descriptionContent} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className="flex flex-row justify-evenly pb-12">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <a className="nav-link" href="https://nagu.hatenablog.jp/">Blog</a>
        <a className="nav-link" href="https://github.com/csnagu">GitHub</a>
      </nav>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl font-medium my-4 mx-0">{name}</h1>
          </>
        ) : (<></>)}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12 mx-0 mb-0">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
