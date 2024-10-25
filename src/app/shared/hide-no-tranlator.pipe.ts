import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideNoTranlator',
  standalone: true
})
export class HideNoTranlatorPipe implements PipeTransform {

  transform(value: string): string {
      const characterToCheck = ['.0', '.1', '.2'];
      if (this.hasAnyCharacter(value, characterToCheck)){
        return "";
      }

    return value;
  }

  hasAnyCharacter(str: string, chars: string[]): boolean {
    return chars.some(char => str.includes(char));
  }

}
