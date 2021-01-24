import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../services/ticket/ticket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ticket} from '../../modeles/ticket';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  isModif = false;
  numCourant: string;
  ticket: Ticket;
  sub;
  ticketFormGroup;

  constructor(private ticketService: TicketService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  createFormGroup() {
    this.ticketFormGroup = new FormGroup({
      numero: new FormControl((this.ticket ? this.ticket.numero : ''), Validators.compose([Validators.required, Validators.maxLength(20)])),
      dateCreation: new FormControl((this.ticket ? (new Date(this.ticket.dateCreation.getTime() - this.ticket.dateCreation.getTimezoneOffset() * 60000)).toISOString().slice(0, -8) : ''), Validators.required),
      titre: new FormControl((this.ticket ? this.ticket.titre : ''), [Validators.required, Validators.maxLength(12)]),
      description: new FormControl((this.ticket ? this.ticket.description : ''), [Validators.required, Validators.maxLength(30)])
    });
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.numCourant = params.get('numero');
      console.log('params numero : ' + params.get('numero'));
      this.ticket = this.ticketService.getTicket(this.numCourant);
      console.log('ticket : ' + this.ticket);
      if (this.numCourant === 'ajouter') {
        this.isModif = false;
      } else {
        this.isModif = true;
      }
      this.createFormGroup();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    let ticketForm = this.ticketFormGroup.value;
    const ticket: Ticket = {
      numero: ticketForm.numero,
      dateCreation: new Date(ticketForm.dateCreation),
      titre: ticketForm.titre,
      description: ticketForm.description
    };
    if (!this.isModif) {
      this.ticketService.addTicket(ticket).subscribe(data => {
          this.router.navigate(['/listTickets']);
        },
        error => {
          console.log('Erreur ajout : ' + error);
        }
      );
    } else {
      console.log('Modif !!!!!!!!!!!!!!!');
      this.ticketService.updateTicket(ticket).subscribe(data => {
          this.router.navigate(['/listTickets']);
        },
        error => {
          console.log('Erreur modification : ' + error);
        }
      );
    }
  }

  get numero() {
    return this.ticketFormGroup.get('numero');
  }

  get titre() {
    return this.ticketFormGroup.get('titre');
  }

  get description() {
    return this.ticketFormGroup.get('description');
  }

  get dateCreation() {
    return this.ticketFormGroup.get('dateCreation');
  }
}
