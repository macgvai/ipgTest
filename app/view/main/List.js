/**
 * This view is an example list of people.
 */
Ext.define('ipgTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ipgTest.store.Personnel',
        'Ext.selection.CellModel',
        'ipgTest.view.main.MainController'
    ],

    controller: 'main',

    title: 'ipgTest',

    store: {
        type: 'personnel'
    },
    
    plugins: {
        cellediting: true
    },

    tbar: [{
        text: 'Добавить',
        handler: 'onAddClick'
    }, {
        text: 'Копировать',
        handler: 'onCopyClick'
    }],

    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype: 'combo',
                queryMode: 'remote',
                valueField: 'name',
                displayField: 'name',
                store: {
                    type: 'personnel'
                },
            }
        }, {
            xtype: 'datecolumn',
            header: 'dateOfBirth',
            flex: 1,
            dataIndex: 'dateOfBirth',
            format: 'M d, Y',
            editor: {
                xtype: 'datefield',
                format: 'm/d/y',
            }
        }, {
            header: 'description',
            dataIndex: 'description',
            flex: 1,
            editor: {
                xtype: 'textfield',
            }
        }, {
            header: 'quantity',
            dataIndex: 'quantity',
            flex: 1,
            editor: {
                xtype: 'numberfield',
                validator: function (value) {
                    return Number.isInteger(+value) && value > 0 ? true : 'только целые положительные числа'
                }
            }
        }, {
            header: 'ActionColumn',
            xtype: 'actioncolumn',
            width: 70,
            items: [{
                iconCls: 'x-fa fa-check green icon-margin',
                handler: 'onCopyClick',
                tooltip: 'копировать',

            }, {
                iconCls: 'x-fa fa-ban red',
                handler: 'onRemoveClick',
                tooltip: 'удалить',
            }]
        }, 
    ],

});
