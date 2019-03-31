export default () => {
  localStorage.setItem('isLogedIn', 'false')
  return { type: 'LOG_OUT' }
}