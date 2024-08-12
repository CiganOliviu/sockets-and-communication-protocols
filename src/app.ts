const serverNet = require('net');

const server = serverNet.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
        socket.write(JSON.stringify(
            {
                id: 12345,
                name: "John Doe",
                email: "johndoe@example.com",
                age: 30,
                is_active: true,
                address: {
                    street: "123 Main St",
                    city: "Anytown",
                    state: "CA",
                    zip_code: "12345"
                },
                phone_numbers: [
                    {
                        type: "home",
                        number: "555-555-1234"
                    },
                    {
                        type: "work",
                        number: "555-555-5678"
                    }
                ],
                preferences: {
                    newsletter: false,
                    notifications: {
                        email: true,
                        sms: false,
                        push: true
                    }
                },
                orders: [
                    {
                        order_id: "A001",
                        date: "2024-08-01",
                        total: 99.99,
                        items: [
                            {
                                product_id: "P001",
                                name: "Widget",
                                quantity: 2,
                                price: 19.99
                            },
                            {
                                product_id: "P002",
                                name: "Gadget",
                                quantity: 1,
                                price: 59.99
                            }
                        ]
                    },
                    {
                        order_id: "A002",
                        date: "2024-08-10",
                        total: 49.99,
                        items: [
                            {
                                product_id: "P003",
                                name: "Doohickey",
                                quantity: 1,
                                price: 49.99
                            }
                        ]
                    }
                ],
                membership: {
                    level: "Gold",
                    start_date: "2023-01-01",
                    expiry_date: "2024-12-31"
                }
            }
        ));
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
