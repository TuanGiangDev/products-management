module.exports.product = (req, res) => {
    res.render("client/page/products/index.pug", {
        pageTitle: "Trang danh sach san pham"
    });
}