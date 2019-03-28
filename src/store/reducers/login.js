const initState = localStorage.getItem('isLogedIn')
  ? JSON.parse(localStorage.getItem('isLogedIn'))
  : false

const login = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return true
    default:
      return state
  }
}

export default login