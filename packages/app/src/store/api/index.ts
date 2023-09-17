import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'constant/env'

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    ping: build.mutation<void, void>({
      query: () => ({
        url: '/ping',
        method: 'GET'
      })
    })
  })
})

export const {
  usePingMutation
} = API