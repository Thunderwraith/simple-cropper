import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';

@Module({
  imports: [],
  controllers: [MediaController],
  providers: [],
})
export class MediaModule {}
