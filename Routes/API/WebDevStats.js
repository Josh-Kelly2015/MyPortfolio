const router = require("express").Router();
const WebDevStatsController = require("../../Controllers/WebDevStatsController");

router
  .route("/")
  .get(WebDevStatsController.findAll)
  .post(WebDevStatsController.create);

router
  .route("/:id")
  .get(WebDevStatsController.findById)
  .put(WebDevStatsController.update)
  .delete(WebDevStatsController.remove);

module.exports = router;
