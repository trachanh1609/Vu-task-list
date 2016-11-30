import {Injectable} from '@angular/core'; // To make this service a dependency
import {Http, Headers} from '@angular/http'; // To utilize http request
import 'rxjs/add/operator/map';  // To use Observables

@Injectable()
export class TaskService{
  constructor(private http:Http){
    console.log('Task Service Initialized...');
  }

  getTasks(){
    return this.http.get('http://localhost:3000/api/tasks')
      .map(res => res.json());
  }

  addTask(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
        .map(res => res.json());
  }

  deleteTask(id){
      return this.http.delete('/api/task/'+id)
          .map(res => res.json());
  }

  updateStatus(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
        .map(res => res.json());
  }
}
