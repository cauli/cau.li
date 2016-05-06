var ColorManager = function(colorSequence) {
    var colorSequence = colorSequence || ["#FDE6BD", "#A1C5AB", "#F4DD51", "#D11E48", "#632F53", "#D11E48", "#F4DD51", "#A1C5AB"];

	var currentColorSequence = 0;

    this.grabNextColor = function() {
    	currentColorSequence++;

    	if(currentColorSequence > colorSequence.length-1)
    	{
    		currentColorSequence = 0;
    	}

    	return colorSequence[currentColorSequence];
    }

    this.grabCurrentColor = function() {
    	return colorSequence[currentColorSequence];
    }
}