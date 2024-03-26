import { render, screen } from '@testing-library/react';
import AddProduct from './Components/AddProduct';

test("header should be displayed", () => {
    render(<AddProduct />);
    const headerElement = screen.getByText("Add Product")
    expect(headerElement).toBeInTheDocument();
});
