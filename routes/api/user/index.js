const express = require("express");
const { validationResult } = require("express-validator");
const { registerValidationRules } = require("../../../validators");
const task_controller = require("../../../controllers/api");
const router = express.Router();

router.post("/to-do", registerValidationRules(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    task_controller.add_task(req, res);
});

router.post("/edit/:id", registerValidationRules(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    task_controller.edit_task(req, res);
});


module.exports = router;