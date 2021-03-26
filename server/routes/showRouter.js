const express = require("express");
const router = express.Router();
const showController = require("../controller/showController");

router
  .route("/")
  .get(showController.getAllList, (req, res) => {
    res.status(200).json(res.locals.show);
  })
  .post(showController.postList, (req, res) => {
    res.status(200).json({});
  });

router.route("/:id").delete(showController.deleteList, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
