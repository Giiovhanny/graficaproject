const canvas = document.querySelector('canvas'); // It grabs a reference to canvas
const gl = canvas.getContext('webgl'); // Get a context on webgl

// Verify the compatibility of the browser
if (!gl) //Verify if it is null or not
{
    throw new Error('WebGL not supported'); //If the sentence is null it shows an error message
}
// funcion para generar la esfera
function randomColor() {
    return [Math.random(), Math.random(), Math.random()];
}

//index cup
var Cup = drawCup(300);
const vertexData = Cup.vertexData;
let colorData = Cup.colorData;
const indices = [];
//index sphere

var sphere= sphere_GetInfo();
var vertexData2 = sphere.vertexData;
var colorData2=sphere.colorData;
var indices2=sphere.indicesData;
//index figura3
var figure3 = drawFigure3(300);
var vertexData3 = figure3.vertexData;
var colorData3=figure3.colorData;
var indices3=figure3.indicesData;
//index figura4
var figure4 = drawFigure4(300);
var vertexData4 = figure4.vertexData;
var colorData4=figure4.colorData;
var indices4=figure4.indicesData;
//index figura5
var figure5 = drawFigure5(300);
var vertexData5 = figure5.vertexData;
var colorData5=figure5.colorData;
var indices5=figure5.indicesData;
//index figura6
var figure6 = drawFigure6(300);
var vertexData6 = figure6.vertexData;
var colorData6=figure6.colorData;
var indices6=figure6.indicesData;
//index figura7
var figure7 = drawFigure7(300);
var vertexData7 = figure7.vertexData;
var colorData7=figure7.colorData;
var indices7=figure7.indicesData;
//index figura8
var figure8 = drawFigure8(300);
var vertexData8 = figure8.vertexData;
var colorData8=figure8.colorData;
var indices8=figure8.indicesData;
//index figura9
var figure9 = drawFigure9(300);
var vertexData9 = figure9.vertexData;
var colorData9=figure9.colorData;
var indices9=figure9.indicesData;

//create buffers fig 1

const positionBuffer = gl.createBuffer(); //Create a data structure which will store vertex positions
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); //// Bind appropriate array buffer to it
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW); //Pass the vertex data to the buffer

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

const indexbuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

//create buffers fig 2
const positionBuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData2), gl.STATIC_DRAW); //Pass the vertex data to the buffer
const colorBuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData2), gl.STATIC_DRAW);

const indexbuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer2);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices2), gl.STATIC_DRAW);

//create buffers fig 3
const positionBuffer3 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer3);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData3), gl.STATIC_DRAW);
const colorBuffer3 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer3);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData3), gl.STATIC_DRAW);

const indexbuffer3 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer3);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices3), gl.STATIC_DRAW);

//create buffers fig 4

const positionBuffer4 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer4);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData4), gl.STATIC_DRAW);
const colorBuffer4 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer4);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData4), gl.STATIC_DRAW);

const indexbuffer4 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer4);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices4), gl.STATIC_DRAW);
//create buffers fig 5

const positionBuffer5 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer5);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData5), gl.STATIC_DRAW);
const colorBuffer5 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer5);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData5), gl.STATIC_DRAW);

const indexbuffer5 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer5);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices5), gl.STATIC_DRAW);
//create buffers fig 6

const positionBuffer6 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer6);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData6), gl.STATIC_DRAW);

const colorBuffer6 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer6);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData6), gl.STATIC_DRAW);

const indexbuffer6 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer6);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices6), gl.STATIC_DRAW);

//create buffers fig 7
const positionBuffer7 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer7);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData7), gl.STATIC_DRAW);

const colorBuffer7 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer7);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData7), gl.STATIC_DRAW);

const indexbuffer7 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer7);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices7), gl.STATIC_DRAW);
//create buffers fig 8

const positionBuffer8 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer8);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData8), gl.STATIC_DRAW);

const colorBuffer8 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer8);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData8), gl.STATIC_DRAW);

const indexbuffer8 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer8);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices8), gl.STATIC_DRAW);

//create buffers fig 9
const positionBuffer9 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer9);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData9), gl.STATIC_DRAW);

const colorBuffer9 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer9);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData9), gl.STATIC_DRAW);

const indexbuffer9 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer9);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices9), gl.STATIC_DRAW);


//Create vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;
attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

uniform  mat4 matrix1;
void main() {
		vColor = color;
    gl_Position = matrix1 * vec4(position, 1);

}
`); //return position
gl.compileShader(vertexShader);


//Create Fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //Take the input position and transform it into a color
gl.shaderSource(fragmentShader, `
	precision mediump float;
	varying vec3 vColor;
	void main() {
	    gl_FragColor = vec4(vColor, 1);
	}
	`);// Stablish the color of the pixel
gl.compileShader(fragmentShader);
//console.log(gl.getShaderInfoLog(fragmentShader));
const program = gl.createProgram();// Create a program
// Connect the program with the shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program); //It ties everything together and verify if vertex and shaders are compatible with each other



const positionLocation = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation); // Enable the attribute
const colorLocation = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation);

const positionLocation2 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation2); // Enable the attribute
const colorLocation2 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation2);

const positionLocation3 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation3); // Enable the attribute
const colorLocation3 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation3);

const positionLocation4 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation4); // Enable the attribute
const colorLocation4 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation4);

const positionLocation5 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation5); // Enable the attribute
const colorLocation5 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation5);

const positionLocation6 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation6); // Enable the attribute
const colorLocation6 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation6);

const positionLocation7 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation7); // Enable the attribute
const colorLocation7 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation7);

const positionLocation8 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation8); // Enable the attribute
const colorLocation8 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation8);

const positionLocation9 = gl.getAttribLocation(program, `position`);// Get a reference like an index
gl.enableVertexAttribArray(positionLocation9); // Enable the attribute
const colorLocation9 = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation9);


const uniformLocations = {
    matrix: gl.getUniformLocation(program, `matrix1`),
};





/*================= Key events ======================*/


all = new Object();
var allow = false;
var fig =0;
var operation =0;
var todos=false;

var keyPress = function(e){
  all = getAll(e,fig,todos);
  fig = all.fig;
  allow=all.Val;
  operation=all.Op;
  todos=all.todos;
};
//window.addEventListener("keydown", keyPress, true);
//canvas.addEventListener("keyup", keyPress, false);
document.addEventListener("keypress", keyPress, false);



var m4CG = {
  translation: function (tx, ty, tz) {
      return [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          tx, ty, tz, 1
      ];
  },
  scaling: function (sx, sy, sz) {
      return [
          sx, 0, 0, 0,
          0, sy, 0, 0,
          0, 0, sz, 0,
          0, 0, 0, 1,
      ];
  },
	rotationX:function(angle){
		return[
			1, 0, 0, 0,
			0, Math.cos(angle), -Math.sin(angle), 0,
			0, Math.sin(angle), Math.cos(angle), 0,
			0, 0, 0, 1,
		];
	},
	rotationY:function(angle){
		return[
			Math.cos(angle), 0, Math.sin(angle), 0,
			0, 1, 0, 0,
			-Math.sin(angle), 0, Math.cos(angle), 0,
			0, 0, 0, 1,
		];
	},
	rotationZ:function(angle){
		return[
			Math.cos(angle), -Math.sin(angle), 0, 0,
			Math.sin(angle), Math.cos(angle), 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1,
		];
	},
};



//const matrix2=mat4.create();

const modelMatrix = mat4.create();
const viewMatrix = mat4.create();
const projectionMatrix = mat4.create();
mat4.perspective(projectionMatrix, 75 * Math.PI / 180,
    800 / 560,//canvas.width/ canvas.lenght
    0.0001, //near
    1100 //far
);
const mvMatrix = mat4.create();
const mvpMatrix = mat4.create();
var translationMatrix = m4CG.translation(-2.5, 3, -4);
var translationViewMatrix = m4CG.translation(-3, 3, -1);
var scaleMatrix = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix, modelMatrix, translationMatrix);
mat4.multiply(viewMatrix, viewMatrix, translationViewMatrix);
mat4.invert(viewMatrix, viewMatrix);


//////////////////Sphere/////////////////////////////

const modelMatrix2 = mat4.create();
const viewMatrix2 = mat4.create();
const projectionMatrix2 = mat4.create();
mat4.perspective(projectionMatrix2,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix2 = mat4.create();
const mvpMatrix2 = mat4.create();
var translationMatrix2=m4CG.translation(-4.5,3,-4);
var translationViewMatrix2 = m4CG.translation(-3,3,2 );
var scaleMatrix2 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix2, modelMatrix2, translationMatrix2);
mat4.multiply(viewMatrix2, viewMatrix2, translationViewMatrix2);
mat4.invert(viewMatrix2, viewMatrix2);

//////////////////figure 3/////////////////////////////


const modelMatrix3 = mat4.create();
const viewMatrix3 = mat4.create();
const projectionMatrix3 = mat4.create();
mat4.perspective(projectionMatrix3,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix3 = mat4.create();
const mvpMatrix3 = mat4.create();
var translationMatrix3=m4CG.translation(-4.5,3,-4);
var translationViewMatrix3 = m4CG.translation(-3,3,2 );
var scaleMatrix3 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix3, modelMatrix3, translationMatrix3);
mat4.multiply(viewMatrix3, viewMatrix3, translationViewMatrix3);
mat4.invert(viewMatrix3, viewMatrix3);

//////////////////Figure4/////////////////////////////


const modelMatrix4 = mat4.create();
const viewMatrix4 = mat4.create();
const projectionMatrix4 = mat4.create();
mat4.perspective(projectionMatrix4,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix4 = mat4.create();
const mvpMatrix4 = mat4.create();
var translationMatrix4=m4CG.translation(-4.5,3,-4);
var translationViewMatrix4 = m4CG.translation(-3,3,2 );
var scaleMatrix4 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix4, modelMatrix4, translationMatrix4);
mat4.multiply(viewMatrix4, viewMatrix4, translationViewMatrix4);
mat4.invert(viewMatrix4, viewMatrix4);

//////////////////figure5/////////////////////////////



const modelMatrix5 = mat4.create();
const viewMatrix5 = mat4.create();
const projectionMatrix5 = mat4.create();
mat4.perspective(projectionMatrix5,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix5 = mat4.create();
const mvpMatrix5 = mat4.create();
var translationMatrix5=m4CG.translation(-4.5,3,-4);
var translationViewMatrix5 = m4CG.translation(-3,3,2 );
var scaleMatrix5 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix5, modelMatrix5, translationMatrix5);
mat4.multiply(viewMatrix5, viewMatrix5, translationViewMatrix5);
mat4.invert(viewMatrix5, viewMatrix5);
//////////////////figure6////////////////////////////



const modelMatrix6 = mat4.create();
const viewMatrix6 = mat4.create();
const projectionMatrix6 = mat4.create();
mat4.perspective(projectionMatrix6,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix6 = mat4.create();
const mvpMatrix6 = mat4.create();
var translationMatrix6=m4CG.translation(-4.5,3,-4);
var translationViewMatrix6 = m4CG.translation(-3,3,2 );
var scaleMatrix6 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix6, modelMatrix6, translationMatrix6);
mat4.multiply(viewMatrix6, viewMatrix6, translationViewMatrix6);
mat4.invert(viewMatrix6, viewMatrix6);

//////////////////figure7/////////////////////////////


const modelMatrix7 = mat4.create();
const viewMatrix7 = mat4.create();
const projectionMatrix7 = mat4.create();
mat4.perspective(projectionMatrix7,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix7 = mat4.create();
const mvpMatrix7 = mat4.create();
var translationMatrix7=m4CG.translation(-4.5,3,-4);
var translationViewMatrix7 = m4CG.translation(-3,3,2 );
var scaleMatrix7 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix7, modelMatrix7, translationMatrix7);
mat4.multiply(viewMatrix7, viewMatrix7, translationViewMatrix7);
mat4.invert(viewMatrix7, viewMatrix7);

/////////////figure8/////////////////////////////


const modelMatrix8 = mat4.create();
const viewMatrix8 = mat4.create();
const projectionMatrix8 = mat4.create();
mat4.perspective(projectionMatrix7,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);

const mvMatrix8 = mat4.create();
const mvpMatrix8 = mat4.create();
var translationMatrix8=m4CG.translation(-4.5,3,-4);
var translationViewMatrix8 = m4CG.translation(-3,3,2 );
var scaleMatrix8 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix8, modelMatrix8, translationMatrix8);
mat4.multiply(viewMatrix8, viewMatrix8, translationViewMatrix8);
mat4.invert(viewMatrix8, viewMatrix8);


////////////figure9/////////////////////////
const modelMatrix9 = mat4.create();
const viewMatrix9 = mat4.create();
const projectionMatrix9 = mat4.create();
mat4.perspective(projectionMatrix9,75*Math.PI/180,
                                                                    800/560,//canvas.width/ canvas.lenght
                                                                    0.0001, //near
                                                                    1100 //far
);
const mvMatrix9 = mat4.create();
const mvpMatrix9 = mat4.create();
var translationMatrix9=m4CG.translation(-4.5,3,-4);
var translationViewMatrix9 = m4CG.translation(-3,3,2 );
var scaleMatrix9 = m4CG.scaling(0.5, 0.5, 0.5);
mat4.multiply(modelMatrix9, modelMatrix9, translationMatrix9);
mat4.multiply(viewMatrix9, viewMatrix9, translationViewMatrix9);
mat4.invert(viewMatrix9, viewMatrix9);


var n=0;
var n2=0;
var THETA = 0,
PHI = 0;
var time_old = 0;
appro=false;
angle=0;

 var animate = function (time) {
        var dt = time-time_old;
        time_old = time;
        if (todos){
          if( allow === true  && operation == 105){
            var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
            mat4.multiply(modelMatrix,translationMatrix,modelMatrix);
            mat4.multiply(modelMatrix2,translationMatrix, modelMatrix2);
            mat4.multiply(modelMatrix3,translationMatrix, modelMatrix3);
            mat4.multiply(modelMatrix4,translationMatrix, modelMatrix4);
            mat4.multiply(modelMatrix5,translationMatrix, modelMatrix5);
            mat4.multiply(modelMatrix6,translationMatrix, modelMatrix6);
            mat4.multiply(modelMatrix7,translationMatrix, modelMatrix7);
            mat4.multiply(modelMatrix8,translationMatrix, modelMatrix8);
            mat4.multiply(modelMatrix9,translationMatrix, modelMatrix9);
            allow=false;
          };
          if( allow === true  && operation == 104){
            var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
            mat4.multiply(modelMatrix, modelMatrix,scaleMatrix);
            mat4.multiply(modelMatrix2, modelMatrix2,scaleMatrix);
            mat4.multiply(modelMatrix3, modelMatrix3,scaleMatrix);
            mat4.multiply(modelMatrix4, modelMatrix4,scaleMatrix);
            mat4.multiply(modelMatrix5, modelMatrix5,scaleMatrix);
            mat4.multiply(modelMatrix6, modelMatrix6,scaleMatrix);
            mat4.multiply(modelMatrix7, modelMatrix7,scaleMatrix);
            mat4.multiply(modelMatrix8, modelMatrix8,scaleMatrix);
            mat4.multiply(modelMatrix9, modelMatrix9,scaleMatrix);
            allow=false;
          };
          if( allow === true  && operation == 101){
            var rotationMatrix=m4CG.rotationX(all.angle);
            mat4.multiply(modelMatrix,modelMatrix,rotationMatrix);
            mat4.multiply(modelMatrix2,modelMatrix2,rotationMatrix);
            mat4.multiply(modelMatrix3,modelMatrix3,rotationMatrix);
            mat4.multiply(modelMatrix4,modelMatrix4,rotationMatrix);
            mat4.multiply(modelMatrix5,modelMatrix5,rotationMatrix);
            mat4.multiply(modelMatrix6,modelMatrix6,rotationMatrix);
            mat4.multiply(modelMatrix7,modelMatrix7,rotationMatrix);
            mat4.multiply(modelMatrix8,modelMatrix8,rotationMatrix);
            mat4.multiply(modelMatrix9,modelMatrix9,rotationMatrix);
            allow=false;
          };
          if( allow === true  && operation ==  102){
            var rotationMatrix=m4CG.rotationY(all.angle);
            mat4.multiply(modelMatrix,modelMatrix, rotationMatrix );
            mat4.multiply(modelMatrix2,modelMatrix2, rotationMatrix );
            mat4.multiply(modelMatrix3,modelMatrix3, rotationMatrix );
            mat4.multiply(modelMatrix4,modelMatrix4, rotationMatrix );
            mat4.multiply(modelMatrix5,modelMatrix5, rotationMatrix );
            mat4.multiply(modelMatrix6,modelMatrix6, rotationMatrix );
            mat4.multiply(modelMatrix7,modelMatrix7, rotationMatrix );
            mat4.multiply(modelMatrix8,modelMatrix8, rotationMatrix );
            mat4.multiply(modelMatrix9,modelMatrix9, rotationMatrix );
            allow=false;
          };

          if( allow === true  &&  operation ==  103){
            var rotationMatrix=m4CG.rotationZ(all.angle);
            mat4.multiply(modelMatrix, modelMatrix, rotationMatrix);
            mat4.multiply(modelMatrix2, modelMatrix2, rotationMatrix);
            mat4.multiply(modelMatrix3, modelMatrix3, rotationMatrix);
            mat4.multiply(modelMatrix4, modelMatrix4, rotationMatrix);
            mat4.multiply(modelMatrix5, modelMatrix5, rotationMatrix);
            mat4.multiply(modelMatrix6, modelMatrix6, rotationMatrix);
            mat4.multiply(modelMatrix7, modelMatrix7, rotationMatrix);
            mat4.multiply(modelMatrix8, modelMatrix8, rotationMatrix);
            mat4.multiply(modelMatrix9, modelMatrix9, rotationMatrix);
            allow=false;
          };
        }


        if( allow === true  && fig == 1 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix,modelMatrix,translationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 1 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix, modelMatrix,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 1 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix,modelMatrix,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 1 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix,modelMatrix, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 1 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix, modelMatrix, rotationMatrix);
          allow=false;
        };



        if( allow === true  && fig == 2 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix2,translationMatrix, modelMatrix2);
          allow=false;
        };
        if( allow === true  && fig == 2 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix2, modelMatrix2,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 2 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix2,modelMatrix2,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 2 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix2,modelMatrix2, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 2 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix2, modelMatrix2, rotationMatrix);
          allow=false;
        };

        if( allow === true  && fig == 3 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix3,translationMatrix, modelMatrix3);
          allow=false;
        };
        if( allow === true  && fig == 3 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix3, modelMatrix3,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 3 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix3,modelMatrix3,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 3 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix3,modelMatrix3, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 3 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix3, modelMatrix3, rotationMatrix);
          allow=false;
        };



        if( allow === true  && fig == 4 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix4,translationMatrix, modelMatrix4);
          allow=false;
        };
        if( allow === true  && fig == 4 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix4, modelMatrix4,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 4 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix4,modelMatrix4,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 4 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix4,modelMatrix4, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 4 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix4, modelMatrix4, rotationMatrix);
          allow=false;
        };


        if( allow === true  && fig == 5 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix4,translationMatrix, modelMatrix4);
          allow=false;
        };
        if( allow === true  && fig == 5 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix5, modelMatrix5,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 5 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix5,modelMatrix5,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 5 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix5,modelMatrix5, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 5 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix5, modelMatrix5, rotationMatrix);
          allow=false;
        };



        if( allow === true  && fig == 6 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix6,translationMatrix, modelMatrix6);
          allow=false;
        };
        if( allow === true  && fig == 6 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix6, modelMatrix6,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 6 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix6,modelMatrix6,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 6 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix6,modelMatrix6, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 6 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix6, modelMatrix6, rotationMatrix);
          allow=false;
        };



        if( allow === true  && fig == 7 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix7,translationMatrix, modelMatrix7);
          allow=false;
        };
        if( allow === true  && fig == 7 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix7, modelMatrix7,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 7 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix7,modelMatrix7,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 7 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix7,modelMatrix7, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 7 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix77, modelMatrix7, rotationMatrix);
          allow=false;
        };


        if( allow === true  && fig == 8 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix8,translationMatrix, modelMatrix8);
          allow=false;
        };
        if( allow === true  && fig == 8 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix8, modelMatrix8,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 8 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix8,modelMatrix8,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 8 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix8,modelMatrix8, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 8 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix8, modelMatrix8, rotationMatrix);
          allow=false;
        };


        if( allow === true  && fig == 9 && operation == 105){
          var translationMatrix = m4CG.translation(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix9,translationMatrix, modelMatrix9);
          allow=false;
        };
        if( allow === true  && fig == 9 && operation == 104){
          var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
          mat4.multiply(modelMatrix9, modelMatrix9,scaleMatrix);
          allow=false;
        };
        if( allow === true  && fig == 9 && operation == 101){
          var rotationMatrix=m4CG.rotationX(all.angle);
          mat4.multiply(modelMatrix9,modelMatrix9,rotationMatrix);
          allow=false;
        };
        if( allow === true  && fig == 9 && operation ==  102){
          var rotationMatrix=m4CG.rotationY(all.angle);
          mat4.multiply(modelMatrix9,modelMatrix9, rotationMatrix );
          allow=false;
        };

        if( allow === true  && fig == 9 && operation ==  103){
          var rotationMatrix=m4CG.rotationZ(all.angle);
          mat4.multiply(modelMatrix9, modelMatrix9, rotationMatrix);
          allow=false;
        };






        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.5, 0.5, 0.5, 0.9);
        gl.clearDepth(1.0);
        gl.viewport(0.0, 0.0, canvas.width, canvas.height);
        gl.useProgram(program); //Tell to GPU which program we will use
        gl.enable(gl.DEPTH_TEST);
      //////////////////////////////////////////////

        //



        mat4.multiply(mvMatrix, viewMatrix, modelMatrix);
        mat4.multiply(mvpMatrix, projectionMatrix, mvMatrix);
        gl.uniformMatrix4fv(uniformLocations.matrix, false, mvpMatrix)
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
       gl.drawArrays(gl.TRIANGLES,0,vertexData.length/3);

      //mat4.rotateY(modelMatrix2, modelMatrix2, Math.PI/2 / 70);
      mat4.multiply(mvMatrix2,viewMatrix2, modelMatrix2);
      mat4.multiply(mvpMatrix2,projectionMatrix2,mvMatrix2);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix2)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
      gl.vertexAttribPointer(positionLocation2, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer2);
      gl.vertexAttribPointer(colorLocation2, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices2.length,gl.UNSIGNED_SHORT,0);

      mat4.multiply(mvMatrix3,viewMatrix3, modelMatrix3);
      mat4.multiply(mvpMatrix3,projectionMatrix3,mvMatrix3);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix3)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer3);
      gl.vertexAttribPointer(positionLocation3, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer3);
      gl.vertexAttribPointer(colorLocation3, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices3.length,gl.UNSIGNED_SHORT,0);


      mat4.multiply(mvMatrix4,viewMatrix4, modelMatrix4);
      mat4.multiply(mvpMatrix4,projectionMatrix4,mvMatrix4);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix4)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer4);
      gl.vertexAttribPointer(positionLocation4, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer4);
      gl.vertexAttribPointer(colorLocation4, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices4.length,gl.UNSIGNED_SHORT,0);



      mat4.multiply(mvMatrix5,viewMatrix5, modelMatrix5);
      mat4.multiply(mvpMatrix5,projectionMatrix5,mvMatrix5);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix5)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer5);
      gl.vertexAttribPointer(positionLocation5, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer5);
      gl.vertexAttribPointer(colorLocation5, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices5.length,gl.UNSIGNED_SHORT,0);



      mat4.multiply(mvMatrix6,viewMatrix6, modelMatrix6);
      mat4.multiply(mvpMatrix6,projectionMatrix6,mvMatrix6);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix6)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer6);
      gl.vertexAttribPointer(positionLocation6, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer6);
      gl.vertexAttribPointer(colorLocation6, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices6.length,gl.UNSIGNED_SHORT,0);



      mat4.multiply(mvMatrix7,viewMatrix7, modelMatrix7);
      mat4.multiply(mvpMatrix7,projectionMatrix7,mvMatrix7);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix7)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer7);
      gl.vertexAttribPointer(positionLocation7, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer7);
      gl.vertexAttribPointer(colorLocation7, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices7.length,gl.UNSIGNED_SHORT,0);



      mat4.multiply(mvMatrix8,viewMatrix8, modelMatrix8);
      mat4.multiply(mvpMatrix8,projectionMatrix8,mvMatrix8);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix8)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer8);
      gl.vertexAttribPointer(positionLocation8, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer8);
      gl.vertexAttribPointer(colorLocation8, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices8.length,gl.UNSIGNED_SHORT,0);



      mat4.multiply(mvMatrix9,viewMatrix9, modelMatrix9);
      mat4.multiply(mvpMatrix9,projectionMatrix9,mvMatrix9);
      gl.uniformMatrix4fv(uniformLocations.matrix,false,mvpMatrix9)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer9);
      gl.vertexAttribPointer(positionLocation9, 3, gl.FLOAT, false, 0, 0);// Point an attribute to the currently bound Vertex Buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer9);
      gl.vertexAttribPointer(colorLocation9, 3, gl.FLOAT, false, 0, 0);
      gl.drawElements(gl.TRIANGLES,indices9.length,gl.UNSIGNED_SHORT,0);



      window.requestAnimationFrame(animate);

}

animate(0);
//render(0);
