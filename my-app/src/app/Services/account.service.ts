import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  username: string = null;
  
  constructor() 
  { 
    
  }




   login(attempt: string)
   {
     if(attempt == "bob")
     {
       this.username = "bob"
     }
     else
     {
       alert("yo, somthing wrong with your username brah!")
     }
   }   

  


}
