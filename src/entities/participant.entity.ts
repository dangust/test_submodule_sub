import { BaseEntity } from '@/src/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ParticipantStatusEnum {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Entity('participants')
export class ParticipantEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  slug: string;
}
