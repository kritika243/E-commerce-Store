import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const setupCompanies = (store) => {
  // set is a data structure which gives unique values (in an object), to convert back to array we use spread operator ...
  let companies = ['all', ...new Set(store.map((product) => product.company))]
  const companiesDOM = getElement('.companies')
  companiesDOM.innerHTML = companies
    .map((company) => {
      return ` <button class="company-btn">${company}</button>`
    })
    .join('')
}

export default setupCompanies
