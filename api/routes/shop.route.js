const express = require('express');
const app = express();
const routes = express.Router();

// Require Business model in our routes module
let Shops = require('../models/Shops');
let Users = require('../models/Users');

const controller = require('./register/register.controller');


routes.route('/register').post(controller.add);
routes.route('/login').post(controller.login);

// Defined store route
routes.route('/add').post(async function (req, res) {
  const {shopName, shopMail, shopAddress, user} = req.body;
  if (req.body.shopId) {
    let count =0;
    await user.forEach(element => {
      const userObj = {};
      userObj.userName = element.name;
      userObj.userMail = element.email;
      userObj.shopId = req.body.shopId;
      userObj.userId = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      let user = new Users(userObj);
      user.save()
      .then(user => {
        count += 1;
      });
    });
    res.status(200).json('Users added successfully !!');
  }
  else{
  const shopObj = {};
  shopObj.shopName = shopName;
  shopObj.shopMail = shopMail;
  shopObj.shopAddress = shopAddress;
  shopObj.shopId = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  let shops = new Shops(shopObj);
  shops.save()
    .then(async shop => {
      let count =0;
      await user.forEach(element => {
        const userObj = {};
        userObj.userName = element.name;
        userObj.userMail = element.email;
        userObj.shopId = shopObj.shopId;
        userObj.userId = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        let user = new Users(userObj);
        user.save()
        .then(user => {
          count += 1;
        });
      });
      res.status(200).json({'Shop': 'Shop is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  }
});

async function getUsers(shops) {
  const json = [];
  return new Promise(async function(resolve, reject) {
    let count =0;
   await shops.forEach(async (shop, index) => {
      await Users.find({shopId: shop.shopId},async function (err, users){
        if(err){
          console.log(err);
        }
        else {
          const obj = {};
          obj.shopName = shop.shopName;
          obj.shopMail = shop.shopMail;
          obj.shopAddress = shop.shopAddress;
          obj.shopId = shop.shopId;
          obj.users = users;
        json.push(obj);
        }
        });
        count += 1;
        if (count === shops.length) {
          resolve(json);
        }
  });
  });
}

// Defined get data(index or listing) route
routes.route('/').get(async function (req, res) {

  const shops = await Shops.find(async function (err, shops){
    if(err){
      console.log(err);
    }
    else {
      return shops;
    }
     });
  const users = await getUsers(shops);
    console.log(users)
    res.json(users);

});

// Defined edit route
routes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
routes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
routes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = routes;