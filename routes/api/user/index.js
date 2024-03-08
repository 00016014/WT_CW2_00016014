const express = require("express");
const { validationResult } = require("express-validator");
const { registerValidationRules } = require("../../../validators");

const router = express.Router();
const user_controller = require("../../../controllers/api");

router.post("/to-do", registerValidationRules(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    user_controller.add_task(req, res);
});

module.exports = router;