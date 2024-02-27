import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictionaryModule } from './pictionary/pictionary.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PictionaryModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
