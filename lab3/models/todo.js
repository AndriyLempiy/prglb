'use strict';
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        'Todo',
        {
            description: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
            dueDate: DataTypes.DATE,
            endDate: DataTypes.DATE
        },
        {},
    );
    Todo.associate = function(models) {
        // associations can be defined here
    };
    return Todo;
};
