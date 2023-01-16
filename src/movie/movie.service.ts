import { Injectable } from '@nestjs/common';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        return this.movies.find(movie => movie.id == id); 
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
