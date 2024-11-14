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
        return {};
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {}
};
</script>

<style scoped></style>
