import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular], // Add Angular Data Grid Component
  styleUrl: './app.component.css',
  template: `
    <!-- The AG Grid component -->
    <ag-grid-angular
      class="ag-theme-material-dark"
      style="height: 100%;"
      [rowData]="rowData"
      [columnDefs]="colDefs"
    />
  `,
})
export class AppComponent {
  // Row Data: The data to be displayed.
  rowData = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop for gaming.',
      price: 999.99,
      stock: 25,
      category: 'electronics',
      date: '2024-01-15',
      status: 'available',
      image: 'https://example.com/images/laptop.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with grinder.',
      price: 79.99,
      stock: 50,
      category: 'home_appliances',
      date: '2024-02-10',
      status: 'available',
      image: 'https://example.com/images/coffeemaker.jpg',
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Running Shoes',
      description: 'Lightweight running shoes for all terrains.',
      price: 59.99,
      stock: 100,
      category: 'footwear',
      date: '2024-03-05',
      status: 'available',
      image: 'https://example.com/images/runningshoes.jpg',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Smartphone',
      description: 'Latest model smartphone with advanced features.',
      price: 799.99,
      stock: 10,
      category: 'electronics',
      date: '2024-04-12',
      status: 'available',
      image: 'https://example.com/images/smartphone.jpg',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Desk Chair',
      description: 'Ergonomic office chair for comfort.',
      price: 149.99,
      stock: 20,
      category: 'furniture',
      date: '2024-05-01',
      status: 'available',
      image: 'https://example.com/images/deskchair.jpg',
      rating: 4.2,
    },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'description' },
    { field: 'price' },
    { field: 'stock' },
    { field: 'category' },
    { field: 'date' },
    { field: 'status' },
    { field: 'image' },
    { field: 'rating' },
  ];
}
