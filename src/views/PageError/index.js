function PageError(props) {
  //    return <h1>Page not Found</h1>
  //   return <h1>Internal Server Error</h1>
  document.title = 'Error ' + props.code

  const ErrorMessage = () => {
    if (props.code === '404')
      return (
        <>
          <h1 className='text-muted'>Page not found</h1>
          <h2 className='text-muted'>Please contact admin</h2>
        </>
      )
    if (props.code === '403')
      return (
        <>
          <h1 className='text-muted'>Forbidden</h1>
          <h2 className='text-muted'>Please login</h2>
        </>
      )
    return <h1 className='text-muted'>Internal Server Error</h1>
  }

  return (
    <div className='d-flex w-100 py-5 mt-5 flex-column justify-content-center align-items-center bg-light'>
      <ErrorMessage />
    </div>
  )
}

export default PageError
