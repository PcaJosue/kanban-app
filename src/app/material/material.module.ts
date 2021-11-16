import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    exports: [
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatSelectModule,
        DragDropModule,
        MatDialogModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatSnackBarModule
    ],
    providers: [],
})
export class MaterialModule { }