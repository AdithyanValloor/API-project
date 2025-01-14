const express = require('express')

const {productList} = require('./ProductList')

const app = express()

const port = 4000

app.get('/', (req, res) => {

    res.status(200).send("Books API")

})

app.get('/books',(req, res) => {
    
    res.status(200).send(productList)
    
})

app.get('/books/:id', (req, res) => {

    try {
        
        const productId = parseInt(req.params.id)

        const product = productList.find(prod => prod.id === productId)

        if(!product){
            res.status(404).json({message:"Product not found"})
        }

        res.status(200).send(product)

        
    } catch (error) {
        res.status(404).json({error:error})
    }

})

app.listen(port, ()=> console.log("Server started"))