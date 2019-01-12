import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';


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
    MatIconModule
  ]
})
export class AngularMaterialModule {
}
