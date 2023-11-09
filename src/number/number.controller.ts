import { Controller, Get, Query } from '@nestjs/common';

@Controller('number')
export class NumberController {
    @Get('getTheNumber')
    getTheNumber(@Query('first') first: number, @Query('second') second: number): string {
        try{
            if (second <= 0) {
            return 'El segundo número debe ser mayor que cero';
            }
            let product = '';
            for (let i = 1; i <= second; i++) {
            product += first * i;
            }
    
            return product.toString();
        }catch(error){
            throw new Error(`Error al calcular la formula: ${error.message}`);
        }

    }
}