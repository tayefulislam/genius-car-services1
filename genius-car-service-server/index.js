const express = require('express');
const cors = require('cors')
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId


const app = express();
const port = process.env.port || 5000;


//middleware

app.use(cors())
app.use(express.json())




// data base

//

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fgmis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {

        await client.connect();

        const serviceCollections = client.db("geniusCar").collection('service');
        const orderCollections = client.db("geniusCar").collection('order');



        app.get('/services', async (req, res) => {

            const query = {};

            const cursor = serviceCollections.find(query);

            const result = await cursor.toArray()

            res.send(result);

        })

        // get item by id 

        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await serviceCollections.findOne(query)
            res.send(result)


        })

        // POST add to server


        app.post('/service', async (req, res) => {

            const service = req.body
            const result = await serviceCollections.insertOne(service)

            console.log(service)

            res.send(result)


        })

        app.delete('/delete/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await serviceCollections.deleteOne(query)
            console.log(result)
            res.send(result)


        })

        // order

        app.post('/order', async (req, res) => {
            const order = req.body;
            const result = await orderCollections.insertOne(order)
            res.send(result);
        })



    }

    finally {


    }

}

run().catch(console.dir)




app.get('/', (req, res) => {
    res.send('server is runnding')
})



app.listen(port, () => {
    console.log('port number', port)
})