import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
}