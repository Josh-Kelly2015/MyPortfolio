const router = require("express").Router();
const WebDevStatsRoutes = require("./WebDevStats");

router.use("/webdevstats", WebDevStatsRoutes);

module.exports = router;
