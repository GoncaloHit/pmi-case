import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ApiTags } from "@nestjs/swagger";
import { DocsCreateProduct, DocsGetProducts } from "./docs";
import { CreateProductDTO } from "./dto";

@ApiTags('products')
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @DocsGetProducts()
  @HttpCode(200)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @DocsGetProducts()
  @HttpCode(200)
  @Get(':id')
  findOne(@Param() id: string) {
    return this.productsService.findOne(id);
  }

  @DocsCreateProduct()
  @HttpCode(200)
  @Post()
  create(@Body() body: CreateProductDTO) {
    return this.productsService.create(body);
  }
}
