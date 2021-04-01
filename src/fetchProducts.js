import { allProductsUrl } from './utils.js'

// fetching products from the api in the form of array- response
const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err))
  if (response) {
    return response.json()
  }
  return response
}

export default fetchProducts
