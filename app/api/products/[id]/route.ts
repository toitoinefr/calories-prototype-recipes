import { NextResponse } from "next/server";
import prisma from "@/lib/db"
import { notFound } from "next/navigation";

export async function GET(request:Request) {
    try {
        const productId = parseInt(request.url.slice(request.url.lastIndexOf('/') + 1))
        const product = await prisma.product.findFirst({
            where: {
                id: productId
            }
        })
        if(product == null) {
            return notFound()
        }
        return NextResponse.json({
            product
        }, { status: 200 })
    } catch (error) {
        console.error('Erreur lors de la récupération du produit.', error);
        return NextResponse.error()
    }
}

export async function PUT(request: Request) {
    try {
        const productId = parseInt(request.url.slice(request.url.lastIndexOf('/') + 1))
        const { name, calories } = await request.json();
        await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                name,
                calories: parseInt(calories)
            }
        })
        const product = prisma.product.findFirst({
            where: {
                id: productId
            }
        })
        return NextResponse.json({
            product
        }, { status: 200 })
    } catch (error) {
        console.error('Erreur lors de la modification du prodiut.', error);
        return NextResponse.error()
    }
}

export async function DELETE(request: Request) {
    try {
        const productId = parseInt(request.url.slice(request.url.lastIndexOf('/') + 1))
        await prisma.product.delete({
            where: {
                id: productId
            }
        })
        return NextResponse.json({
            success: "Produit supprimé avec succès."
        }, { status: 200})
    } catch ( error ) {
        console.error('Erreur lors de la suppression du prodiut.', error);
        return NextResponse.error()
    }
}