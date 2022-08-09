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
    //create Employee
    createEmployee: builder.mutation({
      query: newEmp =>  ({
        url: `employee/`,
        method: 'POST',
        body: newEmp
      }),
      invalidatesTags: ['employee'],
    }),

    //update employee
    updateEmployee: builder.mutation({
      query: ({id,state}) =>  ({
        url: `employee/${id}`,
        method: 'PUT',
        body: state
      }),
      invalidatesTags: ['employee'],
    }),

    //login
    login: builder.mutation({
      query:loginvariable=>{
        console.log(loginvariable)
        return({
          url: `employee/login`,
          method: 'POST',
          body:loginvariable,
          })
      },
    })
  }),
})

export const { useGetAllEmployeesQuery, useGetEmployeeQuery, useDeleteEmployeeMutation, useCreateEmployeeMutation, useUpdateEmployeeMutation,useLoginMutation} = employeeApi

