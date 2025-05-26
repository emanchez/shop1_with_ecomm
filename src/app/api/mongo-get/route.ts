import { NextResponse } from "next/server";
import clientPromise from "@/services/MongoClient";

export async function GET() {
    try {
        console.log("Attempting to fetch from MongoDB");
        const client = await clientPromise;
        const db = client.db('shop'); // Make sure to specify your database name if needed
        const shop = db.collection('products');
        
        const result = await shop.find({}).toArray();
        
        // Convert _id to string for each document
        const formattedResult = result.map(item => ({
            ...item,
            _id: item._id.toString()
        }));
        
        console.log("Successfully fetched data");
        return NextResponse.json(formattedResult);
    } catch (error) {
        console.error("MongoDB fetch error:", error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}