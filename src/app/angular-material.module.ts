import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

// A separate module for Angular Material Components used in the Application

@NgModule({
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AngularMaterialModule {
}
