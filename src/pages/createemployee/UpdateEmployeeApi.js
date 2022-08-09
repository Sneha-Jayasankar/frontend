import { employeeApi } from "../../services/api"


const updateEmployeeApi = employeeApi.injectEndpoints({
    endpoints: (builder) => ({
        updateEmployee: builder.mutation({
            query: ({id,state}) =>  ({
            url: `employee/${id}`,
            method: 'PUT',
            body: state
            }),
            invalidatesTags: ['employee'],
      }),
    }),
  overrideExisting: false,
})

export const { useUpdateEmployeeMutation } = updateEmployeeApi