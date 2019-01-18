import React, { Component } from "react";

class MovieItem extends Component {

	constructor() {
		super();

		this.state = {
      willWatch: false
    };
	}

	changeWillWatch = () => {
    const { addToWillWatch, removeFromWillWatch, item } = this.props;
    this.state.willWatch
      ? removeFromWillWatch(item)
      : addToWillWatch(item);
    console.log(addToWillWatch)
    this.setState(prevState => ({
      willWatch: !prevState.willWatch
    }));
  };

	render() {
		// console.log(this.props.item.vote_average);
		const { item: { poster_path, vote_average, id, title } } = this.props;
		const	{ willWatch } = this.state,
					imgSrcUrl = 'https://image.tmdb.org/t/p/w500';

		return (			
			<div className="card" id={id}>
				<img className="card-img-top" src={`${imgSrcUrl}${poster_path}`} alt="" />
	  		<div className="card-body">
	    		<h5 className="card-title">{title}</h5>
	   			<div className="d-flex justify-content-between align-items-center">
		   			<p className="mb-0">Rating: {vote_average}</p>
		   			<button 
		   				type="button"
 							className={`btn ${willWatch ? "btn-success": "btn-secondary"}`}
 							onClick={this.changeWillWatch}
 						>
 							Will Watch
		   			</button>
		   		</div>
			  </div>
			</div>			
		);
	}
}

export default MovieItem;