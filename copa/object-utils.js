
function sphere_GetInfo() {
	//create an array of positions for the cube.

 /////////////
    let latitudeSlices = 20;
    let longitudeSlices = 20;
    let radius = 1.1;

    let vertexData = [];
    let normalData = [];
    let textureCoordData = [];
    let indexData = [];
	let dTheta=Math.PI / latitudeSlices;
	let dPhi=2 * Math.PI / longitudeSlices

    // Calculate sphere vertex positions, normals, and texture coordinates.
    for (let latNumber = 0; latNumber <= latitudeSlices; ++latNumber) {
      let theta = latNumber * dTheta;
      let sinTheta = Math.sin(theta);
      let cosTheta = Math.cos(theta);

      for (let longNumber = 0; longNumber <= longitudeSlices; ++longNumber) {
        let phi = longNumber * dPhi;
        let sinPhi = Math.sin(phi);
        let cosPhi = Math.cos(phi);

        let x = cosPhi * cosTheta;
        let y = cosPhi*sinTheta;
        let z = sinPhi;

        /*let u = 1 - (longNumber / longitudeSlices);
        let v = 1 - (latNumber / latitudeSlices);*/

        vertexData.push(radius * x);
        vertexData.push(radius * y);
        vertexData.push(radius * z);

        normalData.push(x);
        normalData.push(y);
        normalData.push(z);

        /*textureCoordData.push(u);
        textureCoordData.push(v);*/
      }
    }

    // Calculate sphere indices.
    for (let latNumber = 0; latNumber < latitudeSlices; ++latNumber) {
      for (let longNumber = 0; longNumber < longitudeSlices; ++longNumber) {
        let first = (latNumber * (longitudeSlices + 1)) + longNumber;
        let second = first + longitudeSlices + 1;

        indexData.push(first);
        indexData.push(second);
        indexData.push(first + 1);

        indexData.push(second);
        indexData.push(second + 1);
        indexData.push(first + 1);
      }
    }

	let colorData = [];
    for (let vertex = 0; vertex < indexData.length; vertex++) {
        colorData.push(...[1.0,  0.0,  0.0,  0.8]);

}
    vertexData = new Float32Array(vertexData);
    normalData = new Float32Array(normalData);
    /*textureCoordData = new Float32Array(textureCoordData);*/
    indexData = new Uint16Array(indexData);


 ////////////////

  return {
    vertexData: vertexData,
    colorData: colorData,
    indicesData: indexData,
  };
}


//Figure 3 JD -----------------------------------------------------
function drawFigure3(nSlices){

	const vertexData = [
				0,1,0,
        0.5,1,0,
        0,0.6,0,
        0,0.6,0,
        0.5,1,0,
        0.5,0.6,0,
        0,0.6,0,
        0.1,0.6,0,
        0,0.4,0,
        0,0.4,0,
        0.1,0.6,0,
        0.1,0.4,0,
        0,0.4,0,
        0.1,0.4,0,
        0,0,0,
        0,0,0,
        0.1,0.4,0,
        0.1,0,0,
        0.1,0.05,0,
        0.5,0.05,0,
        0.1,0,0,
        0.1,0,0,
        0.5,0.05,0,
        0.5,0,0,
        0.1,0.1,0,
        0.5,0.05,0,
        0.1,0.05,0,
	];

	let dTheta = (2*(Math.PI))/nSlices;

	var newPosition = vertexData.slice();

	for(let i=1;i<nSlices;i++){
		let theta = dTheta*i;
		let thetaNext = (i+1)*dTheta;
		for(let j=0; j< vertexData.length;j++){
			let xNext = vertexData[j+0]*Math.cos(thetaNext)+Math.sin(thetaNext)*vertexData[j+2];
			let yNext = vertexData[j+1];
			let zNext = (vertexData[j+0]*(Math.sin(thetaNext)*(-1)) + (vertexData[j+2]*Math.cos(thetaNext)));

			newPosition.push(xNext, yNext, zNext);
		}
	}

	let colorData = [];

	for(let face = 0; face<nSlices; face++){
		let faceColor = [1.0,0.0,0.0,0.0];
    for(let vertex = 0; vertex< vertexData.length; vertex++){
			colorData.push(...faceColor);
		}
	}

	newPosition =  new Float32Array(newPosition);
	var figure3 = new Object();
	figure3.vertexData =  newPosition;
	figure3.colorData =  colorData;

	return figure3;
}

//Figure 4 ----------------------------------------------------------------------------
function drawFigure4(nSlides){

	const vertexData = [
		0,1,0,
    0.6,1,0,
    0,0.8,0,
    0,0.8,0,
    0.6,1,0,
    0.6,0.8,0,
		0.6,0.8,0,
		0.6,1,0,
		1,0.8,0,
		0,0.8,0,
		0,0.7,0,
		0,0.7,0,
		1,0.8,0,
		1,0.7,0,
		0.6,0.5,0,
		0.6,0.7,0,
		0.6,0.7,0,
		0.6,0.5,0,
		0,0.5,0,
		0,0.5,0,
		0.6,0.7,0,
		0,0.7,0,
		0,0.5,0,
		0,0.2,0,
		0.6,0.5,0,
		0.6,0.5,0,
		0,0.2,0,
		0.6,0.2,0,
		0.6,0.2,0,
		0,0.2,0,
		0,0.1,0,
		0,0.1,0,
		0.6,0.2,0,
		0.6,0.1,0,
		0.6,0.1,0,
		0.6,0.2,0,
		1,0.1,0,
		1,0.1,0,
		0,0.1,0,
		0,0,0,
		0,0,0,
		1,0.1,0,
		1,0,0
	];

	let angle = (2*(Math.PI))/nSlides;

	var newPosition = vertexData.slice();
	let colorData=[];

	for(let i=1;i<nSlides;i++){
		angle = angle*i;

		var c = Math.cos(angle);
		var s = Math.sin(angle);

		for(let j=0; j< vertexData.length;j=j+3){
			let xNext = (vertexData[j+0]*c)+(vertexData[j+2]*s);
			let yNext = vertexData[j+1];
			let zNext = (vertexData[j+0]*(s*-1)) + (vertexData[j+2]*c);

			newPosition.push(xNext, yNext, zNext);
		}

		for(let face = 0; face<nSlides; face++){
			let faceColor = randomColor();
	    for(let vertex = 0; vertex< vertexData.length; vertex++){
				colorData.push(...faceColor);
			}
		}
	}

	newPosition =  new Float32Array(newPosition);

	var figure4 = new Object();
	figure4.vertexData =  newPosition;
	figure4.colorData =  colorData;

	return cup;
}

//Figure 5 ----------------------------------------------------------
function drawFigure5(nSlides){

	const vertexData = [
		0,1,0,
		0.5,1,0,
		0,0.4,0,
		0,0.4,0,
		0.5,1,0,
		0.5,0.4,0,
		0.5,0.4,0,
		0,0.4,0,
		0,0.2,0,
		0.5,0.4,0,
		0,0.2,0,
		0.5,0.2,0,
		0.5,0.4,0,
		0.5,0.2,0,
		1,0.2,0,
		0,0.2,0,
		1,0.2,0,
		0,0,0,
		0,0,0,
		1,0.2,0,
		1,0,0
	];

	let angle = (2*(Math.PI))/nSlides;

	var newPosition = vertexData.slice();
	let colorData=[];

	for(let i=1;i<nSlides;i++){
		angle = angle*i;

		var c = Math.cos(angle);
		var s = Math.sin(angle);

		for(let j=0; j< vertexData.length;j=j+3){
			let xNext = (vertexData[j+0]*c)+(vertexData[j+2]*s);
			let yNext = vertexData[j+1];
			let zNext = (vertexData[j+0]*(s*-1)) + (vertexData[j+2]*c);

			newPosition.push(xNext, yNext, zNext);
		}

		for(let face = 0; face<nSlides; face++){
			let faceColor = randomColor();
	    for(let vertex = 0; vertex< vertexData.length; vertex++){
				colorData.push(...faceColor);
			}
		}
	}

	newPosition =  new Float32Array(newPosition);

	var figure5 = new Object();
	figure5.vertexData =  newPosition;
	figure5.colorData =  colorData;

	return cup;
}

//Figure 6 ----------------------------------------------------------
function drawFigure6(nSlides){

	const vertexData = [
		0.5,0,0,
		0.5,0.5,0,
		1,0,0,
		1,0,0,
		0.5,0.5,0,
		1,0.5,0
	];

	let angle = (2*(Math.PI))/nSlides;

	var newPosition = vertexData.slice();
	let colorData=[];

	for(let i=1;i<nSlides;i++){
		angle = angle*i;

		var c = Math.cos(angle);
		var s = Math.sin(angle);

		for(let j=0; j< vertexData.length;j=j+3){
			let xNext = (vertexData[j+0]*c)+(vertexData[j+2]*s);
			let yNext = vertexData[j+1];
			let zNext = (vertexData[j+0]*(s*-1)) + (vertexData[j+2]*c);

			newPosition.push(xNext, yNext, zNext);
		}

		for(let face = 0; face<nSlides; face++){
			let faceColor = randomColor();
	    for(let vertex = 0; vertex< vertexData.length; vertex++){
				colorData.push(...faceColor);
			}
		}
	}

	newPosition =  new Float32Array(newPosition);

	var figure6 = new Object();
	figure6.vertexData =  newPosition;
	figure6.colorData =  colorData;

	return cup;
}

//Figure 7 ---------------------------------------------------
function drawFigure7(){
  const vertexData = [
    // frente
    0.5,-0.5,0.5,
    -0.5,-0.5,0.5,
    0,0.5,0,
    // detras
    0,0.5,0,
    -0.5,-0.5,-0.5,
    0.5,-0.5,-0.5,
    // abajo
    -0.5,-0.5,0.5,
    -0.5,-0.5,-0.5,
    0.5,-0.5,0.5,
    0.5,-0.5,0.5,
    -0.5,-0.5,-0.5,
    0.5,-0.5,-0.5,

    // left
    0,0.5,0,
    -0.5,-0.5,0.5,
    -0.5,-0.5,-0.5,

    // rigth
    0,0.5,0,
    0.5,-0.5,0.5,
    0.5,-0.5,-0.5,
];
//vertexData = new Float32Array(vertexData);
var figure7 = new Object();
figure7.vertexData =  vertexData
return figure7;
}

//Figure 8 ------------------------------------------
function drawFigure8(){
  const vertexData = [
      //Frente
	  0.5,-0.5,0.5,
      -0.5,-0.5,0.5,
      0,0.5,0,
	  //Derecha
	  0,0.5,0,
	  0.5,-0.5,0.5,
	  0,-0.5,-0.5,
	  //Izquierda
	  0,0.5,0,
	  -0.5,-0.5,0.5,
	  0,-0.5,-0.5,
	  //Abajo
	  0.5,-0.5,0.5,
	  -0.5,-0.5,0.5,
	  0,-0.5,-0.5,
  ];
  //vertexData = new Float32Array(vertexData);
  var figure8 = new Object();
  figure8.vertexData =  vertexData
  return figure8;
}

//Figure 9 -----------------------------------------------
function drawFigure9(nSlides){

  const vertexData = [
  0,1,0,
  1,1,0,
  1,0,0,
  1,0,0,
  0,1,0,
  0,0,0,
  ];

let angle = (2*(Math.PI))/nSlides;

var positionDataNew = vertexData.slice();
let colorData=[];

for(let i=1; i<nSlides; i++){
   angle = angle*i;

   var c = Math.cos(angle);
   var s = Math.sin(angle);

   for (let j=0; j<vertexData.length; j=j+3){
     let xNext = (vertexData[j+0]*c)+(vertexData[j+2]*s);
     let yNext = vertexData[j+1];
     let zNext = (vertexData[j+0]*(s*-1)) + (vertexData[j+2]*c);

     positionDataNew.push(xNext,yNext,zNext);
   }

   for(let face = 0; face<nSlides; face++){
     let faceColor = randomColor();
     for(let vertex = 0; vertex< vertexData.length; vertex++){
       colorData.push(...faceColor);
     }
   }
 }

 positionDataNew = new Float32Array(positionDataNew);

 var figure9 = new Object();
 figure9.vertexData = positionDataNew;
 figure9.colorData = colorData;

 return figure9;

}

