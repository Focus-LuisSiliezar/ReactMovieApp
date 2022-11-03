class MoviesModel {
    constructor(
        id,
        originalTitle,
        overview,
        popularity,
        posterPath,
        releaseDate,
        voteAverage,
        voteCount,
    ){
         this.id = id;
         this.originalTitle = originalTitle;
         this.overview = overview;
         this.popularity = popularity;
         this.posterPath = posterPath;
         this.releaseDate = releaseDate;
         this.voteAverage = voteAverage;
         this.voteCount = voteCount;
    }
}

export default MoviesModel;
