import {page} from '../interfaces/page.interface';

export const pages: page[] = [
  {
    title: 'Bienvenida',
    route: 'index',
    description: '',
    components: [
      {
        kind: 'landing',
        title: 'Buenos días',
        subtitle: 'Español'
      },
    ]
  },
];
