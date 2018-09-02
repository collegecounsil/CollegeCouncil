import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable()
export class UserService {
    private _user: User;
    constructor() {
        this._user = new User();
    }
  
    public get user(): User {
        return this._user;
    }

    public set user(user: User) {
        this._user = user;
    }
}
