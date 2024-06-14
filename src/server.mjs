const port = 4045;

import exp from 'express';
const app = exp();
import db from './database.mjs';

app.use(exp.json());
app.use(exp.urlencoded({
    extended: true
}));

app.get('/products', (req, res) => {
    res.send(db.getProducts());
});

app.get('/products/:id', (req, res) => {
    res.send(db.getProduct(req.params.id));
});

app.post('/products', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price 
    });
    res.send(product);
});

app.put('/products/:id', (req, res, next) => {
    const product = db.updateProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    });
    res.send(product);
});

app.delete('/products/:id', (req, res, next) => {
    const product = db.deleteProduct(req.params.id);
    
    res.send(product);
});

app.listen(port, () => {
    console.log(`The server is executing on port ${port}.`);
});