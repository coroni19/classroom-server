import {
  Get,
  Body,
  Post,
  Param,
  Delete,
  HttpStatus,
  Controller,
  HttpException,
} from '@nestjs/common';
import { CreateClassDto } from './dto/createClass.dto';
import { ClassService } from 'src/modules/classes/class.service';
import { Class } from 'src/modules/classes/entities/class.entity';
import { PrimaryKey } from 'sequelize-typescript';
import { PrimaryKeyException } from 'src/exceptions/PrimaryKey.exception';
import { log } from 'console';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Post()
  async createClass(
    @Body() createClassDto: CreateClassDto,
  ): Promise<{ message: string }> {
    try {
      await this.classService.createClass(createClassDto);
      return {
        message: 'Class created successfully',
      };
    } catch (error: any) {
      console.log(error.code);
      if (error.code === '23505') {
        throw new PrimaryKeyException('Class', String(createClassDto.classId));
      }
      console.log('ffffffffffffffffffffffffffffffff');
      throw new PrimaryKeyException('Class', String(createClassDto.classId));
    }
  }

  @Delete('/:classId')
  async deleteClass(
    @Param('classId') calssId: number,
  ): Promise<{ message: string }> {
    await this.classService.deleteClass(calssId);
    return {
      message: `Class with ID ${calssId} was deleted successfully`,
    };
  }
}
