import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { Checkout } from './checkout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checkout])],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
