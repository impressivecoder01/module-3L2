// Polymorphism,the 2nd pillar of OOP
class PersonEight {
    getSleep(){
        console.log(`I sleep for 8 hours. teacher`)
    }
}
class StudentEight extends PersonEight{
    getSleep(){
        console.log(`i sleep 7 hours . student`);
    }
}
class NestLevelDeveloper extends PersonEight{
    getSleep(){
        console.log(`I am a developer. I sleep for eight hours`);
    }
}
const getSleepHours = (param: PersonEight) => {
    param.getSleep()
}

const personEight = new PersonEight()
const personEight2 = new StudentEight()
const personEight3 = new NestLevelDeveloper()
getSleepHours(personEight)


class Shape{
    getArea(){
        return 0
    }
}

class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super()
        this.radius= radius
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius
    }
}

class Rectangle extends Shape{
    getArea(): number {
        
    }
}