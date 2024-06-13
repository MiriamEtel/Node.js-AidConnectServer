class A {
    constructor(name) {
        this.name = name;
    }
    doWork() {
        console.log(`${this.name} is working...`);
    }
}

let sample = new A('first');
sample.doWork();
//if we do lixe this, we will get error:
//const func=sample.doWork;
//func()
//why: not know which object the function will work on
//this is the resolve, to connect an object to the function by "bind"
const func = sample.doWork.bind(sample);
func();


