const Router = require("express").Router;

const router = Router({
  mergeParams: true,
});

router.get("/schedule", async (req, res) => {
console.log('hi');
return res.json({})
});

module.exports = router;
