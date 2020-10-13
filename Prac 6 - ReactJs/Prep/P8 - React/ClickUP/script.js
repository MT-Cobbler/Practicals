const synths = [
	{name: "Minimoog", manufacturer: "Moog", released: 1970},
	{name: "MS-20", manufacturer: "Korg", released: 1978},
	{name: "Juno-106", manufacturer: "Roland", released: 1984},
	{name: "Prophet-5", manufacturer: "Sequential Circuits", released: 1978},
	{name: "DX-7", manufacturer: "Yamaha", released: 1983},
	{name: "Jupiter-8", manufacturer: "Roland", released: 1981},
	{name: "Chroma Polaris", manufacturer: "Rhodes", released: 1984},
	{name: "Mono/Poly", manufacturer: "Korg", released: 1981},
	{name: "SH-101", manufacturer: "Roland", released: 1983},
	{name: "Casiotone 101", manufacturer: "Casio", released: 1981}
];

class Synth extends React.Component{
	render(){
		return(
			<div class="card col-md-4">
				<div class="card-header"> {this.props.synths.name}</div>
				<div class="card-body">
					<div  class="card-text">
						<p><b>Manufacturer: </b> {this.props.synths.manufacturer}</p>
						<p><b>Release Date: </b>  {this.props.synths.released}</p>
					</div>
				</div>
			</div>
		)
	}
};

ReactDOM.render(
	<Synth synths={synths[2]}/>,
	document.getElementById("root")
);
