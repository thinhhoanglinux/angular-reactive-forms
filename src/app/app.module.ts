import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NgMultiSelectDropDownModule } from './ng-multiselect-dropdown/src';
import { TimezonePickerModule } from './ng-timezone-selector/timezone-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EmployeeComponent,
    InvoiceComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    TimezonePickerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
