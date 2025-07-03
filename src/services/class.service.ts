import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Class } from '../models/class.model';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class)
    private userModel: typeof Class,
  ) {}

  async findAll(): Promise<Class[]> {
    return this.userModel.findAll();
  }
}