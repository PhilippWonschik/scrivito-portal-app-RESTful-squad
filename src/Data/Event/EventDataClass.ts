import { unstable_JrRestApi, provideDataClass } from 'scrivito'

// 2825F03276A646F39EAE8B5DCB4968AC

provideDataClass('Event', {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/marketing/events/${id}`)
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index: async (params) => {
      const query = {
        query: { OPR_IDN: 'PSA_PRO_EVT_PRE' },
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const eventsList: any = await unstable_JrRestApi.post(
        `../pisa-api/marketing/events`,
        { data: query },
      )

      console.log(eventsList, 'events')

      return { results: eventsList?.results }
    },
  },
})
