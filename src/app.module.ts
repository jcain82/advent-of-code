import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdventModule } from './advent/advent.module';

@Module({
  imports: [AdventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
