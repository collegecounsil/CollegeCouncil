import { Injectable } from '@angular/core';
@Injectable()
export class ConfigurationService {
    constructor() {}

    init(): Promise<any> | boolean {
        console.log('configuration');
       return true;
    }
}
