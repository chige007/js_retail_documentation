<template>
    <div>
        欢迎您！
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted () {
        this.$emit('viewIn');
    }
}
</script>

<style lang="less" scoped>
@import "../styles/init.less";

</style>