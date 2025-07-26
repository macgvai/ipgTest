// Определение класса представления 'ipgTest.view.main.List'
Ext.define('ipgTest.view.main.List', {
    // Расширение класса 'Ext.grid.Panel'
    extend: 'Ext.grid.Panel',
    // Уникальный идентификатор представления
    xtype: 'mainlist',
    // Алиас для представления
    alias: 'main-list-grid',

    // Указание на контроллер и вью-модель
    controller: 'main',
    viewModel: 'main',

    // Навигация по ячейкам
    selModel: 'cellmodel',

    // Редактирование ячеек по двойному клику
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },

    // Заголовок грида
    title: 'ipgTest',

    // Обработчик события 'selectionchange'
    listeners: {
        selectionchange: function () {
            // Получение ссылки на вью-модель
            const vm = this.getViewModel();
            // Получение выбранных строк
            const selectionRows = this.getSelection();

            // Установка признака блокировки кнопок в зависимости от наличия выбранных строк
            selectionRows.length ? vm.set('buttonDisable', false) : vm.set('buttonDisable', true);
        }
    },

    // Привязка стора к гриду
    bind: {
        store: '{users}'
    },

    // Тулбар с кнопками
    tbar: [
        {
            text: 'Добавить',
            tooltip: 'Добавить',
            // Обработчик события 'onAddClick'
            handler: 'onAddClick'
        },
        {
            text: 'Копировать',
            tooltip: 'Копировать',
            // Привязка состояния кнопки к признаку блокировки
            bind: {
                disabled: '{buttonDisable}'
            },
            // Обработчик события 'onCopyClick'
            handler: 'onCopyClick'
        },
        {
            text: 'Удалить',
            tooltip: 'Удалить',
            // Привязка состояния кнопки к признаку блокировки
            bind: {
                disabled: '{buttonDisable}'
            },
            // Обработчик события 'onRemoveClick'
            handler: 'onRemoveClick'
        }
    ],

    // Столбцы грида
    columns: [
        {
            header: 'Имя',
            dataIndex: 'name',
            flex: 1,
            // Редактор для столбца 'name'
            editor: {
                xtype: 'combo',
                valueField: 'name',
                displayField: 'name',
                store: {
                    type: 'personnel'
                },
                // Обработчик события 'specialkey'
                listeners: {
                    specialkey: 'sendToLocalStorage'
                }
            }
        },
        {
            header: 'Дата рождения',
            xtype: 'datecolumn',
            flex: 1,
            dataIndex: 'dateOfBirth',
            format: 'M d, Y',
            // Редактор для столбца 'dateOfBirth'
            editor: {
                xtype: 'datefield',
                format: 'm/d/y',
                // Обработчик события 'specialkey'
                listeners: {
                    specialkey: 'sendToLocalStorage'
                }
            }
        },
        {
            header: 'Примечания',
            dataIndex: 'description',
            flex: 1,
            // Редактор для столбца 'description'
            editor: {
                xtype: 'textfield',
                // Обработчик события 'specialkey'
                listeners: {
                    specialkey: 'sendToLocalStorage'
                }
            }
        },
        {
            header: 'Количество',
            dataIndex: 'quantity',
            flex: 1,
            // Редактор для столбца 'quantity'
            editor: {
                xtype: 'numberfield',
                // Валидатор для столбца 'quantity'
                validator: function (value) {
                    return Number.isInteger(+value) && value > 0 ? true : 'только целые положительные числа';
                },
                // Обработчик события 'specialkey'
                listeners: {
                    specialkey: 'sendToLocalStorage'
                }
            }
        }
    ]
});
