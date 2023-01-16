import { Entity } from "typeorm";

@Entity()
export class Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
}