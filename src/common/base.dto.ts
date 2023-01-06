import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class IdParams {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id: string
}

export class ProjectIdParams {
  @IsNotEmpty()
  @IsUUID()
  projectId: string
}

export class PaginationQuery {
  @IsOptional()
  @ApiProperty()
  offset?: number

  @IsOptional()
  @ApiProperty()
  limit?: number
}

export class PageInfoType {
  @ApiProperty()
  limit: number

  @ApiProperty()
  offset: number

  @ApiProperty()
  total: number
}

export abstract class Collection<T> {
  @ApiProperty()
  data: T[]

  @ApiProperty()
  pageInfo: PageInfoType
}
