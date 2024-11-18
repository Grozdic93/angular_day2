import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  shoppingListItems= [
    {
      name: 'Milk',
      amount: 1,
    },
    {
      name: 'Sugar',
      amount: 2,
    },
    {
      name: 'Coffee',
      amount: 5,
    },
  ];

  taskForm = new FormGroup({
    item_name: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  amount = this.taskForm.controls.amount;
  name = this.taskForm.controls.item_name;

  onFormSubmit() {
    if (this.taskForm.valid) {
      const itemName = this.taskForm.value.item_name;
      const amount = Number(this.taskForm.value.amount);
      
      
      if(itemName && amount){
        this.shoppingListItems.push({
          name: itemName,
          amount : amount
        })
      }
      
    }
  }
}
