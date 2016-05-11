import React from "react";
import SlideshowStore from "./SlideshowStore";
import Slides from "./Slides";
import Controls from "./Controls";

require('./slideshow.scss');

class Slideshow extends React.Component{
	constructor(props) {
		super();
		const slides = props.data;
		this.state = {
			data: SlideshowStore.getAll(slides),
			current: SlideshowStore.currentSlide
		}
	}
	componentWillMount(){
		SlideshowStore.on("change", ()=>{
			this.setState({
				current: SlideshowStore.currentSlide
			})
		})
	}
	render() {
		return (
			<div className="slideshow">
				<Slides data={this.state.data} currentSlide={this.state.current}/>
				<Controls />
			</div>
		);
	}
}

export default Slideshow;
