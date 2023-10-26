import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusEnum } from "./status.enum";

@Entity()
export class ToDoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.TODO })
    status: StatusEnum;
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
    
    @Column()
    userId: string;

}
