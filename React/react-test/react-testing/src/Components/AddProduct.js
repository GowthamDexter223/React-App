import React from 'react'

const AddProduct = () => {
  return (
    <>
    <h1>Add Product</h1>
    <form>
        <p>
            <input type='text' placeholder='Enter Product title' />
        </p>
        <p>
            <input type='number' placeholder='Enter Product price' />
        </p>
        <p>
            <textarea type='text' placeholder='Enter Product description' />
        </p>
        <button type='button'>Add</button>
    </form>
    </>
  )
}

export default AddProduct;
