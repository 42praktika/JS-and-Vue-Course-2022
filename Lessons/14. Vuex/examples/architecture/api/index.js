const axios = require('axios');

class Api {
    _baseUrl;

    constructor() {
        this._baseUrl = 'someUrl';
    }

    getItems() {
        return axios.get(this._baseUrl).then(
            // handle correct response
        ).catch(
            // handle errors
        );
    }
}

export default new Api();
