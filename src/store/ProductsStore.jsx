import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const ProductsStore = (set) => ({
    Products: [],
    addProduct: (Product) => {
        set((state) => ({
            Products: [Product, ...state.Products],
        }))
    },
    removeProduct: (ProductId) => {
        set((state) => ({
            Products: state.Products.filter((c) => c.id !== ProductId)
        }))
    },
    toggleProductStatus: (ProductId) => {
        set((state) => ({
            Products: state.Products.map((Product) => Product.id === ProductId ? {...Product, completed: !Product.completed} : Product)
        }))
    }
})

const useProductStore = create(
    devtools(
        persist(ProductsStore, {
            name: "Products",
        })
    )
)


export default useProductStore;