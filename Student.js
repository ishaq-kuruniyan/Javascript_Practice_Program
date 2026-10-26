//details name age mark
class Student {

    constructor() {
        console.log("constructor calling")
        this.name = "rahul"
        this.age = 23
        this.mark = 67
    }

        display()
        {
            console.log(this.name)
            console.log(this.age)
            console.log(this.mark)

        }
    }

    const Studentobj = new Student()
    Studentobj.display()