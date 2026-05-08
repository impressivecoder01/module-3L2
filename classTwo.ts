class Parent {
    name: string;
    age: number;
    address: string
    constructor(name: string, age: number, address: string){
        this.name =name
        this.age= age
        this.address= address
    }
}

class Student extends Parent {
    // name: string;
    // age: number;
    // address: string

    // constructor (){
        // this.name = name,
        // this.age = age
        // this.address = address
    // }
    getSleep(sleepHours: number) {
        console.log(`${this.name} ghumay ${sleepHours}`)
    }
}
const student1 = new Student(`mr. student`,22, `bd`)
student1.getSleep(15)

class Teacher extends Parent{
    // name: string;
    // age: number;
    // address: string;
    designation: string // extra property

    constructor (name: string, age: number, address: string, designation: string){
        // this.name = name,
        // this.age = age
        // this.address = address
        super(name, age,address)
        this.designation = designation
    }
    getSleep(sleepHours: number) {
        console.log(`${this.name} ghumay ${sleepHours}`)
    }
    takeClass(classTakeHour: number){
        console.log(`${this.name} ${classTakeHour} ghonta class ney`);
    }
}

const teacher1 = new Teacher(`mr.teacher`, 33, 'bd', 'none')
teacher1.takeClass(20)