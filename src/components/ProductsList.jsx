import React from 'react'
import useProductStore from '../store/ProductsStore'


const ProductList = () => {
    const {Products, removeProduct, toggleProductStatus} = useProductStore(
        (state) => ({
            Products: state.Products,
            removeProduct: state.removeProduct,
            toggleProductStatus: state.toggleProductStatus
        })
    )
  return (
    <>
    <ul>
        {Products.map((Product, i) => {
            return (
                <React.Fragment key={i}>
                    <li
                    className={`Product-item`}
                    style={{
                        backgroudColor: Product.completed ? "#00FF0044" : "white"
                    }}
                    >
                        <span className="Product-item-col-1">
                            <input 
                            checked={Product.completed}
                            type="checkbox"
                            onChange={(e) => {
                                toggleProductStatus(Product.id)
                            }}
                            />
                        </span>
                        <span>{Product?.title}</span>
                        <button 
                        onClick={() => {
                            removeProduct(Product.id)
                        }}
                        className="delete-btn">Delete</button>
                    </li>
                </React.Fragment>
            )
        })}
    </ul>
    </>
  )
}

export default ProductList