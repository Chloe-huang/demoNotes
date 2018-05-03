import axios from 'axios'

const fetch = (
    url, 
    params = {},
    options
) => {

    let _options = Object.assign({
        method: 'get',
        toastInfo: true,
        withCredentials: true
    }, options)

    let [ _params, _data ] = _options.method === 'get' ? [ params, ''] : [ '', params]

    return axios({
            method: _options.method,
            url: url,
            params: _params,
            data: _data,
            withCredentials: _options.withCredentials
        })
        .then(res => {
            let _res = res.data

            //doSomething

            return _res
        })
        .catch(e => {

            //doSomething
            //错误上报

        })
}

export default fetch