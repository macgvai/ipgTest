Ext.define('ipgTest.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ipgTest.model.Personnel',

    data: { items: [
            { "name": "John", "dateOfBirth": "1990-01-15", "description": "Some text", "quantity": 10 },
            { "name": "Alice", "dateOfBirth": "1985-05-20", "description": "Another text", "quantity": 15 },
            // Другие строки данных...
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
