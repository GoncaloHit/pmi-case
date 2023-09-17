import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { CreateProductDTO } from "./dto";

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) { }

  create(payload: CreateProductDTO) {
    return this.productsRepository.create(payload);
  }

  findAll() {
    return this.productsRepository.findAll();
  }

  findOne(id: string) {
    return this.productsRepository.findOne(id);
  }
}
