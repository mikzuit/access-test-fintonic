/**
 * @file product model testing
 */

// TODO : upgrade testing with token authentication
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Product = require("../app/models/products.model.js");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);


describe("Products", () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        })
    })

    describe("/GET Products", () => {
        it('it should GET all products', (done) => {
            chai.request(server)
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
        })
        chai.request(server)
            .post('/products')
            .send(product)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Product successfully added!');
                res.body.book.should.have.property('name');
                res.body.book.should.have.property('description');
                done();
            });
    });
    
    describe("/Delect Product", () => {
        it('it should DELETE a book given the id', (done) => {
            let product = new Product({name: "The Chronicles of Narnia", description: ""})
            product.save((err, prod) => {
                chai.request(server)
                    .delete('/product/' + prod.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Product successfully deleted!');
                        res.body.result.should.have.property('ok').eql(1);
                        res.body.result.should.have.property('n').eql(1);
                    done();
                });;
            });
        });
    });
});

