module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
      name: {
          type: Sequelize.STRING
        },
      email: {
          type: Sequelize.STRING
        },
      status: {
          type: Sequelize.INTEGER
      }
    }, {
      tableName:'user',
      timestamps:false
    });

    return User;
  };