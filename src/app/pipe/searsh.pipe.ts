import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searsh'
})
export class SearshPipe implements PipeTransform {

  transform(
    arreglo: any[],
    text : string,
    column : string
    ): any []{

if (text === ''){
  return arreglo;
}
text = text.toLowerCase()
  return arreglo.filter( item =>{
  return item[column].toLowerCase().includes(text  );
})
  }

}
