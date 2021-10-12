import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from './service/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  positionfirstFormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    poste: new FormControl(),


  });
  studentFormGroup = new FormGroup({
    speciality: new FormControl(),

  });
  teacherFormGroup = new FormGroup({
    matiere: new FormControl(),

  });
  firstname = '';
  lastname = '';
  birthday = '';
  gender = '';
  email = '';
  phone = '';
  poste = '';
  speciality = '';
  matiere = '';

  constructor(private _formBuilder: FormBuilder, private service: ServiceService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {


    // position
    this.positionfirstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],

      email: ['', Validators.required],
      phone: ['', Validators.required],
      poste: ['', Validators.required],




    });
    this.studentFormGroup = this._formBuilder.group({
      speciality: ['', Validators.required]

    });
    this.teacherFormGroup = this._formBuilder.group({
      matiere: ['', Validators.required]

    });
  }
  createStudent(): void {
    const newstudent = {
      firstName: this.firstname,
      lastName: this.lastname,
      birthday: this.birthday,
      gender: this.gender,
      email: this.email,
      phone: this.phone,
      poste: this.poste,
      speciality: this.speciality

    };
    console.log(newstudent);
    this.service.addStudent(newstudent).subscribe(

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });

  }
  createTeacher(): void {
    const newteacher = {
      firstName: this.firstname,
      lastName: this.lastname,
      birthday: this.birthday,
      gender: this.gender,
      email: this.email,
      phone: this.phone,
      poste: this.poste,
      matiere: this.matiere

    };
    console.log(newteacher);
    this.service.addTeacher(newteacher).subscribe(

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });

  }
}
