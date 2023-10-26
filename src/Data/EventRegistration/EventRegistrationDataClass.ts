import { provideDataClass, unstable_JrRestApi } from 'scrivito'

export const EventRegistration = provideDataClass('EventRegistration', {
  connection: {
    async get() {},
    async index() {
      // const query = {
      //   query: { PSC_GID: data },
      // }

      // // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // const eventRegistrationList: any = await unstable_JrRestApi.post(
      //   `../pisa-api/marketing/events`,
      //   { data: query },
      // )

      // console.log(eventRegistrationList, 'events')

      // return { results: eventRegistrationList?.results }
      //return { results: [{event_id: '123', _id: '23'}] }
      return { results: [] }
    },
    async create(data) {
      console.log('created', data)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const createEventRegistration: any = await unstable_JrRestApi.post(
        `../pisa-api/marketing/events/register`,
        { data },
      )
      return { _id: '123', createEventRegistration }
    },
    async delete() {},
  },
})
