import axios from 'axios';
class Api {
    constructor() {
        this.baseUrl = 'http://localhost:5000/';
        this.headers = {
            'Content-Type': 'application/json',
        }
        this.axiosService = axios.create({
            baseURL: this.baseUrl
        })
    }
    getApi(path, headers = this.headers) {
        return new Promise((resolve, reject) => {
            this.axiosService
            .get(path, {headers})
            .then(resp => {
                resolve({
                    status: resp.status,
                    statusText: resp.statusText,
                    data: resp.data,
                })
            })
            .catch(error => {
                reject({
                    status: false,
                    statusText: "Error",
                    error
                })
            })
        })
    }
    postApi(path, headers = this.headers) {
        return new Promise((resolve, reject) => {
            this.axiosService
            .post(path, {headers})
            .then(resp => {
                resolve({
                    status: resp.status,
                    statusText: resp.statusText,
                    data: resp.data,
                })
            })
            .catch(error => {
                reject({
                    status: false,
                    statusText: "Error",
                    error
                })
            })
        })
    }
}

export default new Api();