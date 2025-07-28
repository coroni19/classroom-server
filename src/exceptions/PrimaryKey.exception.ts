import { HttpException, HttpStatus } from "@nestjs/common";

export class PrimaryKeyException extends HttpException {
  constructor(item: string, id: string) {
    super(`${item} with ID ${id} already exists`, HttpStatus.BAD_REQUEST);
  }
}