//using instance of guard
class Person {
    name: string
    constructor(name: string){
        this.name = name
    }
    getSleep(studyHours: number){
        console.log(`${this.name} study about${studyHours} hours regularly`)
    }
}

class Student4  extends Person {
    constructor(name: string){
        super(name)
    }
    doStudy(studyHours: number){
        console.log(`${this.name} study about${studyHours} hours regularly`)
    }
}
class Teacher4 extends Person{
    constructor(name: string){
        super(name)
    }
    takeClass(studyHours: number){
        console.log(`${this.name} study about${studyHours} hours regularly`)
    }
}


const getUserInfo = 