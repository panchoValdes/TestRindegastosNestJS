import { Controller, Get, Query } from '@nestjs/common';

@Controller('birthday')
export class BirthdayController {
    @Get('getDaysUntilMyBirthday')
    getDaysUntilMyBirthday(@Query('birthdate') birthdate: string): string{
        try{
            const today = new Date();
            const nextBirthday = new Date(birthdate);
            nextBirthday.setFullYear(today.getFullYear());

            if (nextBirthday < today) {
                nextBirthday.setFullYear(today.getFullYear() + 1);
            }

            const daysRemaining = Math.ceil((nextBirthday.getTime() - today.getTime())/(1000 * 60 * 60 * 24));

            return `Faltan ${daysRemaining} dias para su cumpleaños.`;
        }catch(error){
            throw new Error(`Error al calcular los dias de cumpleaños: ${error.message}`);
        }
    }
}
