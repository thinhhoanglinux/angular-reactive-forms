import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { IDropdownSettings } from '../ng-multiselect-dropdown/src';
import { DropDownItems } from '../models/drop-down-items.model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  @Output('submit') submit = new EventEmitter<any>();
  timezone = '';
  cities: DropDownItems[] = [];
  selectedItems: DropDownItems[] = [];
  dropdownSettings: IDropdownSettings = {};
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
    ]),
    multiCity: [this.selectedItems, Validators.required],
    multiTimezone: ['', Validators.required]
  });

  object = {
    firstName: '',
    lastName: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    aliases: []
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.object.aliases.forEach(_ => this.addAliases());
    this.profileForm.patchValue(this.object);
    this.cities = [
      { id: 1, text: 'New Delhi' },
      { id: 2, text: 'Mumbai' },
      { id: 3, text: 'Bangalore' },
      { id: 4, text: 'Pune' },
      { id: 5, text: 'Chennai' },
      { id: 6, text: 'Navsari' }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      selectAll: 'Select All',
      unselectAll: 'UnSelect All',
      allowSearchFilter: true
    };
    this.profileForm.get('multiCity').patchValue(this.selectedItems);
  }

  initAliases() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['']
    });
  }

  onSubmit() {
    console.log('profile-editor component', this.profileForm.value);
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

  changeTimezone(event: string) {
    this.timezone = event;
  }

}
