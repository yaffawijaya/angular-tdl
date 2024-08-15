import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  inputTitle = '';  
  inputSummary = '';
  inputDate = '';

  // Injection from TaskService
  private tasksService = inject(TasksService);
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // console.log(this.inputTitle, this.inputSummary, this.inputDate);
    // this.cancel.emit();

    // this.add.emit({
    //   title: this.inputTitle, 
    //   summary: this.inputSummary, 
    //   date: this.inputDate
    // });

    this.tasksService.addTask(
      {
      title: this.inputTitle, 
      summary: this.inputSummary, 
      date: this.inputDate
      }, 
      this.userId
    );
    this.close.emit();
  }
}
