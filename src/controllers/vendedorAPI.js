const vendedorService = require("../services/vendedorService");
const kafkaService = require("../services/kafkaService");
const util = require("../services/util");

exports.create = function(req, res) {
    const params = req.body;
    try {
        const vendedor = vendedorService.create(params);
        res.json(vendedor);
    } catch (error) {
        res.send(error);
    }
}

exports.list = function(req, res) {
    const params = req.body;
    try {
        const vendedor = vendedorService.list(params);
        res.json(vendedor);
    } catch (error) {
        res.send(error);
    }
}

exports.listAll = function(req, res) {
    try {
        const vendedores = vendedorService.listAll();
        res.json(vendedores);
    } catch (error) {
        res.send(error);
    }
}

exports.comision = function(req, res) {
    const params = req.body;
    try {
        const vendedor = vendedorService.comision(params);
        res.json(vendedor);
    } catch (error) {
        res.send(error);
    }
}