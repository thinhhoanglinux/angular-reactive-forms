import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(object) {
    console.warn(object);
  }

  onSubmit2(object) {
    console.warn(object);
  }

}
