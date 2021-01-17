import { TicketNamePipe } from './ticket-name.pipe';

describe('TicketNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TicketNamePipe();
    expect(pipe).toBeTruthy();
  });
});
