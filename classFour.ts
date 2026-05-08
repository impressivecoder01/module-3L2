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

//function guard
const isStudent = (user: Person) => {
    return user instanceof Student4
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher4
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(10)
    }else if(isTeacher(user)){
        user.takeClass(23)
    }
    else{
        user.getSleep(2)
    }
}

const studentOne = new Student4('mr.student4')
const teacherOne = new Teacher4('mr.teacher')
getUserInfo(studentOne)
getUserInfo(teacherOne)