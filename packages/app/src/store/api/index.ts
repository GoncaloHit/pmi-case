import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'constant/env'
import { CreateProductDto, Product } from './types'

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    findAllProducts: build.query<Product[], void>({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    }),
    findOneProduct: build.query<Product, { id: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: 'GET'
      })
    }),
    createProduct: build.mutation<void, CreateProductDto>({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useFindAllProductsQuery,
  useLazyFindOneProductQuery,
  useCreateProductMutation
} = API