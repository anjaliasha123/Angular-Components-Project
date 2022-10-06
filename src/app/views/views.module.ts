import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StatiticsComponent } from './statitics/statitics.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ViewHomeComponent,
    StatiticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
