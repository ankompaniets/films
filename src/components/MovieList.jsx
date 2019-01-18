import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MovieList extends Component {

	render() {
		// console.log(this);
		const {
      movies,
      addToWillWatch,
      removeFromWillWatch
    } = this.props;

		return (
      movies.map(movie => {
        return (
          <div key={movie.id} className="col-12 col-lg-6 col-xl-4 mb-4">
            <MovieItem
              item={movie}
              addToWillWatch={addToWillWatch}
              removeFromWillWatch={removeFromWillWatch}
            />
          </div>
        );
      })
    );
	}	
}

export default MovieList;