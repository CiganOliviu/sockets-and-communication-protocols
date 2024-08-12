import { User } from "./types";

const clientNet = require('net');

const client = clientNet.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    client.write('Hello from client');
});

client.on('data', (data) => {
    const userData = JSON.parse(data) as User;
    console.log(userData.name);

    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server');
});
