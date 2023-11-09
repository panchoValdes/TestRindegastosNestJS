import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('conversion')
export class ConversionController {
  @Get('getConvertedAmount')
  async getConvertedAmount(@Query('from') from: string, @Query('to') to: string, @Query('amount') amount: number): Promise<string> {
    try {
      const response = await axios.get(`https://openexchangerates.org/api/convert/${amount}/${from}/${to}`);
      const convertedAmount = response.data.response;
      return `La cantidad convertida de ${from} a ${to} es ${convertedAmount} ${to}`;
    } catch (error) {
      throw new Error(`Error al convertir la moneda: ${error.message}`);
    }
  }
}
