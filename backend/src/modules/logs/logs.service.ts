import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Log, LogDocument } from './schemas/log.schema'

@Injectable()
export class LogsService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) { }

  async create(logData: Partial<Log>) {
    try {
      return await this.logModel.create({ ...logData })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      return await this.logModel.find().sort({ createdAt: -1 })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      const log = await this.logModel.findById(id)
      if (!log) throw new NotFoundException('Log not found')
      return log
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async update(id: string, logData: Partial<Log>) {
    try {
      const log = await this.logModel.findOneAndUpdate({ _id: id }, { ...logData }, { new: true })
      if (!log) throw new NotFoundException('Log not found')
      return log
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      const log = await this.logModel.findOneAndDelete({ _id: id })
      if (!log) throw new NotFoundException('Log not found')
      return log
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
