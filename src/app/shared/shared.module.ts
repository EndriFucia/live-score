import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
    declarations: [NavComponent, SpinnerComponent],
    exports: [NavComponent, SpinnerComponent],
    imports: [CommonModule],
})
export class SharedModule {}
