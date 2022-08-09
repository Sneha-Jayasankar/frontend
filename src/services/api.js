import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/',prepareHeaders: (headers) => {
    const token = getStorage("idToken");
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers;
  }, }),
  
  refetchOnMountOrArgChange:true,
  tagTypes: ['employee'],
  endpoints: () => ({}),
})
