const users=[];

function getInsertId(){
    if(users.length===0){
        return 1;
    }
    const lastId=users.map(user=>user.id).sort((a,b)=>b-a)[0];
    return lastId+1;
}
function emailExists(email){
    return getUserByEmail(email)!==null;
}
function getUserById(id){
    for(const user of users){
        if(user.id==id){
            return user;
        }
    }
    return null;
}
function getUserByEmail(email){
    for(const user of users){
        if(user.email == email){
            return user;
        }
    }
    return null;
}
function updateUserById(id,updatedUser){
    for(let index in users){
        let user=users[index];
        if(user.id == id){
            user.name = updatedUser.name;
            users[index] = user;
            return user;
        }
    }
    return null;
}
function addUser(newUser){
    users.push(newUser)
}
export default {
    addUser,
    getInsertId,
    emailExists,
    getUserById,
    getUserByEmail,
    updateUserById
}