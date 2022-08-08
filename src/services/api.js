import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['employee'],
  endpoints: (builder) => ({
    //getallemployees
    getAllEmployees: builder.query({
      query: () => `employee/`,
      providesTags: ['employee'],
    }),
    //deleteemployee
    deleteEmployee: builder.mutation({
      query: id =>  ({
        url: `employee/${id}`,
        method: 'DELETE'
      }),
    }),
    //getemployeebyid
    getEmployee: builder.query({
      query: id => `employee/${id}`,
    }),

    createEmployee: builder.mutation({
      query: state =>  ({
        url: `employee/`,
        method: 'POST',
        body: state
      }),
      invalidatesTags: ['employee'],
    }),
  }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useGetEmployeeQuery, useDeleteEmployeeMutation, useCreateEmployeeMutation} = employeeApi

