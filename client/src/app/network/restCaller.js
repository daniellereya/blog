import * as axios from 'axios';

export default class RestCaller {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000';
    }

    submitRequest(httpMethod, endPoint, urlParams = null, payload = null) {
        const httpMethodLower = httpMethod.toLowerCase();
        switch (httpMethodLower) {
            case "get": {
                return axios.get(endPoint, {
                    params: urlParams
                });
            }
            case "post": {
                return axios.post(endPoint, payload);
            }
            default: {
                console.log("Unrecognized method: " + httpMethod);
                return Promise.resolve("Unrecognized method: " + httpMethod);
            }
        }
    }

    performRequest(httpMethod, endPoint, successCallback, errorCallback, urlParams = null, payload = null) {
        return this.submitRequest(httpMethod, endPoint, urlParams, payload)
            .then(successCallback)
            .catch(errorCallback);
    }
}