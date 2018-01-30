import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { DynamicService } from './dynamic.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DynamicComponent
    ],
    entryComponents: [],
    exports: [
        DynamicComponent
    ],
    providers: [
        DynamicService
    ]
})
export class DynamicModule {}
