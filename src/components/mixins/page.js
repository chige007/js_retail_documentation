export default {
    props: {
    },
    data () {
        return {
            properties_fields: {
                "prop": {
                    label: '属性名',
                    sortable: true
                },
                "type": {
                    label: '类型',
                    sortable: true
                },
                "default": {
                    label: '默认值',
                    sortable: true
                },
                "description": {
                    label: '说明'
                }
            },
            events_fields: {
                "event": {
                    label: '事件名',
                    sortable: true
                },
                "param": {
                    label: '参数',
                    sortable: true
                },
                "description": {
                    label: '说明'
                }
            },
            methods_fields: {
                "method": {
                    label: '方法名',
                    sortable: true
                },
                "param": {
                    label: '参数',
                    sortable: true
                },
                "return": {
                    label: '返回值',
                    sortable: true
                },
                "description": {
                    label: '说明'
                }
            }
        }
    },
    computed: {
        
    },
    methods: {
    },
    mounted: function(){
        this.$emit('viewIn');
    }
}