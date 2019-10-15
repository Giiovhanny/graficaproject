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
var Cup = drawCup(300);
const vertexData = Cup.vertexData;
let colorData = Cup.colorData;
const indices = [];


var sphere= sphere_GetInfo();
var vertexData2 = sphere.vertexData;
var colorData2=sphere.colorData;
var indices2=sphere.indicesData;



/*
create buffers sphere
*/


const positionBuffer = gl.createBuffer(); //Create a data structure which will store vertex positions
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); //// Bind appropriate array buffer to it
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW); //Pass the vertex data to the buffer

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

const indexbuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);



const positionBuffer2 = gl.createBuffer(); //Create a data structure which will store vertex positions
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2); //// Bind appropriate array buffer to it
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData2), gl.STATIC_DRAW); //Pass the vertex data to the buffer

const colorBuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData2), gl.STATIC_DRAW);

const indexbuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer2);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices2), gl.STATIC_DRAW);



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





const uniformLocations = {
    matrix: gl.getUniformLocation(program, `matrix1`),
};





/*================= Mouse events ======================*/


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

//const finalMatrix = mat4.create();

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



///////////////////////////////////////////

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
            allow=false;
          };
          if( allow === true  && operation == 104){
            var scaleMatrix = m4CG.scaling(all.Xx, all.Yy, all.Zz);
            mat4.multiply(modelMatrix, modelMatrix,scaleMatrix);
            mat4.multiply(modelMatrix2, modelMatrix2,scaleMatrix);
            allow=false;
          };
          if( allow === true  && operation == 101){
            var rotationMatrix=m4CG.rotationX(all.angle);
            mat4.multiply(modelMatrix,modelMatrix,rotationMatrix);
            mat4.multiply(modelMatrix2,modelMatrix2,rotationMatrix);
            allow=false;
          };
          if( allow === true  && operation ==  102){
            var rotationMatrix=m4CG.rotationY(all.angle);
            mat4.multiply(modelMatrix,modelMatrix, rotationMatrix );
            mat4.multiply(modelMatrix2,modelMatrix2, rotationMatrix );
            allow=false;
          };

          if( allow === true  &&  operation ==  103){
            var rotationMatrix=m4CG.rotationZ(all.angle);
            mat4.multiply(modelMatrix, modelMatrix, rotationMatrix);
            mat4.multiply(modelMatrix2, modelMatrix2, rotationMatrix);
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


      window.requestAnimationFrame(animate);

}

animate(0);
//render(0);
