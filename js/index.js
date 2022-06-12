// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //   const price = product.querySelector('.price span');
  // //... your code goes here
  //   const qtt = product.querySelector('.quantity input')
  //   const subtotal =price.innerText *qtt.innerText;
  // return product.querySelector('.subtotal span') = subtotal

  //   minha tentativa

  // const price = document.getElementsByClassName('price span')
  // const qtt = document.getElementsByClassName('quantity').value

  const priceQuery = product.querySelector('.price span').innerHTML
  const qttQuery = product.querySelector('.quantity input').value
  const total = priceQuery*qttQuery
  const subtt = product.querySelector('.subtotal span').innerHTML = total
  return subtt;
}

// const price = document.getElementsByClassName('price')
// const qtt = document.getElementsByClassName('quantity')
// console.log(Number(price[0].getAttribute("span")[0])) //esse acho que funfou 
// console.log(qtt)


// const priceQuery = document.querySelector('.price span').innerHTML
// const qttQuery = document.querySelector('.quantity input').value
// const total = priceQuery*qttQuery
// console.log(total)

// console.log(priceQuery)
// console.log(qttQuery)




// const price = (document.querySelector('.price span'));
// const qtt = (document.querySelector('.quantity input'));

// // console.log(price.textContent)
// console.log(price.textContent)
// console.log(price.innerHTML)
// console.log(price.innerText)
// console.log(price.classList.value)

// const qtt2 = document.getElementsByClassName("quantity")
// console.log(qtt2)






//   //... your code goes here
//     const numPrice = price  
//     // console.log(numPrice.textContent)







//     const subtotal = price.textContent * qtt.textContent;

// console.log(typeof price)
// console.log(typeof qtt)
//     // console.log(price)
//     // console.log(qtt)
//     console.log(subtotal)
//     console.log(typeof subtotal)


// const productArr = document.getElementsByClassName("product")
// console.log(productArr)
// // const singleProduct = document.querySelector('.product')
// console.log(singleProduct)

// const prodArr = document.getElementsByClassName("product")
// console.log(prodArr)

// const normalProdArr = [...prodArr]
// console.log(normalProdArr)

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const prodArr = document.getElementsByClassName("product");
    for (i=0 ; i<=prodArr.length ; i++) {      
      updateSubtotal(prodArr[i])
      
    }


  // ITERATION 3
  //... your code goes here

    const totalDisplay = document.querySelector('#total-value span')
    const normalProdArr = [...prodArr];
    normalProdArr.reduce((a,b) => {
      a+b;
    })
    totalDisplay =normalProdArr;
}






// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
