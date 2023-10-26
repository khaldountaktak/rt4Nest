import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Cv {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    firstname: string;
    @Column()
    age: number;
    @Column()
    cin: number;
    @Column()
    job: string;
    @Column()
    path: string;

    @ManyToOne(() => User, (user) => user.cvs)
    user: User;

    @ManyToMany(() => Skill, (skill) => skill.cvs)
    @JoinTable({ name: 'cv_skills' })
    skills: Skill[];
}


