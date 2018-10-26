const data = [
    {
        method: 'getOptions',
        param: 'none',
        description: '返回表格的 Options。'
    },
    {
        method: 'getSelections',
        param: 'none',
        description: '返回所选的行，当没有选择任何行的时候返回一个空数组。'
    },
    {
        method: 'getAllSelections',
        param: 'none',
        description: '返回所有选择的行，包括搜索过滤前的，当没有选择任何行的时候返回一个空数组。'
    },
    {
        method: 'getData',
        param: 'useCurrentPage',
        description: '或者当前加载的数据。假如设置 useCurrentPage 为 true，则返回当前页的数据。'
    },
    {
        method: 'getRowByUniqueId',
        param: 'id',
        description: '根据 uniqueId 获取行数据。'
    },
    {
        method: 'load',
        param: 'data',
        description: '加载数据到表格中，旧数据会被替换。'
    },
    {
        method: 'append',
        param: 'data',
        description: '添加数据到表格在现有数据之后。'
    },
    {
        method: 'prepend',
        param: 'data',
        description: '插入数据到表格在现有数据之前。'
    },
    {
        method: 'remove',
        param: 'params',
        description: '从表格中删除数据，包括两个参数： field: 需要删除的行的 field 名称，values: 需要删除的行的值，类型为数组。'
    },
    {
        method: 'insertRow',
        param: 'params',
        description: '插入新行，参数包括：index: 要插入的行的 index，row: 行的数据，Object 对象。'
    },
    {
        method: 'updateRow',
        param: 'params',
        description: '更新指定的行，参数包括：index: 要更新的行的 index，row: 行的数据，Object 对象。'
    },
    {
        method: 'updateCell',
        param: 'params',
        description: '更新一个单元格，params包含以下属性：index: 行索引。field: 字段名称。value: 新字段值。'
    },
    {
        method: 'refresh',
        param: 'params',
        description: '刷新远程服务器数据，可以设置{silent: true}以静默方式刷新数据，并设置{url: newUrl}更改URL。'
    },
    {
        method: 'checkAll',
        param: 'none',
        description: '选中当前页面所有行。'
    },
    {
        method: 'uncheckAll',
        param: 'none',
        description: '取消选中当前页面所有行。'
    },
    {
        method: 'check',
        param: 'index',
        description: '选中某一行，行索引从0开始。'
    },
    {
        method: 'uncheck',
        param: 'index',
        description: '取消选中某一行，行索引从0开始。'
    }
]
module.exports = data;