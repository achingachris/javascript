const userDisplay = document.getElementById('user');

function getUser() {
    fetch('../data/users.json')
    .then((res) => res.json)
    .then((data) => {
        data.forEach(function(user) {
            `
            <ul>
                <li>Name: ${name}, Age ${age}</li>
            </ul>
            `;
        } )
    });
}

getUser()