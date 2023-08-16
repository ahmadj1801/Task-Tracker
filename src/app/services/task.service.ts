import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  }

  deleteTask(task?: Task) : Observable<Task> {
    const deleteUrl = `${this.url}/${task?.id}`;
    return this.httpClient.delete<Task>(deleteUrl);
  }

  setReminder(task: Task) : Observable<Task> {
    const updateUrl = `${this.url}/${task?.id}`;
    return this.httpClient.put<Task>(updateUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.url, task, httpOptions);
  }
}
