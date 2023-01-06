import { ApiProperty } from '@nestjs/swagger'

export enum BaseResponseEnum {
  CREATED = 'Created!',
  UPDATED = 'Updated!',
  DELETED = 'Deleted',
  SUCCESS = 'Success!',
}

export class BaseResponse {
  data: {
    message: BaseResponseEnum
    item?: {
      id: string
      name?: string
    }
  }
}

export class PageInfoType {
  pageInfo: {
    limit: number

    offset: number

    total: number
  }
}

export abstract class CollectionResponse<T> {
  @ApiProperty()
  data: T[]

  @ApiProperty()
  pageInfo?: PageInfoType
}

export class GetAppVersionResponse {
  data: {
    version: string
  }
}
