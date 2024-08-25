import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  
  @Output() messageEvent  = new EventEmitter<string>();

  constructor() {}
  
  
  
}
