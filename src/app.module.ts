import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiswaModule } from './Siswa/siswa.module';

@Module({
  imports: [SiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
