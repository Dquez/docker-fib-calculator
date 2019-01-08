const keys = require('keys');
const redis = require('redis');
const {Pool} = require('pg');
// Express set up
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser());
app.use(cors());

// Postgres Client Setup
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

pgClient.on('error', () => console.log('Lost Postgres connection'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err=> console.log(err))

//  Redis Client Setup

const redisClient = redis.RedisClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: ()=> 1000
})

// once you set up a connection listen/subscribe/publish information, it can't be used for other purposes
const redisPublisher = redisClient.duplicate();

//  Express route handlers
app.get('/', (req, res)=>{
    res.send('Hi');
})

app.get('/values/all', async (req,res)=>{
    const values = await pgClient.query('SELECT * FROM values');
    res.send(values.rows);
})

app.get('/values/current', async (req, res)=>{
    redisClient.hgetall('values', (err, values)=>{
        res.send(values);
    })
})

app.post('/values', async (req, res)=>{
    const {index} = req.body;
    if(parseInt(index) > 40){
        return res.status(422).send('Index is too high');
    }
    redisClient.hset('values', index, 'Nothing yet!');
    redisPublisher.publish('insert', index);
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
    res.send({working:true})
})

app.listen(5000, ()=>{
    console.log('Listening on port 5000');
})