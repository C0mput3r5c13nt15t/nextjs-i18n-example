import {page} from '../interfaces/page.interface';

export const pages: page[] = [
  {
    title: 'Begrüßung',
    route: 'index',
    description: '',
    components: [
      {
        kind: 'landing',
        title: 'Guten Tag',
        subtitle: 'Deutsch'
      },
    ]
  },
];
