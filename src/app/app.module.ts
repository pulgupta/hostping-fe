import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HostpingComponent } from './component/hostping/hostping.component';
import { HostpingService } from './service/hostping.service';

@NgModule({
  declarations: [
    AppComponent,
    HostpingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HostpingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
