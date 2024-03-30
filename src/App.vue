<template>
    <router-view></router-view>
</template>

<script lang="js">
export default {
    name: 'App',
    components: {},
    data() {
        return {};
    },
    created() {
        document.addEventListener('backbutton', this.goBack); // 监听移动端设备的后退按钮
    },
    destroyed() {
        document.removeEventListener('backbutton', this.goBack); // 页面销毁时移除监听
    },
    methods: {
        // 用户在移动端设备点击后退按钮时，返回上一条路由
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>
