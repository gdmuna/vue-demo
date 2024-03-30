const apiUrl = import.meta.env.VITE_API_URL;

// 封装 fetch 作为请求函数
function request(url, data, options) {
    // 定义请求选项
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    //  返回一个 fetch 函数调用的 Promise 对象
    return fetch(`${apiUrl}${url}`, requestOptions)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((res) => res.data)
        .catch((error) => {
            console.error('Request error:', error);
            throw error;
        });
}

export default request;
