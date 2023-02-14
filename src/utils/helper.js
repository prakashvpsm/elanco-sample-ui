import { BLUR_DIVIDING_VALUE } from "../config";

export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // const decryptedData = decryptData(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
};


export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


export function getProductsIds(products) {
  var getProductsArr = []

  Object.keys(products).forEach(key => {
    if (products[key]) {
      getProductsArr.push(products[key]);
    }
  })

  getProductsArr = getProductsArr.map(d => {
    return d._id
  })

  return getProductsArr
}


export function getProducts(products) {
  var getProductsArr = []

  Object.keys(products).forEach(key => {
    if (products[key]) {
      getProductsArr.push(products[key]);
    }
  })

  getProductsArr = getProductsArr.map(d => {
    return d
  })

  return getProductsArr
}



export function getMakeupTypes(products) {

  if (products && products['items']) {
    const items = products['items'];
    if (items && items.length > 0) {
      var makeupTypes = [];

      makeupTypes = items.map(d => {
        return d.makeup_type
      })
      if (makeupTypes && makeupTypes.length > 0) {
        makeupTypes = makeupTypes.filter(function (value, index, array) {
          return array.indexOf(value) === index;
        });
      }
      return makeupTypes
    } else {
      return []
    }
  } else {
    return []
  }
}



export function getSelectedMakeupTypes(products) {
  var getProductsArr = []

  Object.keys(products).forEach(key => {
    if (products[key]) {
      getProductsArr.push(products[key]);
    }
  })

  getProductsArr = getProductsArr.map(d => {
    return d.makeup_type
  })
  return getProductsArr
}


export function getSelectedItemSliderValue(selectedItem, products) {

  const modifiedItems = getProducts(products);

  console.log(modifiedItems, selectedItem, 'modiififiif', products)


  if(selectedItem && selectedItem.product && modifiedItems && modifiedItems.length > 0){
    console.log(selectedItem, products, 'selectedItem, products')
    const filterCurrentProduct = modifiedItems.filter(d =>  d._id === selectedItem.product);

    if(filterCurrentProduct.length > 0){

      const selectedIndex = filterCurrentProduct[0].selected_profile_idx

      var value = filterCurrentProduct[0].profiles[selectedIndex].blur;

      if(value){
        value = value * BLUR_DIVIDING_VALUE
      }
      return value

    }else{
      return null
    }
  }else{
    return null

  }
  
}



