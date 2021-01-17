import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ticketName'
})
export class TicketNamePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      let chars = value.toLowerCase().split('');
      for (let i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
      }
      return  chars.join('');
    }
  }

}
