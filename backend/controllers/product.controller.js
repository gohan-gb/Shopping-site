const ProductModel = require("../model/product.model")

exports.createProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl } = req.body;

    let newProduct = new ProductModel({
        title,
        description,
        price,
        imgUrl
    })
    newProduct = await newProduct.save();

    res.status(201).json(newProduct);
    } catch (err) {
        console.log(err)
    }

};

exports.allProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});

        res.status(200).json(products);
    } catch(err){
        console.log(err);
    }
};

exports.updateProduct = async (req, res) => {
    try{
        const {title, description, price, imgUrl} = req.body

    let updatedProduct = new ProductModel({
        title,
        description,
        price,
        imgUrl,
        _id:req.params.id
    });

    updatedProduct = await updatedProduct.findByIdAndUpdate(req.params.id, updatedProduct)

    res.status(200).json(updatedProduct);
    } catch(err){
        console.log(err)
    }
};

exports.deleteProduct = async (req, res) => {
    try{
        await ProductModel.findByIdAndDelete(req.params.id);

    res.status(500).json({
        message:"product deleted successfully"
    })
    } catch(err){
        console.log(err)

        res.status(500).json({message:err.message})
    }
};

exports.singleProduct = async (req, res) => {
    try{
        const product = await ProductModel.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({message: err.message})
    }
};
