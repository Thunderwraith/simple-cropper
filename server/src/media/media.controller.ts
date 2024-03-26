import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from './utils/imageFileFilter';

@Controller('media')
export class MediaController {
  //

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image', { fileFilter: imageFileFilter }))
  uploadImage(@Body() body) {
    console.log(body);

    return null;
  }
}
