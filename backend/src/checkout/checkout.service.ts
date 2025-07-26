import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Checkout } from './checkout.entity';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutData {
  items: CartItem[];
  address: string;
  paymentMethod: string;
}

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout)
    private readonly checkoutRepository: Repository<Checkout>,
  ) {}

  async processCheckout(checkoutData: CheckoutData) {
    const { items, address, paymentMethod } = checkoutData;

    if (!items || items.length === 0) {
      throw new BadRequestException('Cart is empty');
    }
    if (!address || address.trim() === '') {
      throw new BadRequestException('Delivery address is required');
    }
    if (!paymentMethod || paymentMethod.trim() === '') {
      throw new BadRequestException('Payment method is required');
    }

    // Save each item as a checkout record in the database
    for (const item of items) {
      const checkout = this.checkoutRepository.create({
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
      });
      await this.checkoutRepository.save(checkout);
    }

    return { message: 'Checkout processed successfully', data: checkoutData };
  }

  async findAll(): Promise<Checkout[]> {
    return this.checkoutRepository.find();
  }

  async findOne(id: number): Promise<Checkout | null> {
    return this.checkoutRepository.findOneBy({ id });
  }
}
