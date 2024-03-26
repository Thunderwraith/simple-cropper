"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFileFilter = void 0;
const common_1 = require("@nestjs/common");
const imageFileFilter = (req, file, callback) => {
    console.log(file);
    if (!file)
        callback(new common_1.BadRequestException('File is required'));
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/))
        callback(new common_1.HttpException('Invalid file format. Accepted formats: jpg, jpeg, png, webp', common_1.HttpStatus.BAD_REQUEST));
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
//# sourceMappingURL=imageFileFilter.js.map