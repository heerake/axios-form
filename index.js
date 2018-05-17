import axios from 'axios';
import queryString from 'query-string';

export default function (url, data, config) {
    config = config || {};
    config.headers = Object.assign({}, config.headers, {
        'content-type': 'application/x-www-form-urlencoded'
    });

    return axios.post(url, queryString.stringify(data), config);
}