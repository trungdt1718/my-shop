import React from "react";
import { render, screen } from "@testing-library/react";
import Home from './Home';
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe('Home Component', () => {
  it('renders a default greeting', () => {
    render(<Home />);
    expect(screen.getByText('My Shop')).toBeInTheDocument();
  });

  it('renders the "Sản phẩm nổi bật" heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Sản phẩm nổi bật/i })).toBeInTheDocument();
  });

  it('renders at least one product', () => {
    render(<Home />);
    const product = screen.getByAltText(/Sản phẩm 1/i);
    expect(product).toBeInTheDocument();
  });

  it('renders the "Về chúng tôi" section', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Về chúng tôi/i })).toBeInTheDocument();
  });

  it('renders the copyright notice', () => {
    render(<Home />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Cửa hàng Thời trang`)).toBeInTheDocument();
  });
});