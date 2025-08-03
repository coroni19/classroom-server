import { Module } from '@nestjs/common';
import { JoiProvider } from './joi.provider';

@Module({
  providers: [JoiProvider],
  exports: [JoiProvider],
})
export class JoiModule {}
