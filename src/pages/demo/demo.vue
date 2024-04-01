<template>
    <div class="main-container">
        <div class="grid">
            <vs-row>
                <vs-col>
                    <h1>Vue Demo</h1>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :sm="6">
                    <vs-input v-model="userId" label="userId" label-float />
                </vs-col>
                <vs-col :sm="6">
                    <vs-button @click="queryUserInfo(userId)">查询用户信息</vs-button>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col>
                    <p>用户ID {{ userInfo.userId }}</p>
                    <p>用户姓名 {{ userInfo.userName }}</p>
                    <p>用户性别 {{ userInfo.gender }}</p>
                    <p>用户年龄 {{ userInfo.age }}</p>
                </vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>
import user from '@/api/user';

export default {
    name: 'DemoPage',
    components: {},
    data() {
        return {
            userId: '',
            userInfo: {
                userId: '',
                userName: '',
                gender: '',
                age: ''
            }
        };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        async queryUserInfo(userId) {
            const userInfo = await user.getUserInfo({ userId });
            this.userInfo = userInfo[0];
        }
    }
};
</script>

<style scoped></style>
