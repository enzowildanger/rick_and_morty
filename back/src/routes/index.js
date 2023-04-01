const { Router } = require("express");

var { getCharById } = require("../controllers/getCharById.js");
var { getCharDetail } = require("../controllers/getCharDetail.js");

var { postUser } = require("../controllers/postUser.js");
var { getFavs } = require("../controllers/getFavs.js");
var { postFav } = require("../controllers/postFav.js");
var { deleteFav } = require("../controllers/deleteFav.js");
var { login } = require("../controllers/login.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.get("/fav", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

router.get("/login", login);
router.post("/login", postUser);

module.exports = router;
