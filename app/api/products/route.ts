import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Product } from "@/lib/types";


export async function GET() {
    const products = await prisma.product.findMany({});
    return NextResponse.json({
        products
    });
}
export async function POST(request: Request) {
    try {
        const { name, categoryId, calories, fat, fatSaturated, carbohydrates, sugar, fibres, salt } = await request.json();

        const newProduct: Product = await prisma.product.create({
            data: {
                name,
                category: categoryId ? { connect: { id: categoryId } } : undefined, // Liaison avec la catégorie si elle est fournie
                calories,
                fat,
                fatSaturated,
                carbohydrates,
                sugar,
                fibres,
                salt
            },
            include: {
                category: true // Inclure les détails de la catégorie dans la réponse
            }
        });

        return NextResponse.json({ product: newProduct });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit.', error);
        return NextResponse.error();
    }
}