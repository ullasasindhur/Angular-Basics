import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ELementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ELementsHomeComponent, PlaceHolderComponent, TimesDirective, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
})
export class ElementsModule {}
