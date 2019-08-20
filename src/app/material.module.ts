import { NgModule } from '@angular/core';
import { 
	MatButtonModule, 
	MatToolbarModule, 
	MatSidenavModule, 
	MatListModule,
	MatFormFieldModule,
	MatInputModule,
	MatTableModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule
	]
})
export class MaterialModule {

}