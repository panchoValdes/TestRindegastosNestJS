// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversionController } from './conversion/conversion.controller'; 
import { BirthdayController } from './birthday/birthday.controller';
import { NumberController } from './number/number.controller';


@Module({
  imports: [],
  controllers: [AppController, ConversionController, BirthdayController, NumberController], 
  providers: [AppService],
})
export class AppModule {}
