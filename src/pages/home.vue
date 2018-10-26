<template>
    <div>
        首页放一些统计图表
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