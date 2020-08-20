import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  

  constructor() { 
  }

  username: string = null;

   login(attempt: string)
   {
     if(attempt == "bob")
     {
       this.username = "bob"
     }
     else{
       alert("yo, somthing wrong with your username brah!")
     }
   }   

  


}
