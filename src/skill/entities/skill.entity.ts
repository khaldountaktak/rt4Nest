import { Cv } from "../../cv/entities/cv.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;

    @ManyToMany(() => Cv, (cv) => cv.skills)
    cvs: Cv[];

}
