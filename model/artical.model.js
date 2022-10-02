module.exports = (sequelize, Sequelize) => {
    const Artical = sequelize.define("artical", {
    Id: {
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      }
    // createdAt : {
    //     type: false
    //   },
    //   updatedAt: {  
    //   type : false
    // }
    },{
      tableName:'artical',
      timestamps:false
    });
    return Artical;
  };