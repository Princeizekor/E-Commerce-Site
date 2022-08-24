import React from 'react'
import { Link, } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <p>Looks like You entered a wrong URL please visit <Link to="/">home</Link> page</p>
    </div>
  )
}

export default ErrorPage
