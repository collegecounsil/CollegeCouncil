import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { DynamicService } from './dynamic.service';
@NgModule({
    imports: [
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
