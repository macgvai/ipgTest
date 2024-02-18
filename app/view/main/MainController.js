/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ipgTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClick: function () {
        var view = this.getView(),
            store = view.getStore(),
            Model = store.getModel(),
            rec = new Model();
        view.store.insert(0, rec);
    },

    onCopyClick: function (view, idx, cellIndex, item, e, record) {
        if (!this.getView().getSelection().length) {
            return false;
        }
        var store = view.getStore(),
            data = record.getData(),
            Model = store.getModel();
            rec = new Model();

        delete data.id
        rec.set(data)
        view.store.insert(idx + 1, rec);
    },

    onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
        record.drop();
    }
});
