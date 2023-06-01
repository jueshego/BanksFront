import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatInputModule } from "@angular/material/input"
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
 exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule
    ]
})

export class MaterialModule {}