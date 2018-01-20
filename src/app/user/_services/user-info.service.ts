import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    private _firstName: string;
    private _lastName: string;  
    constructor() {
        this.firstname = '';
        this.lastname = '';
    }
  
    public get firstname(): string {
        return this._firstName;
    }

    public set firstname(firstname: string) {
        this._firstName = firstname;
    }

    public get lastname(): string {
        return this._lastName;
    }

    public set lastname(lastname: string) {
        this._lastName = lastname;
    }

    public get fullname(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}
