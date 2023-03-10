import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity('users')
class User{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}

export {User};