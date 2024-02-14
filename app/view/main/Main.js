/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ipgTest.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'ipgTest.view.main.MainController',
        'ipgTest.view.main.MainModel',
        'ipgTest.view.main.List',
        'CellEditingPluginOverride'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
            xtype: 'mainlist'
        }]
    });
