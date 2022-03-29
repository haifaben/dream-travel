import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

function AuthMiddleWare({ user, children, isProtected, isAnonymous, isAdmin }) {
  if (!user && isProtected === true) return <Redirect to='/'></Redirect>
  if (user?.role !== 'ADMIN' && isAdmin) return <Redirect to='/'></Redirect>
  if (user && isAnonymous) return <Redirect to='/dashboard'></Redirect>
  return <div>{children}</div>
}

const mapStateToProps = state => ({
  user: state.user.user,
})

export default connect(mapStateToProps, {})(AuthMiddleWare)
