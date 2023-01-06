import { Exclude } from 'class-transformer'
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  @Exclude()
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt?: Date
}
