import axios from "axios"


const axiosApi = axios.create({
    baseURL:"http://127.0.0.1:8000"
})
export default axiosApi



axiosApi.interceptors.request.use(
    function (config) {
      const token = sessionStorage.getItem("token")
      if (token) {
        config.headers["Authorization"] =
          "token " + sessionStorage.getItem("token")
      }
      
      return config
    },
    function (error) { }
  )