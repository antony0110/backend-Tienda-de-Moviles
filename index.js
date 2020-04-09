const express = require('express');
const app = express();
const PORT = 3000;
const productsRouter = require('./routers/products');
const categoriesRouter = require('./routers/categories');

app.use(express.json());
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);



app.listen(PORT,()=>console.log('Server runnig on port' + PORT));
