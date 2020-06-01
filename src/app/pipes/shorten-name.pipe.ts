import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
    transform(fullName: string): string {
        const nameParts = fullName.split(' ');

        return `${nameParts[0]} ${nameParts[1]}`;
    }
}
