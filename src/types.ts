export interface Address {
    street: string;
    city: string;
    state: string;
    zip_code: string;
}

export interface PhoneNumber {
    type: string;
    number: string;
}

export interface Preferences {
    newsletter: boolean;
    notifications: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
}

export interface OrderItem {
    product_id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    order_id: string;
    date: string;
    total: number;
    items: OrderItem[];
}

export interface Membership {
    level: string;
    start_date: string;
    expiry_date: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    is_active: boolean;
    address: Address;
    phone_numbers: PhoneNumber[];
    preferences: Preferences;
    orders: Order[];
    membership: Membership;
}
