'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'dueDate', Sequelize.DATE);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'dueDate');
    },
};
