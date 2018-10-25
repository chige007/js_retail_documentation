<template>
        <Layout :fit="true">
            <LayoutPanel region="west" style="width:240px;" title="组件列表">
                <SideMenu :style="{width: '100%'}" :data="menus"></SideMenu>
            </LayoutPanel>
            <LayoutPanel region="center" style="height:100%">

            </LayoutPanel>
        </Layout>
</template>
<script>
    export default {
        data() {
            return {
                menus: [{
                    text: "表格"
                }]
            }
        }
    }
</script>

<style lang="less">

</style>


