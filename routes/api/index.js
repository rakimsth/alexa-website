const router = require("express").Router();
const mailer = require("../../utils/mailer");
router.post("/", async (req, res, next) => {
    console.log(req.body);
    let fullname = req.body.full_name;
    let organization = req.body.organization;
    let email = req.body.email;
    let country = req.body.country;
    const data = await mailer.main({ fullname, organization, email, country });
    try {
        return res.json(data);
    } catch (e) {
        return e;
    }
});
module.exports = router;
