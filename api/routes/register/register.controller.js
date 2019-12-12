let Admin = require('../../models/Admin');

function add(req, res) {
    let user = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password:  req.body.password,
      });
      user.save()
         .then(doc => {

           res.json(doc);
         })
         .catch(err => {
           console.error(err)
         })
}

function login(req, res) {
    const query = {
        userName: req.body.userName,
      };

    Admin.find(query)
       .then(doc => {
         res.json(doc);
       })
       .catch(err => {
         console.error(err)
       })
}


module.exports =  {
    add,
    login,
}