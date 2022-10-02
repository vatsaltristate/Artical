const usermodel = require('../model/user.model');
const db = require("../model");
//const Artical = db.artical;
const User = db.user;

module.exports  =  {
  getStatus: (req, res, next) => {
    const id = req.params.id

    User.findOne({ 
      where: { id: id }  
    })
      .then(responseData => {
        console.log('aaya = ', responseData.dataValues.status)
        const userStatus = responseData.dataValues.status

        if (userStatus === 0) {
          res.send({ 
            "response": 'Status is 0, artical table not allowed' 
          })
        }
        else {
          next()
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
}