const Product = require("../../models/products.model");

module.exports.product = async (req, res) => {
    const product = await Product.find({});

    product.forEach(item => {
        item.newPrice = (item.price * (100 - item.discountPercentage) / 100).toFixed(2);
    });

    res.render("client/pages/products/index.pug", {
        pageTitle: "Trang danh sach san pham",
        products: product,
    });
}