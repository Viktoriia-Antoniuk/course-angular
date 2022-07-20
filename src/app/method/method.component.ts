import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List } from '../list.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class MethodComponent implements OnInit {
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

  add(name, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16) {
    this.list.push({name: name, p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6, p7: p7, p8: p8, p9: p9, p10: p10, p11: p11, p12: p12, p13: p13, p14: p14, p15: p15, p16: p16});
  }


  delete(i) {
    this.list.splice(i, 1);
  }
}
