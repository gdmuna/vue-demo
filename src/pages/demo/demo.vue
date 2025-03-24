<template>
    <div class="w-full max-w-screen-sm h-full mx-auto px-10 py-10">
        <div class="m-4 flex flex-row justify-center items-center">
            <h1 class="text-2xl font-bold">Demo Page</h1>
        </div>
        <div class="m-4 flex flex-row flex-wrap justify-center items-center gap-2">
            <button class="btn btn-neutral">Neutral</button>
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-accent">Accent</button>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-error">Error</button>
        </div>
        <div class="m-4 flex flex-row flex-wrap justify-center items-center gap-2">
            <button class="btn btn-soft">Default</button>
            <button class="btn btn-soft btn-primary">Primary</button>
            <button class="btn btn-soft btn-secondary">Secondary</button>
            <button class="btn btn-soft btn-accent">Accent</button>
            <button class="btn btn-soft btn-info">Info</button>
            <button class="btn btn-soft btn-success">Success</button>
            <button class="btn btn-soft btn-warning">Warning</button>
            <button class="btn btn-soft btn-error">Error</button>
        </div>
        <div class="m-4 flex flex-col flex-wrap justify-center items-center gap-2">
            <input type="text" placeholder="请输入姓名" class="input" v-model="userName" />
            <input type="text" placeholder="请输入邮箱" class="input" v-model="userMail" />
            <button class="btn btn-wide btn-soft btn-secondary" @click="summit()">
                <font-awesome-icon icon="fa-solid fa-heart" />
                提交
            </button>
        </div>
        <div class="m-4 flex flex-col flex-wrap justify-center items-center gap-2" :class="isShow ? 'block' : 'hidden'">
            <div class="card w-96 bg-base-100 card-md shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">尊敬的 {{ userName }}</h2>
                    <p>你的邮件地址是 {{ userMail }}</p>
                    <div class="justify-end card-actions">
                        <button class="btn btn-primary" @click="confirm()">我已知晓</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoPage',
    components: {},
    setup() {
        return {};
    },
    data() {
        return {
            isShow: false,
            userName: null,
            userMail: null
        };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        // 提交按钮
        async summit() {
            this.isShow = true;
        },
        // 确认按钮
        async confirm() {
            this.isShow = false;
        }
    }
};
</script>

<style scoped></style>
