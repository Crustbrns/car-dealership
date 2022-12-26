var passwordValidator = require('password-validator');

var schema = new passwordValidator();
schema
    .is().min(8, 'Password should have a minimum length of 8 characters')                         // Minimum length 8
    .is().max(100, 'Password should have a maximum length of 100 characters')                     // Maximum length 100
    .has().uppercase(1, 'Password should have a minimum of 1 uppercase letter')                   // Must have uppercase letters
    .has().lowercase(1, 'Password should have a minimum of 1 lowercase letter')                   // Must have lowercase letters
    .has().digits(2, 'Password should have a minimum of 2 digits')                                // Must have at least 2 digits
    .has().not().spaces(0, 'Password should not have spaces')                                     // Should not have spaces

export default function validate(password) {
    return schema.validate(password, { details: true });
}