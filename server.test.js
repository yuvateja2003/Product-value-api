const request = require('supertest');
const app = require('./server');

describe('POST /api/calculate-value', () => {
  it('should calculate total value correctly', async () => {
    const response = await request(app)
      .post('/api/calculate-value')
      .send([
        { name: 'Product 1', price: 10, quality: 2 },
        { name: 'Product 2', price: 5, quality: 3 },
      ]);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('totalValue');
    expect(response.body.totalValue).toBe(35);
  });

  it('should return 400 for invalid input', async () => {
    const response = await request(app)
      .post('/api/calculate-value')
      .send([{ name: 'Invalid Product', price: 'not a number', quality: 2 }]);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 for empty array', async () => {
    const response = await request(app)
      .post('/api/calculate-value')
      .send([]);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});