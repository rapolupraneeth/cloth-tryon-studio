import { Controller, Post, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async processCheckout(@Body() checkoutData: any) {
    return this.checkoutService.processCheckout(checkoutData);
  }
}
