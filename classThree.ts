type Neume = number | string
const add = (num1: Neume, num2: Neume) => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }
    else{
        return num1.toString() + num2.toString()
    }
}
console.log(add(3,3));
console.log(add(3, '3'));
console.log(add('3', '3'));

// in guard
type NormalUser = {
    name: string
}
type AdminUser = {
    name: string, 
    role: 'Admin'
};
const getUserInfo = (user: NormalUser | AdminUser) => {
    if('role' in  user){
        console.log(`This ${user.name} and his role  is: ${user.role}`)
    }
    else{
        console.log(`${user.name}`)
    }
}
getUserInfo({name: 'Mr', role: 'Admin'})
getUserInfo({name: 'Mr'})