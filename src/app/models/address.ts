export interface IAddress {
    street: string,
    area: string,
    city: string,
    state: string,
    country: string,
    zip: number
}

export class Address {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    zip: number;
    constructor(obj?: IAddress) {
        this.street = obj && obj.street ? obj.street : '';
        this.area = obj && obj.area ? obj.area : '';
        this.city = obj && obj.city ? obj.city : '';
        this.state = obj && obj.state ? obj.state : '';
        this.country = obj && obj.country ? obj.country : '';
        this.zip = obj && obj.zip ? obj.zip : 0;    
    }
}