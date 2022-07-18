import async from 'async';
import Product from '../models/product.js';

const getProducts = async (req, res) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(204).json({ error: 'No content' });
  } else {
    return res.status(200).json({ products })
  }
};

const getTop3Products = async (req, res) => {
  const products = await Product.find({}).sort({ numReviews: -1 }).limit(3)
  if (products) {
    res.json(products);
  } else {
    res.status(400).json({ error: 'getTop3products error' });
  }
}

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
};

const createProduct = async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: 'default product name',
    desc: 'Default product description',
    img: '/images/default.png',
    price: 0,
    quantity: 0,
    rating: 0,
    numReviews: 0,
    category: 'default category',
  })

  const newProduct = await product.save();
};

const updateProduct = async (req, res) => {
  const {
    name,
    desc,
    img,
    price,
    quantity,
    category,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.desc = desc;
    product.img = img;
    product.price = price;
    product.quantity = quantity;
    product.category = category;

    const updateProduct = await product.save()
    res.json(updateProduct)
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.status(200).json({ message: 'Product removed' })
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
};

const getCategories = async (req, res) => {
  console.log('getCategories')
  Product.aggregate()
    .group({
      "_id": "$category",
      "Categories": { "$addToSet": "$image" }
    })
    .exec(function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).json({ "error": err })
      }
      res.json(result)
    });
}

export {
  getProducts,
  getTop3Products,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
}