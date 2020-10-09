const { hotdogs: ProductModel } = require('../../models');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.findAll();

    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

exports.findProductByName = async (req, res, next) => {
  try {
    const { name: productName } = req.params;

    const queryProduct = await ProductModel.findOne({
      where: { name: productName },
    });

    if (queryProduct) {
      return res.status(409).send('Product already exists');
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await ProductModel.create({
      ...req.body,
      createdAt: Date.now(),
    });

    res.status(201).send(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productToUpdate = await ProductModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: { hid: id },
      },
    );

    if (!productToUpdate) return res.status(404).send('Product not found');

    if (productToUpdate) {
      const updatedProduct = await ProductModel.findOne({
        where: { hid: id },
      });

      res.status(200).send(updatedProduct);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductModel.destroy({
      where: { hid: id },
    });

    if (!deletedProduct) {
      return res.status(404).send('Product not found');
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
