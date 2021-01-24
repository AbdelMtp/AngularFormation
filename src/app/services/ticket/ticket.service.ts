import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket, tickets} from '../../modeles/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {
  }

  getAllTickets(): Observable<Ticket[]> {
    return of(tickets).pipe();
  }

  addTicket(ticket: Ticket) {
    const newTicket = tickets.unshift(ticket);
    return of(newTicket).pipe();
  }

  getTicket(numero) {
    let listTickets: Ticket[];
    this.getAllTickets().subscribe(
      data => {
        listTickets = data;
      },
      error => {
        console.log('Error : ' + error);
      }
    );
    return listTickets.find(t => t.numero === numero);
  }

  updateTicket(ticket: Ticket) {
    let ticketToUpdate = this.getTicket(ticket.numero);
    ticketToUpdate.dateCreation = ticket.dateCreation;
    ticketToUpdate.titre = ticket.titre;
    ticketToUpdate.description = ticket.description;
    return of(ticketToUpdate).pipe();
  }
  deleteTiket(ticket: Ticket) {
    tickets.forEach( (item, index) => {
      if(item === ticket) tickets.splice(index,1);
    });
  }
}
