export default function HideEmail(Mail) {
    let Email = Mail; 
    let Symbols = Email.indexOf('@') - 2;
    console.log(Symbols);
    if(Symbols > 3){
        Email = Email.replace(Email.slice(2, Symbols), '***');
    }
    return Email;
}