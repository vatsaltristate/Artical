const db = require("../model");
const Artical = db.artical;              
const User = db.user;      
const Op = db.Sequelize.Op;

module.exports = {
  getArticalTable: async (req, res) => {
    const responseData = await Artical.findAll({})

    console.log('response data = ', responseData)

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

// exports.create = (req, res) => {
//   console.log("data ::::", req.body)
//     if (!req.body.name) {
//       res.status(400).send({
//         message: "Empty data"
//       });
//       return;
//     }
  
//     const user = {
//       id : req.body.id,
//       name: req.body.name,
//       email: req.body.email,
//       status: req.body.status ? req.body.status : false
//     };
  
//     User.create(user)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Somethings went wrong creating"
//         });
//         console.log('error  :: ' + err)
//       });
//   };
  

// exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     User.findOne({
//       where: { id : id }
//     })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving data "
//         });
//       });
//   };


//   exports.findAll = (req, res) => {
//     const name = req.body.name;
//     var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
//     Artical.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Somethings went wrong data not found"
//         });
//       });
//   };
