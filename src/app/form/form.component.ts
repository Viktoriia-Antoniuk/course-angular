import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formReg: FormGroup;
  
  get form() {
    return this.formReg.controls;
  }

  @Input() formType: string = 'registration';
  
  login = {
    email: '',
    password: '',
  };


  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formReg = this.fb.group({
      name: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // tslint:disable-next-line: max-line-length
      password: ['', [Validators.required, Validators.pattern('^(?=.s*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      confirm: ['', [Validators.required]]
    }, {validator: this.pwdMatchValidator});
  }
  pwdMatchValidator(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirm'].value;

    return pass === confirmPass ? null : { notSame: true };
 }

  onReg() {
    console.log(this.formReg.value);
  }

  onLog() {
    console.log(this.login);
  }
}
