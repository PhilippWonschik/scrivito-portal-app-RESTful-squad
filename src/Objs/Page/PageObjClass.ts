import * as Scrivito from 'scrivito'

export const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    body: 'widgetlist',
    childOrder: 'referencelist',
    hideInNavigation: 'boolean',
    linkIcon: 'string',
    showTopContentSection: 'boolean',
    title: 'string',
    topContentSection: 'widgetlist',
  },
  extractTextAttributes: ['body'],
})
