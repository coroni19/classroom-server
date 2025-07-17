import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/createClass.dto';
import { Class } from 'src/modules/classes/entities/class.entity';
import { Student } from 'src/modules/students/entites/student.entity';

@Injectable()
export class ClassRepository {
  public async findAll(): Promise<Class[]> {
    return await Class.findAll<Class>({ include: [Student] });
  }

  public async createClass(createClassDto: CreateClassDto): Promise<void> {
    await Class.create(createClassDto);
  }

  public async deleteClass(classId: number): Promise<void> {
    await Class.destroy({ where: { classId: classId } });
  }
}
