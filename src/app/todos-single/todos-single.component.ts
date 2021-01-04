import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Todo } from '../post.model';

@Component({
  selector: 'app-todos-single',
  templateUrl: './todos-single.component.html',
  styleUrls: ['./todos-single.component.scss']
})
export class TodosSingleComponent implements OnInit {

  todo: Todo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.dataService.getTodoById(id).subscribe((res) => {
      this.todo = res;
    });
  }

  backTo() {
    this.router.navigate(['todos']);
  }
}
