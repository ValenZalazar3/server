const { Product } = require('./../../../db');

const createAllProducts = async (arraysOfColumns) => {
  const types = arraysOfColumns[0].map((elem) => elem.trim());
  const codes = arraysOfColumns[1].map((elem) => elem.trim());
  const names = arraysOfColumns[2].map((elem) => elem.trim());
  const sizes = arraysOfColumns[3].map((elem) => elem.trim());
  const smallPacks = arraysOfColumns[4].map((elem) => elem.trim());
  const bigPacks = arraysOfColumns[5].map((elem) => elem.trim());
  const prices = arraysOfColumns[6].map((elem) => elem.trim());
  const publicIds = arraysOfColumns[8].map((elem) => elem.trim());
  const secureUrls = arraysOfColumns[9].map((elem) => elem.trim());

  const allProducts = [];

  for (let index = 0; index < arraysOfColumns[0].length; index++) {
    const parsePrice = Number(
      prices[index].replace('.', '').replace(',', '.')
    );

    let category = '';

    if (names[index].split(' ')[0] === 'Rosca') {
      category = 'Rosca con tuerca';
    } else if (names[index].split(' ')[0] === 'Val.') {
      category = 'Valvula';
    } else {
      category = names[index].split(' ')[0];
    }

    const newProduct = {
      type: types[index],
      name: names[index],
      category,
      image: {
        public_id: publicIds[index],
        secure_url: secureUrls[index]
      },
      specifications: {
        code: codes[index],
        size: sizes[index],
        smallPack: Number(smallPacks[index]),
        bigPack: Number(bigPacks[index]),
        price: parsePrice
      }
    };

    allProducts.push(newProduct);
  }

  const allProductsClean = [];

  let stack = [];

  let stackSpecifications = [];

  for (let index = 0; index < allProducts.length; index++) {
    stack.push(allProducts[index]);
    if (allProducts[index].name !== allProducts[index + 1]?.name) {
      for (
        let stackIndex = 0;
        stackIndex < stack.length;
        stackIndex++
      ) {
        const newSpecification = {
          code: stack[stackIndex].specifications.code,
          size: stack[stackIndex].specifications.size,
          smallPack: stack[stackIndex].specifications.smallPack,
          bigPack: stack[stackIndex].specifications.bigPack,
          price: stack[stackIndex].specifications.price
        };

        if (stackIndex === 0) {
          allProductsClean.push(stack[stackIndex]);
          stackSpecifications.push(newSpecification);
        } else {
          stackSpecifications.push(newSpecification);
        }
      }

      allProductsClean[allProductsClean.length - 1].specifications =
        stackSpecifications;
      stackSpecifications = [];
      stack = [];
    }
  }

  for (const product of allProductsClean) {
    await Product.create(product);
  }
};

module.exports = createAllProducts;
