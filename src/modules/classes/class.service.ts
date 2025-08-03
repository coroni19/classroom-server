import { Injectable } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { CreateClassDto } from './dto/createClass.dto';
import { Class } from 'src/modules/classes/entities/class.entity';

@Injectable()
export class ClassService {
  constructor(private classRepository: ClassRepository) {}

  async findAll(): Promise<Class[]> {
    return this.classRepository.findAll();
  }

  async createClass(createClassDto: CreateClassDto): Promise<void> {
    await this.classRepository.createClass(createClassDto);
  }

  async deleteClass(classId: number): Promise<void> {
    await this.classRepository.deleteClass(classId);
  }
}
