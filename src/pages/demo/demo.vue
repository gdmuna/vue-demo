<template>
    <div class="w-full max-w-screen-sm h-full mx-auto px-10 py-10">
        <var-card class="" title="标题 Title" subtitle="副标题 Subtitle" description="这是一个 Demo 页。This is a demo card.">
            <template #extra>
                <var-space>
                    <var-button color="pink" text-color="#fff">
                        <font-awesome-icon icon="fa-solid fa-heart" />
                        &nbsp;
                        <font-awesome-icon icon="fa-regular fa-heart" />
                    </var-button>
                    <var-button type="primary">Button 1</var-button>
                    <var-button type="info">Button 2</var-button>
                </var-space>
            </template>
        </var-card>
        <var-card class="mt-4" title="查询学号对应的姓名">
            <template #default>
                <var-input v-model="userId" placeholder="请输入学号"></var-input>
                <var-button class="mt-2" type="info" block @click="summit()">查询</var-button>
                <p class="mt-2 text-center">{{ userId }} 对应的姓名是 {{ userName }}</p>
            </template>
        </var-card>
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
            userId: null,
            userName: null
        };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        async summit() {
            const userInfo = await this.$api.user.getUserInfo({
                userId: this.userId
            });
            this.userName = userInfo[0].userName;
        }
    }
};
</script>

<style scoped></style>
