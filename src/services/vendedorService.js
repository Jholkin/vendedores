const Vendedor = require("../Models/vendedor");
const util = require("./util");
const kafkaService = require("./kafkaService");

exports.create = function(params) {
    try {
        const vendedor = new Vendedor({
            name: params.name,
            lastname: params.lastname,
            age: params.age,
            email: params.email
        })
        vendedor.save();
    } catch (error) {
        throw error;
    }
}

exports.list = function(params) {
    try {
        const vendedor = vendedorService.list(params);
        res.json(vendedor);
    } catch (error) {
        throw error;
    }
}

exports.listAll = function(params) {
    try {
        const vendedores = vendedorService.listAll();
        res.json(vendedores);
    } catch (error) {
        throw error;
    }
}

exports.comision = function(params) {
    const params = req.body;
    try {
        const vendedor = vendedorService.comision(params);
        res.json(vendedor);
    } catch (error) {
        throw error;
    }
}

exports.ventas = function() {
    try {
        const ventaRealizada = kafkaService.consumer();
        const vendedor = new Vendedor({
            name: ventaRealizada.name,
            lastname: ventaRealizada.lastname,
            age: ventaRealizada.age,
            email: ventaRealizada.email
        })
        vendedor.save();

        return vendedor;
    } catch (error) {
        throw error;
    }
}