import { Injectable, Inject } from '@nestjs/common';
import { Class } from 'src/models/class.entity';
import { Student } from 'src/models/student.entity';

@Injectable()
export class ClassService {
  constructor(
    @Inject('CLASS_REPOSITORY')
    private classRepository: typeof Class
  ) {}

  async findAll(): Promise<Class[]> {
    return this.classRepository.findAll<Class>({include: [Student]});
  }
}