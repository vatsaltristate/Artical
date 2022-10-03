const db = require("../model");
const Artical = db.artical;              
const User = db.user;      
const Op = db.Sequelize.Op;

module.exports = {
  getArticalTable: async (req, res) => {
    const responseData = await Artical.findAll({})

    //console.log('response data = ', responseData)

    const data = []
    const json = {}

    responseData.map(row => {
      data.push(row.dataValues)
    })
    // console.log('data = ', data)

    json['response'] = data
    // console.log('json = ', json);

    res.send(json)
  }
}

