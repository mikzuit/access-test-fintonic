/**
 * @file product model testing
 */

// TODO : upgrade testing with token authentication
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Product = require("../app/models/products.model.js");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../server.js");

chai.use(chaiHttp);


describe("Products", () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        })
    })

    describe("/GET Products", () => {
        it('it should GET all products', (done) => {
            chai.request(app)
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe("/POST Product", () => {
        it("it should post a product", (done) => {
            let product = {
                name: "Best Product eve",
                decription: "best product ever description"
            }
        chai.request(app)
            .post('/products')
            .send(product)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Product successfully added!');
                res.body.product.should.have.property('name');
                res.body.product.should.have.property('description');
                done();
            });
        });
    });
    
    describe("/DELETE Product", () => {
        it('it should DELETE a book given the id', (done) => {
            let product = new Product({name: "product name", description: "product description"});
            product.save((err, prod) => {
                chai.request(app)
                    .delete('/product/' + prod.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Product successfully deleted!');
                        res.body.result.should.have.property('ok').eql(1);
                        res.body.result.should.have.property('n').eql(1);
                    done();
                });
            });
        });
    });
});