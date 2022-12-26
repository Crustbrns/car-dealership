var passwordValidator = require('password-validator');

var schema = new passwordValidator();
schema
    .is().min(2, 'VARIABLE name should have a minimum length of 2 characters')
    .is().max(20, 'VARIABLE name should have a maximum length of 20 characters')
    .has().uppercase(1, 'VARIABLE name should have a minimum of 1 uppercase letter')
    .has().lowercase(1, 'VARIABLE name should have a minimum of 1 lowercase letter')
    .has().not().digits(0, 'VARIABLE name should not have digits')
    .has().not().spaces(0, 'VARIABLE name should not have spaces')

export default function validateField(field) {
    return schema.validate(field, { details: true });
}