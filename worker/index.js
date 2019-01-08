const keys = require('./keys');
const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
})

const sub = redisClient.duplicate();

function fib(index){
    if(index < 2) return 1;
    return fib(index-1) + fib(index-2);
}

sub.on('message', (channel, message)=>{
    // console.log(message);
    // hset hashes the values, message received is what the user entered into the form
    // set the key to the message and the value to the result of the int message, which will be an index
    redisClient.hset('values', message, fib(parseInt(message)));
})

sub.subscribe('insert');
