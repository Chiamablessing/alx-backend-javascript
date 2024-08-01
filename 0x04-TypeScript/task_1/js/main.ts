interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract:boolean,
    [propName: string]: any,
  }

  interface Directors extends Teacher {
    numberOfReports: number,
  }

  const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

  class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework = () : string => 'Currently working';

    displayName = () : string => this.firstName;
  }

  // Interface for the StudentClass constructor
    interface StudentConstructor{
    new (firstName: string, lastName: string): StudentInterface;
  }
  const student = new StudentClass("Smith", "jane");
  console.log(student.displayName())
  console.log(student.workOnHomework())
