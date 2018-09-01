import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
    ])
  });

  object = {
    firstName: 'A',
    lastName: 'Nguyen',
    address: {
      street: 'Nguyen Van B',
      city: 'Ho Chi Minh',
      state: 'Ho Chi Minh',
      zip: '70000'
    },
    aliases: [{
      name: 'A',
      age: '19',
      gender: 'Male'
    }, {
      name: 'B',
      age: '20',
      gender: 'Female'
    }]
  };

  @Output('submit') submit = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.object.aliases.forEach(_ => this.addAliases());
    this.profileForm.patchValue(this.object);
  }

  initAliases() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['']
    });
  }

  onSubmit() {
    console.error(`profile-editor component: ${this.profileForm.value}`);
    this.submit.emit(this.profileForm);
  }

  updateProfile() {
    this.object.aliases.forEach(_ => this.addAliases());
    this.profileForm.patchValue(this.object);
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.initAliases());
  }

  removeAliases(i: number) {
    console.error(this.aliases);
    this.aliases.removeAt(i);
  }

}
