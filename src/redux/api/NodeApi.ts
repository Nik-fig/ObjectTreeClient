import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {Node} from '../../models/Node';

export const nodeApiSlice = createApi({
    reducerPath: 'nodeApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5158/api"}),
    endpoints: builder => ({
        getNode: builder.query<Node, number>({
            query: id => ({
                url: `/Node/${id}`
            }),
        })
    })
})

