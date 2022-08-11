import axios from 'axios';

export function loginService(user) {
  return axios
    .post('http://localhost:4000/api/users/login', user)
    .then((res) => res)
    .catch((err) => err.response);
}
