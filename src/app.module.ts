import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { MongooseModule } from '@nestjs/mongoose';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://felipesalvador8011_db_user:YJxLWhMaJExt3vFx@carometro.t2ntbqe.mongodb.net/'),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'projeto_carometro_nestjs',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




