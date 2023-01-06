import { BaseRepository } from '@/src/common/base.repository'
import { BadGatewayException, BadRequestException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { BaseEntity } from './base.entity'

export class CRUDService<T extends BaseEntity> implements BaseRepository<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  async create(entity: any): Promise<number> {
    try {
      const result = await this.genericRepository.save(entity)
      return result.id
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async getAll(): Promise<T[]> {
    try {
      const result = await this.genericRepository.find()
      return result
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async get(id: number): Promise<T> {
    try {
      const result = await this.genericRepository.findOne({ where: { id } as any })
      if (!result) {
        throw new BadRequestException('Data not found!')
      }
      return result
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async delete(id: number) {
    try {
      const data = await this.genericRepository.findOne({ where: { id } as any })
      if (!data) {
        throw new BadRequestException('Data not found!')
      }
      return this.genericRepository.softDelete(id)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async update(id: string, payload: any): Promise<any> {
    try {
      const data = await this.genericRepository.findOne({ where: { id } as any })
      if (!data) {
        throw new BadRequestException('Data not found!')
      }
      return this.genericRepository.update({ id } as any, payload)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }
}
