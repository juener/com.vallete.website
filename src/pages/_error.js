import ErrorPage from '../components/structure/Error';

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? <ErrorPage statusCode={statusCode} />
          : <ErrorPage />}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error