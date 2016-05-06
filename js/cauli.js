'use strict';
	
	Physijs.scripts.worker = 'js/physijs_worker.js';
	Physijs.scripts.ammo = '../js/ammo.js';
	
	var initScene, render,
		ground_material, box_material, piece_material, pieces_material, initEventHandling, blocks = [], selected_block = null, mouse_position = new THREE.Vector3, block_offset = new THREE.Vector3, _i, _v3 = new THREE.Vector3,
		projector, renderer, render_stats, physics_stats, scene, ground, light, camera, intersect_plane;
	
	initScene = function() {
		projector = new THREE.Projector;
		
		renderer = new THREE.WebGLRenderer({ antialias: false });
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMapEnabled = true;
		renderer.shadowMapSoft = true;
		document.getElementById( 'viewport' ).appendChild( renderer.domElement );
		

		scene = new Physijs.Scene;
		scene.setGravity(new THREE.Vector3( 0, -5.5, 0 ));
		scene.addEventListener(
			'update',
			function() {

				if ( selected_block !== null ) {

					_v3.copy( mouse_position ).add( block_offset ).sub( selected_block.position ).multiplyScalar( 5 );
					_v3.y = 0;
					selected_block.setLinearVelocity( _v3 );

					// Reactivate all of the blocks
					_v3.set( 0, 0, 0 );
					for ( _i = 0; _i < blocks.length; _i++ ) {
						blocks[_i].applyCentralImpulse( _v3 );
					}
				}

				scene.simulate( undefined, 0.0000000001);
			}
		);

		intersect_plane = new THREE.Mesh(
			new THREE.PlaneGeometry( 150, 150 ),
			new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
		);

		intersect_plane.rotation.x = Math.PI / -2;
		scene.add( intersect_plane );

		initEventHandling();
		
		camera = new THREE.PerspectiveCamera(
			10,
			window.innerWidth / window.innerHeight,
			10,
			1600
		);

		camera.position.set( 60, 50, 60 );
		camera.lookAt( scene.position );

		scene.add( camera );
		
	
		light = new THREE.DirectionalLight( 0xFFFFFF );

		light.castShadow = true;
		light.shadowCameraLeft = -10;
		light.shadowCameraTop = -10;
		light.shadowCameraRight = 10;
		light.shadowCameraBottom = 10;
		light.shadowCameraNear = 10;
		light.shadowCameraFar = 6400;
		light.shadowBias = -.0000000000000000000;
		light.shadowMapWidth = light.shadowMapHeight = 2048;
		light.shadowDarkness = 0.1;
		scene.add( light );


		var input;
		
		var bumper_material = Physijs.createMaterial(
				new THREE.MeshBasicMaterial({ opacity: 0, transparent: true }),
			1.0, 
			0.0 // low restitution
		);


		piece_material = Physijs.createMaterial(
				new THREE.MeshBasicMaterial({
								        wireframe: false,
								        color: '#eee'
								      }),
			0.4, 
			0.6
		);

		var piece_material2 = Physijs.createMaterial(
				new THREE.MeshBasicMaterial({
								        wireframe: false,
								        color: '#eee'
								      }),
			0.4, 
			0.6
		);



		pieces_material = [piece_material, piece_material2];


		ground_material = Physijs.createMaterial(
			new THREE.MeshBasicMaterial({
								        wireframe: false,
								        color: '#222',
								        opacity: 1.0
								      }),
			1.0, 
			0
		);

		
		// Ground
		ground = new Physijs.BoxMesh(
			new THREE.CubeGeometry(700, 1, 700),
			//new THREE.PlaneGeometry(50, 50),
			ground_material,
			0 // mass
		);

		ground.receiveShadow = true;
		scene.add( ground );
		

		var bumper,
			bumper_geom = new THREE.CubeGeometry(2, 50, 50);
		
		bumper = new Physijs.BoxMesh( bumper_geom, bumper_material, 0, { restitution: .2 } );
		bumper.position.y = 1;
		bumper.position.x = -8;
		bumper.receiveShadow = false;
		bumper.castShadow = false;
		bumper.visible = false;
		scene.add( bumper );
		
		bumper = new Physijs.BoxMesh( bumper_geom, bumper_material, 0, { restitution: .2 } );
		bumper.position.y = 1;
		bumper.position.x = 8;
		bumper.receiveShadow = false;
		bumper.castShadow = false;
		bumper.visible = false;
		scene.add( bumper );
		
		bumper = new Physijs.BoxMesh( bumper_geom, bumper_material, 0, { restitution: .2 } );
		bumper.position.y = 1;
		bumper.position.z = -8;
		bumper.rotation.y = Math.PI / 2;
		bumper.receiveShadow = false;
		bumper.castShadow = false;
		bumper.visible = false;
		scene.add( bumper );
		
		bumper = new Physijs.BoxMesh( bumper_geom, bumper_material, 0, { restitution: .2 } );
		bumper.position.y = 1;
		bumper.position.z = 8;
		bumper.rotation.y = Math.PI / 2;
		bumper.receiveShadow = false;
		bumper.castShadow = false;
		bumper.visible = false;
		scene.add( bumper );



		scene.add( createLadder(8,5,0.5,0.1,-3,7,-1) );
		scene.add( createC(-3, 6, -3) );
		scene.add( createA(-0, 5, -3) );
		scene.add( createU(1, 5, 0) );
		scene.add( createL(1, 3, 3) );




		var imat = pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];

		var boxI = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    imat
		);
		boxI.scale.set(1, 1, 1);
		boxI.rotation.y = Math.random() * Math.PI/2;
		boxI.castShadow = true;
		boxI.receiveShadow = true;
		boxI.position.set(
			3,
			5,
			3
		);
		scene.add( boxI )

		blocks.push( boxI );

		var boxPingo = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 1, 1 ),
		    imat
		);
		boxPingo.castShadow = true;
		boxPingo.receiveShadow = true;
		boxPingo.position.set(
			3,
			9,
			3
		);
		scene.add( boxPingo )
	

		blocks.push( boxPingo );


		requestAnimationFrame( render );
		scene.simulate();
	};
	




	function createLadder(steps,height,width,grossura,x,y,z)
	{
		var mymat =  pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];
		
		var distanceBetweenSteps = height/steps;

		var ladoE = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( grossura, height, grossura ),
		   mymat
		);		

		var ladoD = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( grossura, height, grossura ),
		   mymat
		);		

		ladoE.position.set(
			x,
			y,
			z
		);

		ladoD.position.set(
			width,
			0,
			0
		);

		var allSteps = [];

		ladoE.add(ladoD);

		ladoD.castShadow = true;
		ladoD.receiveShadow = true;
		ladoE.castShadow = true;
		ladoE.receiveShadow = true;
		for(var i=0; i<steps; i++)
		{
			var step = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( width, grossura, grossura ),
		    mymat
			);		

			step.position.set(
				width/2,
				(-height/2)+(distanceBetweenSteps*i)+(distanceBetweenSteps/2),
				-grossura/2
			);

			allSteps[i] = step;

			step.castShadow = true;
			step.receiveShadow = true;

			ladoE.add(allSteps[i]);
		}

	

		blocks.push( ladoE );

		return ladoE;
	}

	window.onload = initScene;
	
	function createC(x, y, z)
	{
		var mymat =  pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];
		
		var boxC = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		   mymat
		);		
		boxC.rotation.y = Math.random() * -Math.PI/2;	
		var forward = Math.random() * 1.0 < 0.5 ? -1 : 1;
		boxC.rotation.z = Math.random() * Math.PI/10 * forward;						
		boxC.castShadow = true;
		boxC.receiveShadow = true;
		boxC.position.set(
			x,
			y,
			z
		);

	
		var _l = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 2, 1.25, 1 ),
		   mymat
		);
		_l.castShadow = true;
		_l.receiveShadow = true;
		_l.position.set(
			0.5,
			-1.5,
			0
		);

		boxC.add( _l);

		_l = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 2, 1.25, 1 ),
		   mymat
		);
		_l.castShadow = true;
		_l.receiveShadow = true;
		_l.position.set(
			0.5,
			1.5,
			0
		);

		boxC.add( _l);
		
		blocks.push( boxC );
		return boxC;
	}


	function createA(x, y, z)
	{
		var mymat =  pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];
		

		var boxA = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    mymat
		);		
		var forward = Math.random() * 1.0 < 0.5 ? -1 : 1;
		boxA.rotation.z = Math.random() * Math.PI/10 * forward;	
		boxA.rotation.y = Math.random() * -Math.PI/3 - 0.5;					
		boxA.castShadow = true;
		boxA.receiveShadow = true;
		boxA.position.set(
			x,
			y,
			z
		);

		var _a = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    mymat
		);
		_a.castShadow = true;
		_a.receiveShadow = true;
		_a.position.set(
			1.5,
			0,
			0
		);

		boxA.add( _a);

		_a = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 1.0, 1 ),
		    mymat
		);
		_a.castShadow = true;
		_a.receiveShadow = true;
		_a.position.set(
			0.75,
			1.5,
			0
		);

		boxA.add( _a);


		_a = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 1.0, 1 ),
		    mymat
		);
		_a.castShadow = true;
		_a.receiveShadow = true;
		_a.position.set(
			0.75,
			-0.25,
			0
		);

		boxA.add( _a);
		
		
		blocks.push( boxA );
		return boxA;
	}

	function createU(x, y, z)
	{
		var mymat =  pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];
		

		var boxU = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    mymat
		);		
		var forward = Math.random() * 1.0 < 0.5 ? -1 : 1;
		boxU.rotation.z = Math.random() * Math.PI/10 * forward;	
		boxU.rotation.y = Math.random() * -Math.PI/4 +0.1;					
		boxU.castShadow = true;
		boxU.receiveShadow = true;
		boxU.position.set(
			x,
			y,
			z
		);

		

		var _u = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    mymat
		);
		_u.castShadow = true;
		_u.receiveShadow = true;
		_u.position.set(
			1.5,
			0,
			0
		);

		boxU.add( _u);

		_u = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 1.25, 1 ),
		    mymat
		);
		_u.castShadow = true;
		_u.receiveShadow = true;
		_u.position.set(
			0.5,
			-1.37,
			0
		);

		boxU.add( _u);
		blocks.push( boxU );
		return boxU;
	}

	function createL(x, y, z)
	{
		var mymat =  pieces_material[ Math.floor( Math.random() * pieces_material.length ) ];

		var boxL = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 1, 4, 1 ),
		    mymat
		);		
		var forward = Math.random() * 1.0 < 0.5 ? -1 : 1;
		boxL.rotation.z = Math.random() * Math.PI/10 * forward;	
		boxL.rotation.y = Math.random() * -Math.PI/2;					
		boxL.castShadow = true;
		boxL.receiveShadow = false;
		boxL.position.set(
			x,
			y,
			z
		);

	
		var _l = new Physijs.BoxMesh(
		    new THREE.CubeGeometry( 2, 1.25, 1 ),
		    mymat
		);
		_l.castShadow = true;
		_l.receiveShadow = false;
		_l.position.set(
			0.5,
			-1.5,
			0
		);

		boxL.add( _l);
		
		blocks.push( boxL );

		return boxL;
	}

	// O I é um objeto simples, portanto criado direto com box



	initEventHandling = (function() {
		var _vector = new THREE.Vector3,
			projector = new THREE.Projector(),
			handleMouseDown, handleMouseMove, handleMouseUp;

		handleMouseDown = function( evt ) {
			var ray, intersections;

			_vector.set(
				( evt.clientX / window.innerWidth ) * 2 - 1,
				-( evt.clientY / window.innerHeight ) * 2 + 1,
				1
			);

			projector.unprojectVector( _vector, camera );

			ray = new THREE.Raycaster( camera.position, _vector.sub( camera.position ).normalize() );
			intersections = ray.intersectObjects( blocks, true );

			if ( intersections.length > 0 ) {


				selected_block = intersections[0].object;


				if (selected_block.children.length == 0 && selected_block.parent !== undefined);
				{
					// HACK O ideal seria pegar o name ou typeof da classe para ver se não é cena. Mas né.
					// Aqui, se um objeto tiver mais que 10 filhos, o que não é incomum, vai travar o js.
					if(selected_block.parent.children.length < 10)
					{

						selected_block = selected_block.parent;
					}
				}

				$('body').removeClass('grab');
				$('body').addClass('grabbing');

				_vector.set( 0, 0, 0 );
				selected_block.setAngularFactor( _vector );
				selected_block.setAngularVelocity( _vector );
				selected_block.setLinearFactor( _vector );
				selected_block.setLinearVelocity( _vector );

				mouse_position.copy( intersections[0].point );
				block_offset.subVectors( selected_block.position, mouse_position );

				intersect_plane.position.y = mouse_position.y;
			}
		};

		handleMouseMove = function( evt ) {

			var ray, intersection,
				i, scalar;

			if ( selected_block !== null ) {

				_vector.set(
					( evt.clientX / window.innerWidth ) * 2 - 1,
					-( evt.clientY / window.innerHeight ) * 2 + 1,
					1
				);
				projector.unprojectVector( _vector, camera );

				ray = new THREE.Raycaster( camera.position, _vector.sub( camera.position ).normalize() );
				intersection = ray.intersectObject( intersect_plane );

				
				mouse_position.copy( intersection[0].point );
			}
			else
			{
				var ray, intersections;

				_vector.set(
					( evt.clientX / window.innerWidth ) * 2 - 1,
					-( evt.clientY / window.innerHeight ) * 2 + 1,
					1
				);

				projector.unprojectVector( _vector, camera );

				ray = new THREE.Raycaster( camera.position, _vector.sub( camera.position ).normalize() );
				intersections = ray.intersectObjects( blocks, true );

				if ( intersections.length > 0 ) {
					$('body').addClass('grab');
					$('body').removeClass('grabbing');
				}
				else
				{
					$('body').removeClass('grab');
					$('body').removeClass('grabbing');
				}
			}

		};

		handleMouseUp = function( evt ) {

			if ( selected_block !== null ) {
				_vector.set( 1, 1, 1 );
				selected_block.setAngularFactor( _vector );
				selected_block.setLinearFactor( _vector );

				selected_block = null;
			}

		};

		return function() {
			renderer.domElement.addEventListener( 'mousedown', handleMouseDown );
			renderer.domElement.addEventListener( 'mousemove', handleMouseMove );
			renderer.domElement.addEventListener( 'mouseup', handleMouseUp );
		};
	})();


	var decideDistanceCamera = -60;
	var decideTopCamera = 50 ;

	render = function() 
	{
		requestAnimationFrame( render );

		if ( scene ) 
		{
			camera.position.copy( scene.position ).add( new THREE.Vector3( decideDistanceCamera, decideTopCamera , 40 ) );
			camera.lookAt( scene.position );

			light.target.position.copy( scene.position );
			light.position.addVectors( light.target.position, new THREE.Vector3( 100, 10, -15 ) );
		}

		renderer.render( scene, camera );
	};

	/* Easter eggs 
	-
	-
	-
	*/
	$(document).keypress(function(event)
	{
		var keycode = (event.keyCode ? event.keyCode : event.which);
		console.log(keycode);

		if(keycode == '43')
		{
			console.log("+");	
			decideDistanceCamera += 5;
		}
		if(keycode == '45')
		{
			console.log("-");
			decideDistanceCamera -= 5;
		}
	});