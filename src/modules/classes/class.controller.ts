import { CreateClassDto } from './dto/createClass.dto';
import { ClassService } from 'src/modules/classes/class.service';
import { Class } from 'src/modules/classes/entities/class.entity';
import { PrimaryKeyException } from 'src/exceptions/PrimaryKey.exception';
import { Get, Body, Post, Param, Delete, Controller } from '@nestjs/common';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(): Promise<Class[]> {
    try {
      return this.classService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:classId')
  async deleteClass(@Param('classId') classId: number) {
    try {
      await this.classService.deleteClass(classId);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createClass(@Body() createClassDto: CreateClassDto) {
    try {
      await this.classService.createClass(createClassDto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new PrimaryKeyException('Class', String(createClassDto.classId));
      }

      throw error;
    }
  }
}
