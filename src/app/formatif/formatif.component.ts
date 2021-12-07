import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatif',
  templateUrl: './formatif.component.html',
  styles: ['.row {height : 450px;}', 'button {height : 75px;}']
})
export class FormatifComponent implements OnInit 
{
  sujetSelectionner !: number;

  constructor() {}
  ngOnInit(): void {}
}
