import * as bcrypt from 'bcryptjs';
import {
    BeforeInsert,
    Column,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
    Entity, ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    RelationId
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    Uid:Number;

    
    @Column()
    Username: string;

    @Column()
    City: string



    @OneToOne(() => User)
    @JoinColumn({name:"Friend"})
    profile: User["Uid"]
 


  
}

