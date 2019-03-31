export default () => {
  localStorage.setItem('isLogedIn', 'true')
  return { type: 'LOG_IN_SUCCESS' }
}