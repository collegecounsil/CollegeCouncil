import { Address } from "./address";

export interface ICollege {
    collgeKey: string,
    collegeName: string,
    profileUrl: string,
    address: Address,
}

export class College {
    collgeKey: string;
    collegeName: string;
    profileUrl: string;
    address: Address;
    constructor(obj?: ICollege) {
        this.collgeKey = obj && obj.collgeKey ? obj.collgeKey : '';
        this.collegeName = obj && obj.collegeName ? obj.collegeName : '';
        this.profileUrl = obj && obj.profileUrl ? obj.profileUrl : '';
        this.address = obj && obj.address ? obj.address : new Address();
    }
}