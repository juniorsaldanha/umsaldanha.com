import Head from 'next/head';
import Link from 'next/link'

const MyHeader = () => (
  <>
    <Head>
      <title className="tittle">Junior Saldanha - @UmSaldanha</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="navbar">
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>
      <Link href="/about">
        <a className="nav-link">About Me</a>
      </Link>
      <Link href="https://instagram.com/umsaldanha">
        <a className="nav-link">Instagram</a>
      </Link>
      <Link href="/error">
        <a className="nav-link">Contact</a>
      </Link>
      <Link href="https://umsaldanha.com/webmail">
        <a className="nav-link-webmail">WebMail</a>
      </Link>
    </div>
  </>
)

export default MyHeader