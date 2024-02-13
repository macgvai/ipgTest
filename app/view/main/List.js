/**
 * This view is an example list of people.
 */
Ext.define('ipgTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ipgTest.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    plugins: {
        cellediting: true
    },

    columns: [
        { 
            // dataIndex: 'name',
            xtype: 'combobox',
            label: 'Choose State',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'name',

            store: [
                { name: 'Alabama' },
                { name: 'Alaska' },
                { name: 'Arizona' }
            ]

        },
        { text: 'Email', dataIndex: 'dateOfBirth', flex: 1 },
        { text: 'Phone', dataIndex: 'description', flex: 1 },
        { text: 'Phone', dataIndex: 'quantity', flex: 1 },
        { text: 'пятая колонка', dataIndex: 'quantity', flex: 1 }

    ],

    listeners: {
        select: 'onItemSelected'
    }
});
