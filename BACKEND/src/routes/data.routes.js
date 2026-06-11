const dataRouter= require("express").Router();
const dataController = require("../controllers/data.controllers")


/**
 * POST  /api/data/create
 */
dataRouter.post("/create",dataController.create)

/**
 * GET /api/data/get
 */
dataRouter.get("/get", dataController.get)


module.exports= dataRouter