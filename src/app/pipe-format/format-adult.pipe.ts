import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'adultPipe',
    pure: false,
})

export class PipeAdult implements PipeTransform {
    transform(value: any) {
        return value.filter((o: { age: number; }) => o.age >= 18);
    }
}