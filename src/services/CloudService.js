import axios from 'axios';

export default function CloudService(route) {
  return axios
    .post('http://localhost:4000/api/cloud/custom_dir', route)
    .then((res) => {
      const {data} = res
      const {directories, files} = data
      return {directories, files}
    });
}
