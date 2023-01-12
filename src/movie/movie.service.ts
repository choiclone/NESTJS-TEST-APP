import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    getAll(): string {
        return "hello Suckers";
    }

    getOne(id: string): string {
        return `hello Sucker ${id}`; 
    }

    createMovie(movie: string[]) {
        return movie;
    }

    updateMovie(id: string) {
        return `update movie id: ${id}`
    }

    deleteMovie(id: string) {
        return `delete movie id: ${id}`;
    }
}
