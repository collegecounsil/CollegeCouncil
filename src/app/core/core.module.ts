import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpService } from './_services/http.service';
import { NgModule, APP_INITIALIZER, ErrorHandler, ApplicationRef, ModuleWithProviders } from '@angular/core';
import { ConfigurationService } from './_services/configuration.service';
import { MyErrorHandler } from './_services/exception-handling.service';
import { LoaderService } from './_components/loader/loader.service';
import { LoaderComponent } from './_components/loader/loader.component';
export function configurationServiceFactory(configurationService: ConfigurationService): Function {
    return () => { return configurationService.init(); };
}
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        ConfigurationService,
        LoaderService,
        {
            provide: APP_INITIALIZER,
            useFactory: configurationServiceFactory,
            deps: [ConfigurationService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpService,
            multi: true
        },
        MyErrorHandler,
        { provide: ErrorHandler, useClass: MyErrorHandler }
    ],
    exports: [LoaderComponent]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
          LoaderService
      ]
    };
  }
 }
