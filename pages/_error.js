import MyHeader from '../components/headers.js'
import Error from 'next/error'

function Error404({ statusCode }) {
  return (
    <div className="darkmode">
      <div className="container">
        <MyHeader />
        <main className="body-error-page">
          <a className="text-error-page">
            {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
          </a>
          <a className="text-error-page">
            Please come back later, or check this url!
          </a>
        </main>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error404