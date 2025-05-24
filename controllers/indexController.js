'use strict';

const controller = {};
const models = require('../models');

controller.showHomepage = async (req, res) => {
    const Brand = models.Brand;
    const brands = await Brand.findAll();
    res.render('index', {brands});
}

controller.showPage = (req, res) => {
    const pages = ['cart', 'checkout', 'contact', 'login', 'my-account', 'product-detail', 'product-list', 'wishlist'];
    if(pages.includes(req.params.page)){
        res.render(req.params.page);
    }
    next();
}

module.exports = controller;