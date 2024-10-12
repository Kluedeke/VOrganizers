let users = JSON.parse(localStorage.getItem('users')) || [{username: 'admin', password: 'admin', roles: ['admin']}]

export function register(user) {
    if (users.map(u => u.username).includes(user.username)) {
        return 'Benutzername bereits vergeben'
    } else if (!user.username || !user.password) {
        return 'Benutzername oder Passwort leer'
    } else {
        users.push({...user, roles: []})
        store()
    }
}

export function login(user) {
    return users.filter(u => u.username === user.username && u.password === user.password)[0]
}

export function getUsers() {
    return users.map(u => { return {username: u.username, roles: u.roles} })
}

export function deleteUser(user) {
    users = users.filter(u => u.username !== user.username)
    store()
}

function store() {
    localStorage.setItem('users', JSON.stringify(users))
}