import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearshPipe } from './searsh.pipe';



@NgModule({
  declarations: [SearshPipe],
  exports:[SearshPipe],
  imports: [

  ]
})
export class PipeModule { }
