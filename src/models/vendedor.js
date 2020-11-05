const { model, Schema } = require('mongoose');

const SchemaVendedor = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    age: String,
    email: String
}, {
    timestamps: true,
})

module.exports = model('Vendedores', SchemaVendedor);