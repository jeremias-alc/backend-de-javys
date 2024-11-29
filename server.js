const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()
const cors = require('cors')
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.get('/products', async (req, res) => {
    try {
        const { name } = req.query;
        console.log('Buscando producto por nombre:', name); 
        if (name) {
            const product = await Product.findOne({ name: new RegExp(`^${name}$`, 'i') }); 
            if (!product) {
                console.log('Producto no encontrado:', name);
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            console.log('Producto encontrado:', product);
            res.status(200).json(product);
        } else {
            const products = await Product.find();
            res.status(200).json(products);
        }
    } catch (error) {
        console.error('Error en GET /products:', error.message);
        res.status(500).json({ message: error.message });
    }
});


app.get('/products/:id', async(req, res) =>{
    try {
        const{id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `Product not found ${id}`});
 
        }
        res.status(200).json({message: 'Product deleted successfully'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const List = require('./models/List'); 


app.get('/lists', async (req, res) => {
    try {
        const lists = await List.find().populate('items').lean();
        const transformedLists = lists.map(list => ({
            ...list,
            id: list._id, 
        }));
        res.status(200).json(transformedLists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/lists', async (req, res) => {
    try {
        const newList = new List(req.body); 
        const savedList = await newList.save();
        res.status(201).json(savedList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.put('/lists/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { items } = req.body;

        
        const uniqueItems = [...new Set(items.map(item => item.toString()))];

        const updatedList = await List.findByIdAndUpdate(id, { items: uniqueItems }, { new: true });
        if (!updatedList) {
            return res.status(404).json({ message: 'Lista no encontrada' });
        }

        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.delete('/lists/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const deletedList = await List.findByIdAndDelete(id);
        if (!deletedList) {
            return res.status(404).json({ message: 'Lista no encontrada' });
        }

        res.status(200).json({ message: 'Lista eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


mongoose.connect('mongodb+srv://jeremiado:67804@jscluster.sj1wx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=JScluster')
.then(() =>{
    app.listen(3000, () =>{
        console.log('Server is running on port 3000')
    })
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})

