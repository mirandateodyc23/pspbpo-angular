import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceValue',
  standalone: true
})
export class ReplaceValuePipe implements PipeTransform {

  transform(value: string, searchValue: string, replaceValue: string): string {
        if (!value || !searchValue) {
      return value;
    }
    return value.replace(searchValue, replaceValue);
  }

}
