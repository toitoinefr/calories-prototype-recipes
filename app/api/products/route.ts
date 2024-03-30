import { NextResponse } from "next/server";
import prisma from "@/lib/db";


export async function GET() {
    const products = await prisma.product.findMany({});
    return NextResponse.json({
        products
    });
}
export async function POST(request: Request) {
    try {
        const { name, calories } = await request.json();
        const newProduct = await prisma.product.create({
            data: {
                name,
                calories: parseInt(calories)
            }
        })
        return NextResponse.json({ product: newProduct })
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit.', error);
        return NextResponse.error();
    }
}