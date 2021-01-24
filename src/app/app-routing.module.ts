import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTicketsComponent} from './components/list-tickets/list-tickets.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'ticket/:numero', component: TicketComponent},
  { path: 'listTickets', component: ListTicketsComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
