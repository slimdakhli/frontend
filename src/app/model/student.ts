export class Student{

  id: number;
  firstname: string;
  lastname: string;
  birthday: Date;
  gender: string;
  email: string;
  phone: string;
  speciality: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, firstname: string, lastname: string, birthday: Date, gender: string, email: string, phone: string, speciality: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.speciality = speciality;
  }
}
