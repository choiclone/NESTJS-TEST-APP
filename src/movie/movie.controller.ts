import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(
        private readonly movieService: MovieService,
    ) {};

    @Get()
    getAll(
    ): string {
        return this.movieService.getAll();
    }

    @Get("/:id")
    getOne(
        @Param('id') id: string
    ): string{
        return this.movieService.getOne(id);
    }

    @Post()
    createMovie(
        @Body('movie') movie: string[]
    ): string[] {
        return this.movieService.createMovie(movie);
    }

    @Patch("/:id")
    updateMovie(
        @Param("id") id: string
    ){
        return this.movieService.updateMovie(id);
    }

    @Delete("/:id")
    deleteMovie(
        @Param('id') id: string
    ) {
        return this.movieService.deleteMovie(id);
    }
}
