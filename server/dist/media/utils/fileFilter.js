"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const common_1 = require("@nestjs/common");
const fileFilter = (req, file, callback) => {
    console.log(file);
    if (!file)
        callback(new common_1.HttpException('File is required', common_1.HttpStatus.BAD_REQUEST));
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/))
        callback(new common_1.HttpException('Invalid file format. Accepted formats: jpg, jpeg, png, webp', common_1.HttpStatus.BAD_REQUEST));
    callback(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.js.map