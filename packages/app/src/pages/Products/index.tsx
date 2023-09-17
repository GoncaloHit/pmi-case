import { Button } from 'ui'
import { $Card, $Product, $Products, $Row, $Title } from './styles'
import { useCreateProductMutation, useFindAllProductsQuery } from 'store/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { Inputfield } from 'components/Inputfield'

export const Products = () => {
  const { data: products, refetch } = useFindAllProductsQuery()
  const [createProduct, { isSuccess }] = useCreateProductMutation()
  const [state, setState] = useState({
    name: '',
    description: '',
    price: 0,
  })

  /** 
   * NOTE: simple refresh after creation
   * ideally would update local state with just the added product
   * if the response was 200
   * just for demo purposes 
  */
  useEffect(() => {
    if (isSuccess) refetch()
  }, [isSuccess, refetch])

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: name === 'price' ? Number(value) : value })
  }

  const handleCreate = async () => createProduct(state)

  return (
    <>
      <$Title>Products</$Title>
      <$Row>
        <$Card>
          <$Products>
            {products?.map((product) => (
              <$Product key={`product-${product.id}`}>
                {`${product.id} | ${product.name} | ${product.price}$`}
              </$Product>
            ))}
          </$Products>
        </$Card>

        <$Card>
          <Inputfield placeholder='Name' type='text' name='name' value={state.name} onChange={handleInputChange} />
          <Inputfield placeholder='Description' type='text' name='description' value={state.description} onChange={handleInputChange} />
          <Inputfield placeholder='Price' type='number' name='price' value={state.price} onChange={handleInputChange} />
          <Button onClick={handleCreate}>Add Product</Button>
        </$Card>

      </$Row>
    </>
  )
}
