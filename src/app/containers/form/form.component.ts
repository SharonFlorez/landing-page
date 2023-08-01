import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public userForm: FormGroup = this._formBuilder.group({});
  public errorMessage = false;

  constructor(
    private _formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', Validators.pattern(EMAIL_REGEX)],
      company: ['', [Validators.required]],
      country: [''],
      phone: [''],
      message: ['', [Validators.required]]
    });
  }
}
