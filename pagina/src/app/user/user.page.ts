import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Servicios/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private apis:ApiService) { }

  ngOnInit() {
  }

  createUser(email:any, password:any){
    this.apis.saveUser(email.value, password.value).subscribe()
  }

  

}
