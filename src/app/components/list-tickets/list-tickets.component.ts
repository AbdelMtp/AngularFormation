import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../services/ticket/ticket.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  public tickets;

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getAllTickets().subscribe(
      data => {
        this.tickets = data;
      },
      error => {
        console.log('Error : ' + error);
      }
    );
  }
  delete(numero)
  {
    this.ticketService.deleteTiket(this.ticketService.getTicket(numero));
    //this.getTickets();
  }
}
