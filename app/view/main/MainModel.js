Ext.define('ipgTest.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: [
        'ipgTest.store.Personnel'
    ],

    stores: {
        users: {
            type: 'personnel'
        }
    },

     data: {
        // Признак блокировки кнопок 
        buttonDisable: true
    }
});
