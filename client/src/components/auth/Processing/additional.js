function getPassColor(passStrength) {
    let colors =
        [{ id: 0, color: 'rgb(239, 32, 84)' },
        { id: 1, color: 'rgb(246, 166, 29)' },
        { id: 2, color: 'rgb(44, 159, 212)' },
        { id: 3, color: 'rgb(57, 194, 109)' }];

    return colors.find(x => x.id === passStrength.id).color;
}

export function getStrength(passStrength) {
    if (passStrength !== undefined && passStrength.length !== 0) {
        let styles = {
            height: '3px',
            width: `${(passStrength.id + 1) * 25}%`,
            backgroundColor: getPassColor(passStrength),
            marginTop: '10px',
            borderRadius: '4px',
            transition: '.2s'
        }
        return styles;
    }
    let defaultStyles = {
        width: '0%',
        height: '3px',
        transition: '.2s'
    }
    return defaultStyles;
}

export async function generateCode(email) {
    // let code = '';
    // for (let i = 0; i < 6; i++) {
    //     code += `${Math.floor(Math.random() * 10)}`;
    // }
    // console.log(code);
    let code;

    await fetch(`/api/createcode?email=${email}`)
        .then((res) => res.json())
        .then((res) => code = res.code);

    console.log(code);
    return code;
}