export type Product = {
  id: string,
  name: string,
  description: string
  price: number,
  createdAt: string,
}

export type CreateProductDto = {
  name: string,
  description: string,
  price: number,
}