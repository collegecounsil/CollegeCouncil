import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
    moduleId: module.id,
    selector: 'angular-loader',
    template: `<div *ngIf="show" class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.transition]="none"></div>
</div>`,
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
    isLoading: Observable<boolean>;
    counter: number;
    subscription: Subscription;
    show: boolean;
    progress: number;
    total: number;

    constructor(public loaderService: LoaderService) {
        this.isLoading = loaderService.isLoading();
        this.counter = 0;
        this.show = false;
        this.total = 0;
        this.progress = 0;
    }

    ngOnInit() {
        this.subscription = this.isLoading.subscribe((state: boolean) => {
            state === true ? this.newRequest() : this.newResponse();
            if (this.counter < 0) {
                this.counter = 0;
            }
            if (this.counter === 0) {
                this.total = 0;
                setTimeout(() => {
                    this.show = false;
                }, 300);
            } else {
                this.show = true;
                this.calcProgress();
            }
        });
    }

    newResponse() {
        this.counter--;
        this.calcProgress();
    }

    newRequest() {
        this.counter++;
        this.total++;
    }

    calcProgress() {
        this.progress = 100 - ((this.counter * 100) / this.total);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
