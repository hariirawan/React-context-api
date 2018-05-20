const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Kost = require('../models/kost');

router.get('/', (req, res, next) => {
   Kost
      .find()
      .exec()
      .then(docs => {
         if (docs.length > 0) {
            res.status(200).json({
               code: 200,
               message: 'success',
               payload: docs.map(data => {
                  return {
                     _id: data._id,
                     name: data.name,
                     desc: data.desc,
                     address: data.address,
                     picture: data.picture,
                     request: {
                        type: 'GET',
                        url: 'http://localhost:8000/kost/' + data._id
                     }
                  }
               })
            })
         } else {
            res.status(404).json({
               code: 404,
               message: 'NotFound',
               payload: []
            })
         }
      })
      .catch(err => {
         console.log("error")
      })
})

router.post('/', (req, res, next) => {
   const kost = new Kost({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      desc: req.body.desc,
      address: req.body.address,
      picture: req.body.picture
   });

   kost
      .save()
      .then(res => {
         console.log("success")
      })
      .catch(err => err);
   res.status(201).json({
      code: 201,
      message: 'success'
   })
});

router.get('/:kostId', (req, res, next) => {
   const id = req.params.kostId;
   Kost.findById(id)
      .exec()
      .then(docs => {
         if (docs) {
            res.status(200).json({
               code: 200,
               message: 'success',
               payload: {
                  _id: docs._id,
                  name: docs.name,
                  desc: docs.desc,
                  address: docs.address,
                  picture: docs.picture,
                  request: {
                     type: 'GET',
                     url: 'http://localhost:8000/kost'
                  }
               }
            })
         }
      })
      .catch(error => {
         console.log("error")
      })
})

router.delete('/:kostId', (req, res, next) => {
   const id = req.params.kostId;
   Kost
      .remove({ _id: id })
      .then(result => {
         res.status(200).json({
            code: 200,
            message: 'success',
            require: {
               type: 'GET',
               url: 'http://localhost:8000/kost'
            }
         })
      })
      .catch(err => {
         res.status(500).json({
            code: 500,
            message: 'error',
            require: {
               type: 'GET',
               url: 'http://localhost:8000/kost'
            }
         })
      })
});

module.exports = router;