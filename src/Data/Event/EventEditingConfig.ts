import { provideEditingConfig } from 'scrivito'

provideEditingConfig('Event', {
  title: 'Event',
  attributes: {
    name: {
      title: 'Name',
      description: 'Name',
    },
    description: {
      title: 'Description',
      description: 'Description',
    },
    location: {
      title: 'Location',
    },
    begin: { title: 'Begin' },
    end: { title: 'End' },
    freeseats: { title: 'Sits' },
  },
})
