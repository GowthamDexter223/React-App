import { render, screen } from '@testing-library/react';
import AddProduct from "./AddProduct"

test("product title required", () => {
    render(<AddProduct />);
    const productTitle = screen.getByPlaceholderText(/Enter Product title/)
    expect(productTitle).toBeInTheDocument();
});

test("product title required", () => {
    render(<AddProduct />);
    const productPrice = screen.getByPlaceholderText(/Enter Product price/)
    expect(productPrice).toBeInTheDocument();
});

test("product title required", () => {
    render(<AddProduct />);
    const productDescription = screen.getByPlaceholderText(/Enter Product description/)
    expect(productDescription).toBeInTheDocument();
});