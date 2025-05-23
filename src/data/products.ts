export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    featured?: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Premium T-Shirt",
        price: 29.99,
        description: "High-quality cotton t-shirt",
        category: "clothing",
        image: "/product_img/tshirt.png",
        featured: true
    },
    {
        id: 2,
        name: "Designer Hoodie",
        price: 59.99,
        description: "Comfortable hoodie",
        category: "clothing",
        image: "/product_img/hoodie.jpg",
        featured: true
    },
    {
        id: 3,
        name: "Limited Edition Poster",
        price: 24.99,
        description: "Exclusive artwork",
        category: "merchandise",
        image: "/product_img/poster.jpg",
        featured: true
    },
    {
        id: 4,
        name: "Branded Cap",
        price: 34.99,
        description: "Adjustable cap with logo",
        category: "accessories",
        image: "/product_img/cap.jpg"
    },
    {
        id: 5,
        name: "Collector's Pin Set",
        price: 19.99,
        description: "Set of 3 enamel pins with unique designs",
        category: "accessories",
        image: "/product_img/pins.jpg"
    },
    {
        id: 6,
        name: "Signature Notebook",
        price: 14.99,
        description: "Premium quality notebook",
        category: "merchandise",
        image: "/product_img/notebook.jpg"
    },
];