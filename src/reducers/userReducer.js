const initialValue = { user: null, isLoading: true, errorLogin: false }

export default function userReducer(state = initialValue, action) {
  switch (action.type) {
    case 'AUTH_SUCCSS':
      return { ...state, user: action.user, isLoading: false }
    case 'NO_ACCESS_TOKEN':
      localStorage.clear()
      return { ...state, user: null, isLoading: false }
    case 'AUTH_FAIL':
      localStorage.clear()
      return { ...state, user: null, isLoading: false, errorLogin: true }
    default:
      return state
  }
}
