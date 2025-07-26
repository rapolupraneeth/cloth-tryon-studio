import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('CheckoutController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/checkout (POST) - success', async () => {
    const checkoutData = {
      items: [
        { id: 1, name: 'Product 1', price: 10.5, quantity: 2 },
        { id: 2, name: 'Product 2', price: 20, quantity: 1 },
      ],
      address: '123 Main St',
      paymentMethod: 'credit_card',
    };

    const response = await request(app.getHttpServer())
      .post('/checkout')
      .send(checkoutData)
      .expect(201);

    expect(response.body).toHaveProperty('message', 'Checkout processed successfully');
    expect(response.body.data).toEqual(checkoutData);
  });

  it('/checkout (POST) - fail empty cart', async () => {
    const checkoutData = {
      items: [],
      address: '123 Main St',
      paymentMethod: 'credit_card',
    };

    const response = await request(app.getHttpServer())
      .post('/checkout')
      .send(checkoutData)
      .expect(400);

    expect(response.body.message).toContain('Cart is empty');
  });

  it('/checkout (POST) - fail missing address', async () => {
    const checkoutData = {
      items: [{ id: 1, name: 'Product 1', price: 10.5, quantity: 2 }],
      address: '',
      paymentMethod: 'credit_card',
    };

    const response = await request(app.getHttpServer())
      .post('/checkout')
      .send(checkoutData)
      .expect(400);

    expect(response.body.message).toContain('Delivery address is required');
  });

  it('/checkout (POST) - fail missing payment method', async () => {
    const checkoutData = {
      items: [{ id: 1, name: 'Product 1', price: 10.5, quantity: 2 }],
      address: '123 Main St',
      paymentMethod: '',
    };

    const response = await request(app.getHttpServer())
      .post('/checkout')
      .send(checkoutData)
      .expect(400);

    expect(response.body.message).toContain('Payment method is required');
  });
});
