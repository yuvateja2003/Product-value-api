# Product Value API

This is a Node.js/Express API that calculates the total value of products. It receives a list of product objects (containing name, price, and quality) and returns the total value of all products in the list.

## Features

- RESTful API endpoint for calculating product values
- SQLite database integration
- Input validation and error handling
- Unit tests using Jest and Supertest

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yuvateja2003/Product-value-api
   cd product-value-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`

3. To calculate the total value of products, send a POST request to `/api/calculate-value` with a JSON array of product objects:

   ```
   curl -X POST -H "Content-Type: application/json" -d '[{"name":"Product 1","price":10,"quality":2},{"name":"Product 2","price":5,"quality":3}]' http://localhost:3000/api/calculate-value
   ```

## Running Tests

To run the unit tests:

```
npm test
```

## API Documentation

### POST /api/calculate-value

Calculates the total value of all products in the provided list.

Request body:
```json
[
  {
    "name": "string",
    "price": number,
    "quality": number
  }
]
```

Response:
```json
{
  "totalValue": number
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
