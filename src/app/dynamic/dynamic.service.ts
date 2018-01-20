import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DynamicService {
    dynamicSubject = new Subject<any>();
    public DynamicState = this.dynamicSubject.asObservable();
    show(data: any) {
        this.dynamicSubject.next({action: 'create', value: data});
    }
    destroy() {
         this.dynamicSubject.next({action: 'destroy'});
    }
}
