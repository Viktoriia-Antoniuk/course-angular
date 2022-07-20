import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List } from '../list.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: List[];

  listForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.listForm = this.fb.group({
      name: ''
    });
    this.list = this.dataService.getList();
    console.log(this.dataService.getList());
  }

  calcList() {
    //this.list = this.dataService.calcList();
    console.log(this.dataService.calcList());
  }
}
