const apiUrl = import.meta.env.VITE_API_URL;

// 封装常规请求函数
const request = {
    // 封装 fetch 作为基础请求函数
    fetch: async (url, options) => {
        return await fetch(`${apiUrl}${url}`, options)
            .then((res) => {
                if (!res.ok) {
                    console.error('Request error:', res.statusText);
                    return false;
                }
                return res.json();
            })
            .then((res) => {
                if (res.code !== 0) {
                    console.error('Request error: Code', res.code);
                    return false;
                }
                return res.data;
            })
            .catch((error) => {
                console.error('Request error:', error);
                return false;
            });
    },
    // 封装 GET 请求
    get: (url, data) => {
        const queryString = new URLSearchParams(data);
        return request.fetch(`${url}${data ? '?' + queryString.toString() : ''}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    // 封装 POST 请求
    post: (url, data) => {
        return request.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    },
    // 封装 PUT 请求
    put: (url, data) => {
        return request.fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    },
    // 封装 DELETE 请求
    delete: (url, data) => {
        return request.fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    },
    // 封装 upload 请求
    upload: (url, formData) => {
        return request.fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: formData
        });
    }
};

export default request;
