import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDelete, {
      width: '250px',
      data: {name: this.todo.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.dataService.deleteTodo(this.todo.id).subscribe((res) => {
          console.log(res);
          this.deleteTodo.emit();
        });
      }
    });
  }

}

@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.html'
})

export class DialogDelete {
  constructor(
    public dialogRef: MatDialogRef<DialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  
  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close({delete: true});
  }
}