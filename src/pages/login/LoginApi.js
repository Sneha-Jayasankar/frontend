import { employeeApi } from "../../services/api"


const loginApi = employeeApi.injectEndpoints({
  endpoints: (builder) => ({
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
  overrideExisting: false,
})

export const { useLoginMutation } = loginApi