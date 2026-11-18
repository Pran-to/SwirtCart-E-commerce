# SwiftCart E-Commerce

A responsive front-end e-commerce storefront built with HTML, JavaScript, Tailwind CSS, and daisyUI. SwiftCart uses the Fake Store API to display product categories, products, and trending items.

**Live site:** https://swiftcart-e-commerce-online-shop.netlify.app/

## Features

- Responsive navigation for desktop and mobile
- Hero banner and promotional call-to-action
- Product category filtering
- Product catalog loaded from the Fake Store API
- Trending products ranked by customer rating
- Product details modal with description, price, category, and rating
- About and contact pages
- Tailwind CSS and daisyUI styling
- Font Awesome icons

## Pages

- `index.html` - Home page with hero section, benefits, and trending products
- `product.html` - Product listing and category filters
- `about.html` - Information about SwiftCart
- `contact.html` - Contact page

## Technologies

- HTML5
- JavaScript
- Tailwind CSS
- daisyUI
- Font Awesome
- [Fake Store API](https://fakestoreapi.com/)
- Netlify

## Getting Started

### Prerequisites

No build tools or package installation are required. A modern web browser is enough.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Pran-to/SwirtCart-E-commerce.git
   ```

2. Enter the project directory:

   ```bash
   cd SwirtCart-E-commerce
   ```

3. Open `index.html` in your browser, or serve the directory with a local server:

   ```bash
   npx serve .
   ```

## API

The application retrieves data from [Fake Store API](https://fakestoreapi.com/):

- `https://fakestoreapi.com/products` - All products
- `https://fakestoreapi.com/products/categories` - Product categories
- `https://fakestoreapi.com/products/category/{category}` - Products in a category

## Project Structure

```text
SwirtCart-E-commerce/
├── Assets/
│   ├── banner-image.png
│   └── icon.png
├── about.html
├── contact.html
├── functional.js
├── index.html
├── product.html
├── tailwind.config.js
└── README.md
```

## Deployment

The project is deployed on Netlify. It can be deployed by connecting the GitHub repository to Netlify and publishing from the repository's root directory.

## Author

Created by [Pran-to](https://github.com/Pran-to).
