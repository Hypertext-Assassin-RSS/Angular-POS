import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userId :string = ''
  userName:string = ''
  userAddress:string = ''
  userSalary:string = ''

  submit(userId:string , userName:string , userAddress:string ,userSalary:string) {
    let customerObject = {
      id:userId,
      name:userName,
      address:userAddress,
      salary:userSalary
    }

    console.log(customerObject)
  }
}
