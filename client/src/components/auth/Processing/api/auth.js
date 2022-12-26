export class UserData{
    constructor(FirstName, LastName, Email, Password){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
    }
}

export function createAccount(active, userData) {
    if (active) {
        console.log('Conditions are satisfied', userData);
    }
}