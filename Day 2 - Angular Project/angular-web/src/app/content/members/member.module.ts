
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MembersComponent} from './members.component';
import {MemberRoutingModule} from './member-routing.module';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
