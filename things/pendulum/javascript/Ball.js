var Ball = function(config) {
	this.ropeLength = config.ropeLength;
	this.group = config.group;
	this.line = config.line;
	this.originLine = config.originLine;
	this.shadow = config.shadow;
	this.integration = config.integration;
	this.frequency = config.frequency;
	this.defaultMaterial = config.defaultMaterial;

	this.interval = false;

	this.audioContext = config.audioContext;


}

Ball.prototype.setVolume = function (volume)
{	
	this.gainNode.value = volume;
}

Ball.prototype.getVolume = function ()
{	
	return this.gainNode.value;
}

Ball.prototype.playSound = function (timeout)
{
	/*var n = 2048;
	var real = new Float32Array(n);
	var imag = new Float32Array(n);
*/
	// OSCILLATORNODES ARE SINGLE-USE ENTITIES
	//http://blog.szynalski.com/2014/04/02/web-audio-api/
	this.oscillator = this.audioContext.createOscillator();

	/*var randomPhase = Math.random()*999;
	
	
	//Square
	for(x=1;x<n;x+=2)
	{
		imag[x] = (4.0 / (Math.PI * x)) * randomPhase;
	}*/
	

	/* Triangle */
	/*for(x=1;x<n;x+=2)
	{
    	imag[x] = 8.0 / Math.pow(Math.PI, 2) * Math.pow(-1, (x-1)/2) / Math.pow(x, 2) * Math.sin(Math.PI * x) * randomPhase;
	}*/

	//var wave = this.audioContext.createPeriodicWave(real, imag);

	//this.oscillator.setPeriodicWave(wave);  

	this.gainNode = this.audioContext.createGain();
	this.oscillator.connect(this.gainNode);
	this.gainNode.connect(this.audioContext.destination);
	this.oscillator.type = "sine";
	this.gainNode.gain.value = window.volume;

	var ball = this;

	this.oscillator.frequency.value = (Math.random() * 300) + this.frequency;

	ball.oscillator.start();

	setTimeout(function() {
		ball.oscillator.stop();
	}, timeout);
}

Ball.prototype.move = function(time)
{
	var ball = this;

	var theta = this.integration.thetas[time];

	// The pendulum bob
    var PI = Math.PI;
    var x1 = 0, y1 = 0;
    var x2, y2;

    if(0 <= theta < PI/2){
            x2 = this.ropeLength * Math.cos(PI/2 - theta);
            y2 = this.ropeLength * Math.sin(PI/2 - theta);
    }
    else if(PI/2 <= theta < PI){
            x2 = this.ropeLength * Math.cos(theta - PI/2);
            y2 = this.ropeLength * Math.sin(theta - PI/2);
    }
    else if(-PI/2 <= theta < 0){
            x2 = this.ropeLength * Math.cos(PI/2 - Math.abs(theta));
            y2 = this.ropeLength * Math.sin(PI/2 - Math.abs(theta));
    }
    else if(-PI <= theta < -PI/2){
            x2 = this.ropeLength * Math.cos(Math.abs(theta) - PI/2);
            y2 = this.ropeLength * Math.sin(Math.abs(theta) - PI/2);
    }
    else{
        console.error("Invalid theta");
    }

    if(theta < 0.02 && theta > -0.02)
    {
    	//Set color to red (Temporary);
      	this.group.children[0].material = new THREE.MeshLambertMaterial( { color: 0x900000 } );

      	if(this.interval === false)
      	{
      		this.interval = true;
    		this.playSound(10);
      	}

    	setTimeout(function () {
    		ball.interval = false;
    		ball.group.children[0].material = ball.defaultMaterial;
    	}, 100);
    }

    this.group.position.x = x2;
    this.group.position.y = y2;

    if(this.line.geometry.vertices.length > 1)
    {
		this.line.geometry.vertices.pop();
    }

    this.line.geometry.vertices.push(new THREE.Vector3(x2,y2,0));
    this.line.geometry.verticesNeedUpdate = true;
    this.shadow.position.x = x2;
}