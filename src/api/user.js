import request from '@/utils/request';

const moduleUrl = '/user';

const user = {
    // 查询用户个人信息
    getUserInfo(data) {
        return request.get(`${moduleUrl}/getUserInfo`, data);
    },
    // 修改用户个人信息
    updateUserInfo(data) {
        return request.put(`${moduleUrl}/updateUserInfo`, data);
    },
    // 修改用户密码
    updatePassword(data) {
        return request.put(`${moduleUrl}/updatePassword`, data);
    }
};

export default user;
