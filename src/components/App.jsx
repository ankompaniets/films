import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";
import "../style.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			movies: moviesData,
			moviesWillWatch: []
		}
	}

	addToWillWatch = movie => {
		this.setState(prevState => ({
			moviesWillWatch: [...prevState.moviesWillWatch, movie]
		}));
	};

	removeFromWillWatch = movie => {
		this.setState(prevState => ({
			moviesWillWatch: prevState.moviesWillWatch.filter(
				item => item.id !== movie.id
			)
		}));
	};

  render() {
  	// console.log(this)
  	const { movies, moviesWillWatch } = this.state;

    return (
    	<div className="container">
    		<div className="row mt-4">
    			<div className="movie-list col-12 col-md-9">
						<div className="row">
							<MovieList 
								movies={movies}
								addToWillWatch={this.addToWillWatch}
              	removeFromWillWatch={this.removeFromWillWatch}
              />
						</div>
					</div>
    			<div className="will-watch col-12 col-md-3">	    		
	    			<MovieListWillWatch moviesWillWatch={moviesWillWatch} />
	    		</div>
	    	</div>
	    </div>	
    )
  }
}

export default App;
