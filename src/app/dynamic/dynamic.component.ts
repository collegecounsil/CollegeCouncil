import {
    Component,
    Input,
    ViewContainerRef,
    ViewChild,
    ReflectiveInjector,
    ComponentFactoryResolver,
    OnInit,
    OnDestroy
} from '@angular/core';
import { DynamicService } from './dynamic.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-dynamic-component',
    template: `
    <div #dynamicComponentContainer></div>
  `,
})
export class DynamicComponent implements OnInit, OnDestroy {
    currentComponent = null;
    subscription: Subscription;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    set componentData(data: { component: any, inputs: any }) {
        if (!data) {
            return;
        }
        const inputProviders = Object.keys(data.inputs).map((inputName) => {
            return {
                provide: inputName,
                useValue: data.inputs[inputName]
            };
        });
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        const factory = this.resolver.resolveComponentFactory(data.component);
        const component = factory.create(injector);
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    constructor(private resolver: ComponentFactoryResolver,
        private dynamicService: DynamicService) {
    }
    ngOnInit() {
        this.subscription = this.dynamicService.dynamicSubject
            .subscribe((state: any) => {
                if (state.action === 'create') {
                    const input = state.value.input || {};
                    input.destroy = () => {
                        this.currentComponent.destroy();
                    };
                    this.componentData = {
                        component: state.value.component,
                        inputs: input
                    };
                } else if (state.action === 'destroy') {
                    if (this.currentComponent) {
                        this.currentComponent.destroy();
                    }
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
