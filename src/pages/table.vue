<template>
    <div>
        <div class="api_panel">
            <h4 class="api_title">属性（Properties）</h4>
            <b-table striped hover bordered :items="properties" :fields="properties_fields"></b-table>
        </div>
        <div class="api_panel">
            <h4 class="api_title">事件（Events）</h4>
            <b-table striped hover bordered :items="events" :fields="events_fields"></b-table>
        </div>
        <div class="api_panel">
            <h4 class="api_title">方法（Methods）</h4>
            <b-table striped hover bordered :items="methods" :fields="methods_fields"></b-table>
        </div>
    </div>
</template>

<script>
import page_mixins from '../components/mixins/page';
import properties from '../data/table/properties';
import events from '../data/table/events';
import methods from '../data/table/methods';
export default {
    mixins: [page_mixins],
    data () {
        return {
            properties: properties,
            events: events,
            methods: methods
        }
    },
    mounted () {

    }
}
</script>

<style lang="less">

</style>