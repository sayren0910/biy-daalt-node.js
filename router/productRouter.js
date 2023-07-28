const express = require('express');
const userModel = require('../model/user');
const router = express.Router();
const {postData, getData, getDataId, putData, deleteData, like} = require("../controller/productController")

router.route('/').post(postData).get(getData);
router.route('/search/:key').get(getDataId);
router.route('/:id').put(putData).delete(deleteData);
router.route('/:id/like').post(like)

module.exports = router;