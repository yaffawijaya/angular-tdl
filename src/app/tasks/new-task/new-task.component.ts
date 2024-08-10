import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  inputTitle = '';  
  inputSummary = '';
  inputDate = '';
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    // console.log(this.inputTitle, this.inputSummary, this.inputDate);
    // this.cancel.emit();
    this.add.emit({
      title: this.inputTitle, 
      summary: this.inputSummary, 
      date: this.inputDate
    });
  }
}
