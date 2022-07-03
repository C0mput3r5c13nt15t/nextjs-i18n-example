import {page} from '../interfaces/page.interface';

export const pages: page[] = [
  {
    title: 'Greeting',
    route: 'index',
    description: '',
    components: [
      {
        kind: 'landing',
        title: 'Good morning',
        subtitle: 'English'
      }
    ]
  },
];
