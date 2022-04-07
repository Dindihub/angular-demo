import { Component } from '@angular/core';
import {Goal} from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  goals:Goal[]=[
    {id:1,name:'Attend morning stand-up'},
    {id:2,name:'Go through todays content'},
    {id:3,name:'Attend evening catch-up'}
  ]
}

