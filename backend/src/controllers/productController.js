const Product = require('../models/Product');
const path = require('path');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    console.log('Getting all products...');
    const products = await Product.findAll();
    console.log('Products found:', products);
    res.json(products);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    console.log('Getting product with id:', req.params.id);
    const product = await Product.findByPk(req.params.id);
    console.log('Product found:', product);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ message: error.message });
  }
};

// Create product
exports.createProduct = async (req, res) => {
  try {
    console.log('Creating product with data:', req.body);
    
    // Xử lý ảnh nếu có
    let imageUrl = null;
    if (req.file) {
      // Tạo URL cho ảnh đã upload
      imageUrl = `/uploads/${req.file.filename}`;
      console.log('Image uploaded:', imageUrl);
    }
    
    // Parse sizes và colors từ string sang array
    let sizes = [];
    let colors = [];
    try {
      sizes = JSON.parse(req.body.sizes);
      colors = JSON.parse(req.body.colors);
    } catch (e) {
      console.error('Error parsing sizes or colors:', e);
      return res.status(400).json({ message: 'Invalid sizes or colors format. Must be JSON arrays.' });
    }

    // Validate price
    const price = parseFloat(req.body.price);
    if (isNaN(price)) {
      return res.status(400).json({ message: 'Invalid price format' });
    }

    // Validate stock
    const stock = parseInt(req.body.stock);
    if (isNaN(stock)) {
      return res.status(400).json({ message: 'Invalid stock format' });
    }
    
    // Tạo sản phẩm với dữ liệu đã xử lý
    const productData = {
      name: req.body.name,
      price: price,
      description: req.body.description,
      imageUrl: imageUrl,
      sizes: sizes,
      colors: colors,
      stock: stock
    };
    
    console.log('Creating product with processed data:', productData);
    const product = await Product.create(productData);
    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ message: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    console.log('Updating product with id:', req.params.id);
    const product = await Product.findByPk(req.params.id);
    
    if (product) {
      // Xử lý ảnh nếu có
      if (req.file) {
        req.body.imageUrl = `/uploads/${req.file.filename}`;
        console.log('Image updated:', req.body.imageUrl);
      }

      // Parse sizes và colors nếu có
      if (req.body.sizes) {
        try {
          req.body.sizes = JSON.parse(req.body.sizes);
        } catch (e) {
          return res.status(400).json({ message: 'Invalid sizes format' });
        }
      }

      if (req.body.colors) {
        try {
          req.body.colors = JSON.parse(req.body.colors);
        } catch (e) {
          return res.status(400).json({ message: 'Invalid colors format' });
        }
      }

      // Validate price if provided
      if (req.body.price) {
        const price = parseFloat(req.body.price);
        if (isNaN(price)) {
          return res.status(400).json({ message: 'Invalid price format' });
        }
        req.body.price = price;
      }

      // Validate stock if provided
      if (req.body.stock) {
        const stock = parseInt(req.body.stock);
        if (isNaN(stock)) {
          return res.status(400).json({ message: 'Invalid stock format' });
        }
        req.body.stock = stock;
      }
      
      await product.update(req.body);
      console.log('Product updated:', product);
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(400).json({ message: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    console.log('Deleting product with id:', req.params.id);
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      console.log('Product deleted');
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: error.message });
  }
}; 