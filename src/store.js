import { getStorageItem, setStorageItem } from './utils.js'
let store = getStorageItem('store')
const setupStore = (products) => {
  store = products.map((product) => {
    // destructuring the product -:
    const {
      id,
      fields: { featured, price, name, company, colors, image: img },
    } = product
    const image = img[0].thumbnails.large.url
    return { id, featured, price, name, company, colors, image }
  })
  setStorageItem('store', store)
}
const findProduct = () => {}
export { store, setupStore, findProduct }
