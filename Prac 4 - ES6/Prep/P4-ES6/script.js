(function(){
	function SynthHandler(synths){
		this.synths = synths;

		this.getAfter = function(year){
			return this.synths.filter(function(synth){
				return synth.released > year; 
			});
		}

		this.getByReleaseDate = function(){
			return this.synths.sort(function(a, b){
				return a.released - b.released;
			});
		}		

		this.getUniqueManufacturer = function(){
			return this.synths.reduce(function(accumulator, currValue){
				if(accumulator.every(function(synth) { return synth.manufacturer != currValue.manufacturer } )) accumulator.push(currValue);
				return accumulator;
			}, []);
		}

		this.getSummaries = function(args){
			var list = args ? Array.prototype.slice.apply(arguments) : this.synths;
			return list.map(function(synth){
				return "The " + synth.name + ", released in " + synth.released + ", was manufactured by " + synth.manufacturer;
			});
		}
	}

	Array.prototype.getAfter = function(year){
		return new SynthHandler(this).getAfter(year);
	}

	Array.prototype.getSummaries = function(args){
		return new SynthHandler(this).getSummaries(args);
	}

	Array.prototype.getByReleaseDate = function(){
		return new SynthHandler(this).getByReleaseDate();
	}

	Array.prototype.getUniqueManufacturer = function(){
		return new SynthHandler(this).getUniqueManufacturer();
	}

	var synths = [
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

	var drumMachines = [
		{name: "TR-808", manufacturer: "Roland", released: 1980}, 
		{name: "Linn LM-1", manufacturer: "Linn Electronics", released: 1980}, 
		{name: "DMX", manufacturer: "Oberheim", released: 1980}, 
		{name: "TR-909", manufacturer: "Roland", released: 1983}
	];

	var handler = new SynthHandler(synths);

	// do stuff with handler
})();