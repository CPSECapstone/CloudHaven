const baseURL = "http://localhost:4000";

export function post(endpoint, body) {
   return axios.post(`${baseURL}${endpoint}`, body)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function put(endpoint, body) {
   return axios.put(`${baseURL}${endpoint}`, body)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function get(endpoint) {
   return axios.get(`${baseURL}${endpoint}`)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function del(endpoint) {
   return axios.delete(`${baseURL}${endpoint}`)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}
