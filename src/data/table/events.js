const data = [
    {
        event: 'onClickRow',
        param: 'row, $element',
        description: '当用户点击某一行的时候触发，参数包括：row：点击行的数据，$element：tr 元素，field：点击列的 field 名称。'
    },
    {
        event: 'onDblClickRow',
        param: 'row, $element',
        description: '当用户双击某一行的时候触发，参数包括：row：点击行的数据，$element：tr 元素，field：点击列的 field 名称。'
    },
    {
        event: 'onClickCell',
        param: 'field, value, row, $element',
        description: '当用户点击某一列的时候触发，参数包括：field：点击列的 field 名称，value：点击列的 value 值，row：点击列的整行数据，$element：td 元素。'
    },
    {
        event: 'onDblClickCell',
        param: 'field, value, row, $element',
        description: '当用户双击某一列的时候触发，参数包括：field：点击列的 field 名称，value：点击列的 value 值，row：点击列的整行数据，$element：td 元素。'
    },
    {
        event: 'onSort',
        param: 'name, order',
        description: '当用户对某列进行排序时触发，参数包括：name：排序列的 filed 名称，order：排序顺序。'
    },
    {
        event: 'onCheck',
        param: 'row',
        description: '当用户选择某一行时触发，参数包含：row：与点击行对应的记录，$element：选择的DOM元素。'
    },
    {
        event: 'onUncheck',
        param: 'row',
        description: '当用户反选某一行时触发，参数包含：row：与点击行对应的记录，$element：选择的DOM元素。'
    },
    {
        event: 'onCheckAll',
        param: 'rows',
        description: '当用户全选所有的行时触发，参数包含：rows：最新选择的所有行的数组。'
    },
    {
        event: 'onUncheckAll',
        param: 'rows',
        description: '当用户反选所有的行时触发，参数包含：rows：最新选择的所有行的数组。'
    },
    {
        event: 'onLoadSuccess',
        param: 'data',
        description: '远程数据加载成功时触发成功。'
    },
    {
        event: 'onLoadError',
        param: 'status',
        description: '远程数据加载失败时触发成功。'
    },
    {
        event: 'onPageChange',
        param: 'number, size',
        description: '当页面更改页码或页面大小时触发。'
    },
    {
        event: 'onRefresh',
        param: 'params',
        description: '点击刷新按钮后触发。'
    }
]
module.exports = data;