import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any="";

  constructor() { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>this.products=json)
  .then(json=>console.log(json));
  }

}
