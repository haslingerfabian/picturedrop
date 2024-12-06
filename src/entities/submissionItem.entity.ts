/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SubmissionItems')
export class SubmissionItem {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    SubmissionId: number;

    @Column()
    FileId: number;

    @Column()
    ThumbnailId: number;

    @Column()
    Width: number;

    @Column()
    Height: number;

    @Column()
    ContentType: string;

    @Column()
    ContentLength: number;

    @Column()
    Rating: number;

    @Column()
    Orientation: number;

    @Column()
    CreatedById: number;

    @Column()
    CreatedOn: Date;

    @Column()
    LastModifiedById: number;

    @Column()
    LastModifiedOn: Date;
}