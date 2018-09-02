import { Address } from "./address";
import { College } from "./college";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    userKey: string,
    profileUrl: string,
    role: string,
    address: Address,
    college: College
}

export class User {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    userKey: string;
    profileUrl: string;
    role: string;
    address: Address;
    college: College;
    constructor(obj?: any) {
        this.firstName = obj && obj.firstName ? obj.firstName : '';
        this.lastName = obj && obj.lastName ? obj.lastName : '';
        this.email = obj && obj.email ? obj.email : '';
        this.phone = obj && obj.phone ? obj.phone : 0;
        this.userKey = obj && obj.userKey ? obj.userKey : '';
        this.profileUrl = obj && obj.profileUrl ? obj.profileUrl : '';
        this.role = obj && obj.role ? obj.role : '';
        this.address = obj && obj.address ? obj.address : new Address();
        this.college = obj && obj.college ? obj.college : new College();
    }
}