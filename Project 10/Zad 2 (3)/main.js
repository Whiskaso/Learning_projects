const user = (name = '', age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}. ${userAge >= 18 ? 'Możesz kupić piwo': 'Nie możesz kupić piwa'}`);
    }

    return showName
}

const mieszko = user('mieszko', 20);
const filip = user('filip', 15);
mieszko();
filip();