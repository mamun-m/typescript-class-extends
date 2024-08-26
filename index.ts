class User {
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`userName :${this.userName} , age :${this.age}`);
  }
}

class Student extends User {
  studentid: number;
  constructor(userName: string, age: number, studentid: number) {
    super(userName, age);
    this.studentid = studentid;
  }
  display(): void {
    console.log(
      `username :${this.userName} , age :${this.age}, studentid :${this.studentid}`
    );
  }
}

const use1 = new Student("mia mamun", 21, 564);
use1.display();
