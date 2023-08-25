import { Pipe, PipeTransform } from "@angular/core";

interface AddressLine {
    country: string;
    province: string;
    city: string;
    village: string;
}

@Pipe({
    name: 'formatAddress'
})

export class PipeFormatAddress implements PipeTransform {
    // từ tham số thứ 2 trở đi sẽ là custom
    transform(address: AddressLine, param1: string) {
        console.log("Pipe format", address, param1);
        return (
            address.country + ", " + address.province + ", " + address.city + ", " + address.village
        );
    }
}