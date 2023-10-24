import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListenRoutingModule } from './listen-routing.module';
import { ListenComponent } from './pages';
import { FormComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListenComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ListenRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule,
  ]
})
export class ListenModule { }
