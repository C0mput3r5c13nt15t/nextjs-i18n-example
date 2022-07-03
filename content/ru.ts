import {page} from '../interfaces/page.interface';

export const pages: page[] = [
  {
    title: 'Приветствие',
    route: 'index',
    description: '',
    components: [
      {
        kind: 'landing',
        title: 'Добрый день',
        subtitle: 'Русский'
      },
    ]
  },
];
