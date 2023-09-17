import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { CreateProductDTO } from "./dto";

@Injectable()
export class ProductsRepository {
  products: Product[]

  constructor() {
    this.products = []
  }

  findOne(id: Product['id']) {
    return this.products.find((product) => product.id === id)
  }

  findAll() {
    return this.products
  }

  create(payload: CreateProductDTO) {
    return this.products.push({
      id: String(this.products.length + 1),
      createdAt: String(Date.now()),
      ...payload
    })
  }
}
