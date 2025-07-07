import { Controller, Get } from '@nestjs/common';
import { ClassService } from 'src/services/class.service';
import { Class } from 'src/models/class.entity';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }
}
