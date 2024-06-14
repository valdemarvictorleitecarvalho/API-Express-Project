const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const products = {};

const saveProduct = (product) => {
    if (!product.id) {
        product.id = sequence.id;
        products[product.id] = product;
        
        return product;
    }
    return null;
}

const getProduct = (id) => {
    return products[id] || {};
}

const getProducts = () => Object.values(products);

const updateProduct = (product) => {
    const id = Number(product.id);
    
    if (products[id]) {
        product.id = id;
        products[id] = product;
        
        return product;
    }
    return null;
}

const deleteProduct = (id) => {
    const product = products[id];
    delete products[id];

    return product;
}

export default {saveProduct, getProduct, getProducts, updateProduct, deleteProduct};