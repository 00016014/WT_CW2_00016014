const { body } = require("express-validator");

const registerValidationRules = () => {
    return [
        body("textInput").notEmpty().withMessage("Task title can not be empty"),
        body("dateInput").notEmpty().withMessage("Please choose date"),
        body("textarea").notEmpty().withMessage("Description part can not be empty"),
    ];
};

module.exports = {
    registerValidationRules,
};
