export class Ticket {
  constructor(
    public numero: string,
    public titre: string,
    public description: string,
    public imagePath?: string
  ) {
  }
}

export const tickets: Ticket[] = [
  {'numero': 'TKT01', 'titre': 'Ticket 01', 'description': 'Description ticket 01', 'imagePath': 'imagePath01'},
  {'numero': 'TKT02', 'titre': 'Ticket 02', 'description': 'Description ticket 01', 'imagePath': 'imagePath02'},
  {'numero': 'TKT03', 'titre': 'Ticket 03', 'description': 'Description ticket 01', 'imagePath': 'imagePath03'},
  {'numero': 'TKT04', 'titre': 'Ticket 04', 'description': 'Description ticket 01', 'imagePath': 'imagePath04'},
  {'numero': 'TKT05', 'titre': 'Ticket 05', 'description': 'Description ticket 01', 'imagePath': 'imagePath05'},
  {'numero': 'TKT06', 'titre': 'Ticket 06', 'description': 'Description ticket 06', 'imagePath': 'imagePath06'},
  {'numero': 'TKT07', 'titre': 'Ticket 07', 'description': 'Description ticket 07', 'imagePath': 'imagePath07'}

]

