const { Router } = require("express");
const router = Router();
const util = require("../services/util");
const vendedorAPI = require("../controllers/vendedorAPI");

const ensureToken = util.validatedToken;

router.get("/token", vendedorAPI.getToken);
router.post("/create", ensureToken, vendedorAPI.create);
router.post("/vendedor/:id", ensureToken, vendedorAPI.list);
router.get("/vendedores", ensureToken, vendedorAPI.listAll);
router.get("/comision/:id", ensureToken, vendedorAPI.comision);
router.post("/create-topic", ensureToken, vendedorAPI.createTopic);
router.get("/topics", ensureToken, vendedorAPI.listTopics)
router.delete("/topic", vendedorAPI.deleteTopic);

module.exports = router;