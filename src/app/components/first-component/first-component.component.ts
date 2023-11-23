import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Matheus';
  age = 30;
  job = 'Programmer';
  hobbies = ['desenhar', 'escrever', 'Escrever'];
  car = {
    name: 'Ferrari 458',
    year: '2011',
  };

  constructor() {}

  ngOnInit(): void {}
}
