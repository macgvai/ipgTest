Ext.define('ipgTest.model.Personnel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string',
            defaultValue: 'name'
        }, {
            name: 'dateOfBirth',
            type: 'date',
            defaultValue: '1986-12-15'
        }, {
            name: 'description',
            type: 'string',
            defaultValue: 'description'
        }, {
            name: 'quantity',
            type: 'number',
            defaultValue: '15'
        }, {
            name: 'group',
            type: 'int'
        }
    ]

});
