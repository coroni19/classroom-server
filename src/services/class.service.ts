// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { Class } from '../models/class.entity';

// @Injectable()
// export class ClassService {
//   constructor(
//     @InjectModel(Class)
//     private userModel: typeof Class,
//   ) {}

//   async findAll(): Promise<Class[]> {
//     return this.userModel.findAll();
//   }
// }


import { Injectable, Inject } from '@nestjs/common';
import { Class } from 'src/models/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @Inject('CLASS_REPOSITORY')
    private classRepository: typeof Class
  ) {}

  async findAll(): Promise<Class[]> {
    return this.classRepository.findAll<Class>();
  }
}