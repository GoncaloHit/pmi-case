import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiOkResponse, ApiBody, } from "@nestjs/swagger";
import { CreateProductDTO } from "../dto";
import { Product } from "../entities/product.entity";

export function DocsCreateProduct() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a Product' }),
    ApiBody({
      description: 'Create product payload',
      type: CreateProductDTO,
    }),
    ApiOkResponse({ description: 'Product created successfully' }),
  );
}

export function DocsGetProducts() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all Products' }),
    ApiOkResponse({ description: 'Products retrieved successfully', type: Product }),
  );
}