import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';

//
// [ExceptionHandler] Nest can't resolve dependencies of the AppController (?, QueryBus). Please make sure that the argument EventBus at index [0] is available in
// the AppModule context.

// Potential solutions:
// - If EventBus is a provider, is it part of the current AppModule?
// - If EventBus is exported from a separate @Module, is that module imported within AppModule?
//   @Module({
//     imports: [ /* the Module containing EventBus */ ]
//   })

// https://blog.logrocket.com/how-to-use-event-driven-programming-in-node-js/
// https://github.com/vladotesanovic/cqrs/blob/master/src/app.module.ts#L18  - to pomogło

import { CqrsModule } from '@nestjs/cqrs'; // tego brakowało...

import { OrderHandler } from './order/order.handler';
import { OrderSaga } from './order/order.saga';
import { ItemRepository } from './item/item.repository';

@Module({
  // imports: [],
  imports: [CqrsModule], // tego brakowało...
  controllers: [AppController],
  // providers: [AppService],
  providers: [OrderHandler, OrderSaga, ItemRepository],
})
export class AppModule {}
