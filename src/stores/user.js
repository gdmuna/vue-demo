import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
    state: () => ({
        userId: null,
        account: null,
        nickName: null
    })
});
