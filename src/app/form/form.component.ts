import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
      radio: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line: typedef
  searchByKeyword() {
    console.log(this.searchForm.value);
  }

}
