import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
  //
  console.log(file);

  if (!file) callback(new BadRequestException('File is required'));

  if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/))
    callback(
      new HttpException(
        'Invalid file format. Accepted formats: jpg, jpeg, png, webp',
        HttpStatus.BAD_REQUEST,
      ),
    );

  callback(null, true);
};
