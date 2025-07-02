import { Component, inject, OnInit, signal,} from '@angular/core';
import { Todos as todoServices} from '../services/todos';
import { catchError, single } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todoServices = inject(todoServices);
  todoItems = signal<{ id: number; title: string }[]>([]);



  ngOnInit(): void {
    this.todoServices.getTodosFromApi()
    .pipe(
      catchError((err) =>{
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos)=>{
      this.todoItems.set(todos)
    })
  }
}
