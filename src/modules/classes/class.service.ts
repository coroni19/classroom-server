import { Injectable } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { CreateClassDto } from './dto/createClass.dto';
import { Class } from 'src/modules/classes/entities/class.entity';
import { ItemDoesntExistException } from 'src/exceptions/ItemDoesntExist.exception';

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
    const classToDelete = await this.classRepository.findClassById(classId);
    
    if (!classToDelete) {
      throw new ItemDoesntExistException('Class', String(classId));
    }
    
    await this.classRepository.deleteClass(classId);
  }
}
