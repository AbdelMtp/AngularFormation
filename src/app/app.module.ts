import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketNamePipe } from './pipes/ticket-name.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {TicketService} from './services/ticket/ticket.service';
@NgModule({
  declarations: [
    AppComponent,
    ListTicketsComponent,
    TicketComponent,
    TicketNamePipe,
    LoginComponent,
    HomeComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
