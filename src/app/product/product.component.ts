import { FakeProducts } from './../../fakeProducts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ELEMENT_DATA: FakeProducts[] = [];
  displayedColumns: string[] = ['price'];
  dataSource = new MatTableDataSource<FakeProducts>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllProducts();
  }

  public async getAllProducts() {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => (this.dataSource.data = json as FakeProducts[]))
      .then((json) => console.log(json));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
