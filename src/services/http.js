import axios from 'axios'

const register = {}

const http = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

register.install = function (Vue) {
  Vue.prototype.$http = http
}

export default register

export { http }
