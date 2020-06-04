'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'endDate', Sequelize.DATE);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'endDate');
    },
};
