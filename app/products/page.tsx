import { DataTableDemo } from '@/components/data/data-table-demo'
import React from 'react'

export default function ProductsPage() {
  return (
    <main>
        <div className="container mx-auto">
            <h1 className='text-4xl font-semibold mb-10'>Tous les produits</h1>
            <DataTableDemo />
        </div>
    </main>
  )
}
