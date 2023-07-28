const express = require('express');
const router = express.Router();
const {postData, getData, getDataId, putData, deleteData} = require("../controller/artistController");
const {protect, authorize} = require('../middlewares/protect')

router.route('/').post(protect, authorize("admin"), postData).get(getData);
router.route('/:id').get(getDataId);
router.route('/:id').put(putData).delete(deleteData);

module.exports = router;