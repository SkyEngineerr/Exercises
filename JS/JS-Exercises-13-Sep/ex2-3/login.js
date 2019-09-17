function check (profile, data){
    for (let i = 0; i <data.length; i++) {
        if (data[i].name == profile && data[i].username == data[i].username&& data[i].password == data[i].password) {
            return console.log ('You logined')
        }
        
    }
 
}

let database = [{
    name: 'Eren',
    username: 'sailer',
    password: '12345'
} , {
    name: 'John',
    username: 'captain',
    password: '1234'
}, {
    name: 'Andri',
    username: 'blackwidow',
    password: '123'
}]

check ('Andri', database);
