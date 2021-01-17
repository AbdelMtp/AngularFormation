import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket, tickets} from '../../modeles/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {}

  getAllTickets(): Observable<Ticket[]> {
    return of(tickets).pipe();
  }
}
