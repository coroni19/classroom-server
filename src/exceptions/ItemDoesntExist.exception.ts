import { HttpException, HttpStatus } from "@nestjs/common";

export class ItemDoesntExistException extends HttpException {
  constructor(item: string, id: string) {
    super(`${item} with ID ${id} does not exist`, HttpStatus.BAD_REQUEST);
  }
}