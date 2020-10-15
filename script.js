var string;
var gl;
function scripts(){
	string="This Document is about WebGL. \
	These tutorials are intended for people comfortable (but not necessarily experienced) with JavaScript and HTML, with or without any prior graphics programming experience."
	+"<br>"+"Have final aim to create a spinning cube on reference to functions of glMatrix library. \
	I organized the document in the order of tutorials that helped me without any background on JavaScript, HTML and WebGL to obtain knowledge about those.";
	document.getElementById("list").innerHTML=string;
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------tutorial1
	string="First of all, To understand glMatrix better learn how to draw simple triangle using WebGL will help you a lot. \
	Literally Simple! The code does not exceeding 50 lines also does not include provided functions from glMatrix.\
	Below the document you can get source code for drawing the triangle. \
	I add a little bit more description about the code in connection with pipeline. \
	If you are not familier with those I would like to recommend you to read scripts down below.";
	document.getElementById("script01_01").innerHTML=string;
	var vb="vertex buffer"+"<br>"+"A Vertex Buffer Object(VBO) is a buffer object provides methods for uploading data about vertex especially position and color as array data.\
	There are two kinds of Buffer in WebGL. \
	'Array Buffer' used for drawing the triangle at right is a Buffer containing vertex attributes, such as vertex coordinates, texture coordinate data, or vertex color data. \
	The other is 'Element Buffer' a buffer used for element indices. \
	When you call gl.bindBuffer(GL_ARRAY_BUFFER, buffer), the state machine sets buffer as the active array buffer. \
	Likewise, when you call gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, buffer), the state machine sets indexbuffer as the active element array buffer (or active index buffer).\
	First you have to create buffer with createBuffer() method. And then, bind with bindBuffer(target, buffer) to connet created Buffer with one of the buffers. \
	Only one target can be bound to a buffer which is created by user. Following methods are used for vertex buffer in source code.";
	var array01_01=["createBuffer()", "bindBuffer(  ,  )", "bufferData(  ,  ,  )"];
	var list01_01="<ul>"+array01_01.map(s=>"<li>"+s).join("")+"</ul>";
	var vs="vertex shader"+"<br>"+"The Vertex Shader is the programmable Shader stage in the rendering pipeline that handles the processing of individual vertices. \
	Simply in case of position, shader would specify locations of vertices on the basis of the data which is stored in vertex buffer. \
	Also vertex shader serves to convey some values to fragment shader. We'll check it out in next tutorial.\
	Let's materialize what kind of methods are utilized!";
	var array01_02=["createShader()","shaderSource(  ,  )","compileShader(  )","attachShader(  ,  )"];
	var list01_02="<ul>"+array01_02.map(s=>"<li>"+s).join("")+"</ul>";
	var fs="fragment shader"+"<br>"+"It's better to know how webgl pipeline is work to understand what is the main role of fragment shader. \
	I'll summarize about vertex buffer and vertex shader briefly. \
	Vertex shader mark exact location of vertices which is main. Data of vertex buffer satisfy the role of the shader. \
	Point, line or triangle would be drawn with using drawArray() which is one of methods. A triangle or more are stroked so far based on defined position of points. \
	The image described in a vector graphics format in this case triangle will converted into a raster image normaly known as pixel image. \
	With fragment shader pixels of the image will be filled with specific color.";
	var array01_03=["createShader()","shaderSource(  ,  )","compileShader(  )","attachShader(  ,  )"];
	var list01_03="<ul>"+array01_03.map(s=>"<li>"+s).join("")+"</ul>";
	var array01=[vb+list01_01, vs+list01_02, fs+list01_03];
	var list01="<ul>"+array01.map(s=>"<li>"+s+"</li>").join("<br>")+"</ul>";
	document.getElementById("script01_02").innerHTML=list01;
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------tutorial2
	string="I hope you have acquired knowledge from above explanation and have been motivated to study WebGL if you are new. \
	Next I'm going to add just one more attribute for the color which is not necessary. Complitely what shown at left. \
	Second tutorial deal with how information is passed from the vertex shader to the fragment shader. \
	If you are interested in this topic you can get another source code for triangle below the document. \
	Actually, The other tutorials contain following keywords.";
	document.getElementById("script02_01").innerHTML=string;
	var varying="varying"+"<br>"+"The qualifier varying is used to declare variables that are shared between the vertex shader and the fragment shader. \
	Varying are used for information that is calculated in the vertex shader and should be handed over to the fragment shader. \
	Both shaders have to declare the varying and the declarations must be identical. \
	Vertex shader computes the values for each vertex and fragment shaders compute values for each fragment. \
	After that the per vertex data of the varying will be interpolated during rasterization before being handed over to the fragment shader. \
	Note that only three color informations are handed over from vertex shader to fragment shader at left triangle. \
	Varying can be used only with the data types float, vec2, vec3, vec4, mat2, mat3, mat4. (arrays of them too.)";
	var hel="highp/mediump/lowp"+"<br>"+"These three qualifiers are called precision qualifier discribes a degree of sophistication. \
	In the vertex shader the use of a precision qualifier is optional. If no qualifier is given all variables will be considered as having highest precision. \
	In the fragment shader a precision qualifier has to be used when declaring a variable unless a default precision has been defined for the specific type. \
	In my code I used highp qualifier only for fragment shader, consequentially variable with varying would be considered as highp qualifier has been written. \
	The qualifier highp is used to specify the highest available precision for a variable. You could speculate a role of the other two qualifiers. \
	Qualifier of high precision suit high performace even though it would operate at slow speed. \
	Low precision might generate positive effect of performace and power efficiency but might also cause falling to get accurate data. \
	Nevertheless, Random implementation for short test at low precision may offer quick and sufficiently detailed work.";
	var array02=[varying, hel];
	var list02="<ul>"+array02.map(s=>"<li>"+s+"</li>").join("<br>")+"</ul>";
	document.getElementById("script02_02").innerHTML=list02;
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------tutorial3
	string="Now we are going to draw a cube appears at right looks like square, you can verify it's a cube at next tutorial. The reason I separate drawing cube and rotating cube is to not confuse you. \
	(I was literally confused by element buffer and rotate method in single code!)\
	As you know we used array buffer for triangle, but in this case using other buffer which is called element buffer is useful. \
	So object of this tutorial is to get used to a usage of methods for element buffer. \
	I prefer element buffer to array buffer when the pieces that are passed to the vertex buffer represented as array are complex or used in duplicate.";
	document.getElementById("script03_01").innerHTML=string;
	var element="element buffer"+"<br>"+"Element Buffer Objects works similarly like the way vertex buffer objects works. \
	An EBO is a buffer object, just like a vertex buffer object, that stores indices that WebGL uses to decide what vertices to draw. \
	Suppose you got four vertices and start out to draw two triangles. Without a doubt, this would be appropriate example to show utility and power of element buffer. \
	Imagine you have to use two triangles to draw square, in a short time, you will come up with idea using six vertices. That's what element buffer doing. \
	Declared array contains four vertices and make use of some vertices as using index of the vertices. I attached simple data to put in detail.\
	Additionally, For GL_ARRAY_BUFFER the VAO will save the binding when you call glVertexAttribPointer. It is basically because the GL_ARRAY_BUFFER binding is not part of the VAO's state. \
	So calling glBindBuffer(GL_ARRAY_BUFFER, vertexBufferHandle) won't do anything with the VAO's state.\
	For GL_ELEMENT_ARRAY_BUFFER it's not the case: the VAO (if bound) will save your index buffer binding to it's state when you call glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, indexBufferHandle).";
	var array03=["createBuffer()", "bindBuffer(  ,  )", "bufferData(  ,  ,  )"];
	var list03_01="<ul>"+array03.map(s=>"<li>"+s+"</li>").join("")+"</ul>";
	var list03="<ul>"+"<li>"+element+list03_01+"</ul>"+"</li>"+"</ul>"
	document.getElementById("script03_02").innerHTML=list03;
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------tutorial4
	string="A Rotation Matrix is a matrix that is employed in performing a rotation in fundamental space of classical geometry well known as coordinate plane.\
	Consider 3D plane consists of x-coordinate, y-coodinate and z-coordinate. \
	Imagine that multiplying rotation matrix based on x and y coordinate and every single vertices while radian of the matrix is keep increased. The cube will obviously spin based on z axis. \
	What would happen if a result of multiplication of the rotation matrices based on the x,y and z axis replaced the rotation matrix stated just before? \
	At the conclusion, multiply each vertices and combination of three matrices. In this Tutorial, we will make a spinning cube using the preceding principle.\
	We can implement this operation using functions avilable in glMatrix Library instead of making each matrices and doing multiply by complex code. \
	There are quite useful functions in the library used for math including rotate() and mul(). \
	WARNING! If you will use the latest version of gl-matrix, you suppose to specify 'glMatrix.mat4' before the function call instead of just typing the name of the function. \
	The form below is exactly what you should follow.";
	document.getElementById("script04_01").innerHTML=string;
	var rotate="glMatrix.mat4.rotate(out, rad, axis)"+"<br>"+"'out' should be 4 by 4 matrix. 'rad' which means radian of rotation matrix should be number.\
	'axis' is array of three elements which indicates x, y, z from first index. If proper datas are inputed, setted matrix will be filled with elements of rotation matrix.";
	var mul="glMatrix.mat4.mul(out, a, b)"+"<br>"+"\
	Offered datas as parameter is multiplied and the result of multiplication will be stored in the matrix provided in 'out'. Each inputed data should be 4 by 4 matrix.";
	var array04=[rotate, mul];
	var list04="<ul>"+array04.map(s=>"<li>"+s+"</li>").join("<br>")+"</ul>";
	document.getElementById("script04_02").innerHTML=list04;
	string="Four matrices are needed to construct a rotating cube in a three-dimensional space. \
	Three matrices to contain rotation matrix performs a rotation around each of axis in Euclidean space and a matrix in which to store the combination of the three matrices are required. \
	To make rotation matrix around x-axis last parameter of rotate function must be an array with three elements in which the second and third elements are zero. \
	You will be able to assume how the last parameter of rotate functions should be. \
	Finally use loop to continuously increase the radian value of each matrix to set the values of the matrix that is combination of the three matrices. \
	By sending the matrix to vertex shader as indicated above tutorials and keep drawing cube with transformed points, the cube will be appeared as if rotating in euclidean space consistently.";
	document.getElementById("script04_03").innerHTML=string;
	//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------tutorial5
	string="Twisted 3D Cube";
	document.getElementById("script05_01").innerHTML=string;
	string="Suppose that you design a twisted cube on the y-axis! If you throughtly understand above descriptions, probably you will come up with some specific idea. \
	This problem seems commplicated, but it can be solved actually simple. Slice the cube which is primitive solution. This means you need more vertices. \
	Add more vertices as more you want. Flexibility of the twisted cube is depends on the number of layers. Eight layers are created on my code the fact imply 16*4+4 triangles are drawn. \
	As mentioned fourth tutorial, the rotate functions can be applicated instead of initializing rotating matrix. In the last code, three rotate methods are used, but in this code only one is used. \
	Since I annotated the codes, it'll be easily identified.";
	document.getElementById("script05_02").innerHTML=string;
	//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------addcanvas
	var canvas;
	canvas=document.getElementById('firstcanvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	triangle1();
	
	canvas=document.getElementById('secondcanvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	triangle2();
	
	canvas=document.getElementById('thirdcanvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	cube1();
	
	canvas=document.getElementById('fourthcanvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	cube2();
	
	canvas=document.getElementById('fifthcanvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	twist();
	
	canvas=document.getElementById('sixth0canvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	bending();
	
	canvas=document.getElementById('sixth1canvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	bending1();
	
	canvas=document.getElementById('sixth2canvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	bending2();
	
	canvas=document.getElementById('sixth3canvas');
	gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	bending3();
}
function triangle1(){
	var vertexShaderSource='\
		attribute vec2 vertexPosition;\
		void main(void){\
			gl_Position=vec4(vertexPosition, 0.0, 1.0);\
		}';
	var fragmentShaderSource='\
		void main(void){\
			gl_FragColor=vec4(1.0, 0.0, 0.0, 1.0);\
		}';
	
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	
	gl.linkProgram(program);
	
	var pointPosition=[
		0.0, 0.6,
		-0.6, -0.6, 
		0.6, -0.6
	];
	
	var vertexBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointPosition), gl.STATIC_DRAW);
	
	var positionAttribLocation=gl.getAttribLocation(program, "vertexPosition");
	gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 8, 0);
	gl.enableVertexAttribArray(positionAttribLocation);
	
	gl.useProgram(program);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function triangle2(){
	var vertexShaderSource='\
		attribute vec2 vertexPosition;\
		attribute vec3 vertexColor;\
		varying vec3 color;\
		void main(void){\
			color=vertexColor;\
			gl_Position=vec4(vertexPosition, 0.0, 1.0);\
		}';
	var fragmentShaderSource='\
		varying highp vec3 color;\
		void main(void){\
			gl_FragColor=vec4(color, 1.0);\
		}';
	
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	
	gl.linkProgram(program);
	
	var pointPosition=[
		0.0, 0.6,   0.8, 0.0, 0.0,
		-0.6, -0.6, 0.0, 0.8, 0.0,
		0.6, -0.6,  0.0, 0.0, 0.8
	];
	
	var vertexBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointPosition), gl.STATIC_DRAW);
	
	var positionAttribLocation=gl.getAttribLocation(program, "vertexPosition");
	gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 5*4, 0);
	gl.enableVertexAttribArray(positionAttribLocation);
	
	var colorAttribLocation=gl.getAttribLocation(program, "vertexColor");
	gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 5*4, 2*4);
	gl.enableVertexAttribArray(colorAttribLocation);
	
	gl.useProgram(program);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}
	var boxVertices = 
	[ // X, Y, Z           R, G, B
		// Top
		-0.4, 0.4, -0.4,   0.5, 0.5, 0.5,
		-0.4, 0.4, 0.4,    0.5, 0.5, 0.5,
		0.4, 0.4, 0.4,     0.5, 0.5, 0.5,
		0.4, 0.4, -0.4,    0.5, 0.5, 0.5,

		// Left
		-0.4, 0.4, 0.4,    0.75, 0.25, 0.5,
		-0.4, -0.4, 0.4,   0.75, 0.25, 0.5,
		-0.4, -0.4, -0.4,  0.75, 0.25, 0.5,
		-0.4, 0.4, -0.4,   0.75, 0.25, 0.5,

		// Right
		0.4, 0.4, 0.4,    0.25, 0.25, 0.75,
		0.4, -0.4, 0.4,   0.25, 0.25, 0.75,
		0.4, -0.4, -0.4,  0.25, 0.25, 0.75,
		0.4, 0.4, -0.4,   0.25, 0.25, 0.75,

		// Front
		0.4, 0.4, 0.4,    1.0, 0.0, 0.15,
		0.4, -0.4, 0.4,    1.0, 0.0, 0.15,
		-0.4, -0.4, 0.4,    1.0, 0.0, 0.15,
		-0.4, 0.4, 0.4,    1.0, 0.0, 0.15,

		// Back
		0.4, 0.4, -0.4,    0.0, 1.0, 0.15,
		0.4, -0.4, -0.4,    0.0, 1.0, 0.15,
		-0.4, -0.4, -0.4,    0.0, 1.0, 0.15,
		-0.4, 0.4, -0.4,    0.0, 1.0, 0.15,

		// Bottom
		-0.4, -0.4, -0.4,   0.5, 0.5, 1.0,
		-0.4, -0.4, 0.4,    0.5, 0.5, 1.0,
		0.4, -0.4, 0.4,     0.5, 0.5, 1.0,
		0.4, -0.4, -0.4,    0.5, 0.5, 1.0,
	];

	var boxIndices =
	[
		// Top
		0, 1, 2,
		0, 2, 3,

		// Left
		5, 4, 6,
		6, 4, 7,

		// Right
		8, 9, 10,
		8, 10, 11,

		// Front
		13, 12, 14,
		15, 14, 12,

		// Back
		16, 17, 18,
		16, 18, 19,

		// Bottom
		21, 20, 22,
		22, 20, 23
	];

function cube1() {
	var vertexShaderText = '\
		attribute vec3 vertPosition;\
		attribute vec3 vertColor;\
		varying vec3 fragColor;\
		void main(){\
			fragColor = vertColor;\
			gl_Position =vec4(vertPosition, 1.0);\
		}';

	var fragmentShaderText ='\
		precision mediump float;\
		varying vec3 fragColor;\
		void main(){\
			gl_FragColor = vec4(fragColor, 1.0);\
		}';

	var canvas = document.getElementById('thirdcanvas');
	var gl = canvas.getContext('webgl');

	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);

	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	
	var boxVertexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

	var boxIndexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
	var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
	gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
	gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);

	gl.enableVertexAttribArray(positionAttribLocation);
	gl.enableVertexAttribArray(colorAttribLocation);

	// Tell OpenGL state machine which program should be active.
	gl.useProgram(program);

	gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);
};
function cube2() {
	var vertexShaderText = '\
		attribute vec3 vertPosition;\
		attribute vec3 vertColor;\
		varying vec3 fragColor;\
		uniform mat4 mWorld;\
		void main(){\
			fragColor = vertColor;\
			gl_Position = mWorld*vec4(vertPosition, 1.0);\
		}';

	var fragmentShaderText ='\
		precision mediump float;\
		varying vec3 fragColor;\
		void main(){\
			gl_FragColor = vec4(fragColor, 1.0);\
		}';
	var canvas = document.getElementById('fourthcanvas');
	var gl = canvas.getContext('webgl');

	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);

	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);

	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	var boxVertexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

	var boxIndexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
	var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
	gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
	gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);

	gl.enableVertexAttribArray(positionAttribLocation);
	gl.enableVertexAttribArray(colorAttribLocation);

	// Tell OpenGL state machine which program should be active.
	gl.useProgram(program);
	var angle = 0;

	var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
	var worldMatrix = new Float32Array(16);
	glMatrix.mat4.identity(worldMatrix);
	
	gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

	var xRotationMatrix = new Float32Array(16);
	var yRotationMatrix = new Float32Array(16);
	var zRotationMatrix = new Float32Array(16);

	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	//
	// Main render loop
	//
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);

	var loop = function () {
		angle += 0.01;
		glMatrix.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
		glMatrix.mat4.rotate(xRotationMatrix, identityMatrix, angle/2, [1, 0, 0]);
		glMatrix.mat4.rotate(zRotationMatrix, identityMatrix, angle, [0, 0, 1]);
		glMatrix.mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
		glMatrix.mat4.mul(worldMatrix, zRotationMatrix, worldMatrix);
		gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
};
	
function twist() {
	var boxVertices = 
	[ // X, Y, Z           R, G, B
		//top layer
		 0.4*Math.cos(1)-0.4*Math.sin(1), 0.4,  0.4*Math.sin(1)+0.4*Math.cos(1), 1.0, 1.0, 1.0,//0
		-0.4*Math.cos(1)-0.4*Math.sin(1), 0.4, -0.4*Math.sin(1)+0.4*Math.cos(1), 1.0, 1.0, 1.0,//1
		-0.4*Math.cos(1)+0.4*Math.sin(1), 0.4, -0.4*Math.sin(1)-0.4*Math.cos(1), 1.0, 1.0, 1.0,//2
		 0.4*Math.cos(1)+0.4*Math.sin(1), 0.4,  0.4*Math.sin(1)-0.4*Math.cos(1), 1.0, 1.0, 1.0,//3
		 
		//7th layer
		 0.4*Math.cos(0.9)-0.4*Math.sin(0.9), 0.3,  0.4*Math.sin(0.9)+0.4*Math.cos(0.9), 0.7, 1.0, 1.0,//4
		-0.4*Math.cos(0.9)-0.4*Math.sin(0.9), 0.3, -0.4*Math.sin(0.9)+0.4*Math.cos(0.9), 0.7, 1.0, 1.0,//5
		-0.4*Math.cos(0.9)+0.4*Math.sin(0.9), 0.3, -0.4*Math.sin(0.9)-0.4*Math.cos(0.9), 0.7, 1.0, 1.0,//6
		 0.4*Math.cos(0.9)+0.4*Math.sin(0.9), 0.3,  0.4*Math.sin(0.9)-0.4*Math.cos(0.9), 0.7, 1.0, 1.0,//7
		 
		//6th layer
		 0.4*Math.cos(0.75)-0.4*Math.sin(0.75), 0.2,  0.4*Math.sin(0.75)+0.4*Math.cos(0.75), 0.5, 1.0, 1.0,//8
		-0.4*Math.cos(0.75)-0.4*Math.sin(0.75), 0.2, -0.4*Math.sin(0.75)+0.4*Math.cos(0.75), 0.5, 1.0, 1.0,//9
		-0.4*Math.cos(0.75)+0.4*Math.sin(0.75), 0.2, -0.4*Math.sin(0.75)-0.4*Math.cos(0.75), 0.5, 1.0, 1.0,//10
		 0.4*Math.cos(0.75)+0.4*Math.sin(0.75), 0.2,  0.4*Math.sin(0.75)-0.4*Math.cos(0.75), 0.5, 1.0, 1.0,//11
		 
		//5th layer
		 0.4*Math.cos(0.6)-0.4*Math.sin(0.6), 0.1,  0.4*Math.sin(0.6)+0.4*Math.cos(0.6), 0.2, 1.0, 1.0,//12
		-0.4*Math.cos(0.6)-0.4*Math.sin(0.6), 0.1, -0.4*Math.sin(0.6)+0.4*Math.cos(0.6), 0.2, 1.0, 1.0,//13
		-0.4*Math.cos(0.6)+0.4*Math.sin(0.6), 0.1, -0.4*Math.sin(0.6)-0.4*Math.cos(0.6), 0.2, 1.0, 1.0,//14
		 0.4*Math.cos(0.6)+0.4*Math.sin(0.6), 0.1,  0.4*Math.sin(0.6)-0.4*Math.cos(0.6), 0.2, 1.0, 1.0,//15
		 
		//middle layer 
		 0.4*Math.cos(0.5)-0.4*Math.sin(0.5), 0,  0.4*Math.sin(0.5)+0.4*Math.cos(0.5), 0.0, 1.0, 1.0,//16
		-0.4*Math.cos(0.5)-0.4*Math.sin(0.5), 0, -0.4*Math.sin(0.5)+0.4*Math.cos(0.5), 0.0, 1.0, 1.0,//17
		-0.4*Math.cos(0.5)+0.4*Math.sin(0.5), 0, -0.4*Math.sin(0.5)-0.4*Math.cos(0.5), 0.0, 1.0, 1.0,//18
		 0.4*Math.cos(0.5)+0.4*Math.sin(0.5), 0,  0.4*Math.sin(0.5)-0.4*Math.cos(0.5), 0.0, 1.0, 1.0,//19
		 
		//3th layer
		 0.4*Math.cos(0.4)-0.4*Math.sin(0.4), -0.1,  0.4*Math.sin(0.4)+0.4*Math.cos(0.4), 0.0, 0.7, 1.0,//20
		-0.4*Math.cos(0.4)-0.4*Math.sin(0.4), -0.1, -0.4*Math.sin(0.4)+0.4*Math.cos(0.4), 0.0, 0.7, 1.0,//21
		-0.4*Math.cos(0.4)+0.4*Math.sin(0.4), -0.1, -0.4*Math.sin(0.4)-0.4*Math.cos(0.4), 0.0, 0.7, 1.0,//22
		 0.4*Math.cos(0.4)+0.4*Math.sin(0.4), -0.1,  0.4*Math.sin(0.4)-0.4*Math.cos(0.4), 0.0, 0.7, 1.0,//23
		 
		//2th layer
		 0.4*Math.cos(0.25)-0.4*Math.sin(0.25), -0.2,  0.4*Math.sin(0.25)+0.4*Math.cos(0.25), 0.0, 0.5, 1.0,//24
		-0.4*Math.cos(0.25)-0.4*Math.sin(0.25), -0.2, -0.4*Math.sin(0.25)+0.4*Math.cos(0.25), 0.0, 0.5, 1.0,//25
		-0.4*Math.cos(0.25)+0.4*Math.sin(0.25), -0.2, -0.4*Math.sin(0.25)-0.4*Math.cos(0.25), 0.0, 0.5, 1.0,//26
		 0.4*Math.cos(0.25)+0.4*Math.sin(0.25), -0.2,  0.4*Math.sin(0.25)-0.4*Math.cos(0.25), 0.0, 0.5, 1.0,//27
		 
		//1th layer
		 0.4*Math.cos(0.1)-0.4*Math.sin(0.1), -0.3,  0.4*Math.sin(0.1)+0.4*Math.cos(0.1), 0.0, 0.3, 1.0,//28
		-0.4*Math.cos(0.1)-0.4*Math.sin(0.1), -0.3, -0.4*Math.sin(0.1)+0.4*Math.cos(0.1), 0.0, 0.3, 1.0,//29
		-0.4*Math.cos(0.1)+0.4*Math.sin(0.1), -0.3, -0.4*Math.sin(0.1)-0.4*Math.cos(0.1), 0.0, 0.3, 1.0,//30
		 0.4*Math.cos(0.1)+0.4*Math.sin(0.1), -0.3,  0.4*Math.sin(0.1)-0.4*Math.cos(0.1), 0.0, 0.3, 1.0,//31
		 
		 //bottom layer
		 0.4*Math.cos(0)-0.4*Math.sin(0), -0.4,  0.4*Math.sin(0)+0.4*Math.cos(0), 0.0, 0.0, 1.0,//32
		-0.4*Math.cos(0)-0.4*Math.sin(0), -0.4, -0.4*Math.sin(0)+0.4*Math.cos(0), 0.0, 0.0, 1.0,//33
		-0.4*Math.cos(0)+0.4*Math.sin(0), -0.4, -0.4*Math.sin(0)-0.4*Math.cos(0), 0.0, 0.0, 1.0,//34
		 0.4*Math.cos(0)+0.4*Math.sin(0), -0.4,  0.4*Math.sin(0)-0.4*Math.cos(0), 0.0, 0.0, 1.0,//35
	];

	var boxIndices =
	[
		//Top
		0,1,2,
		0,3,2,
		
		//7~8 layer
		0,1,5,
		0,4,5,
		1,2,6,
		1,5,6,
		2,3,7,
		2,6,7,
		3,0,4,
		3,7,4,
		
		//6~7 layer
		4,5,9,
		4,8,9,
		5,6,10,
		5,9,10,
		6,7,11,
		6,10,11,
		7,4,8,
		7,11,8,
		
		//5~6 layer
		0+8,1+8,5+8,
		0+8,4+8,5+8,
		1+8,2+8,6+8,
		1+8,5+8,6+8,
		2+8,3+8,7+8,
		2+8,6+8,7+8,
		3+8,0+8,4+8,
		3+8,7+8,4+8,
		
		//4~5 layer
		0+12,1+12,5+12,
		0+12,4+12,5+12,
		1+12,2+12,6+12,
		1+12,5+12,6+12,
		2+12,3+12,7+12,
		2+12,6+12,7+12,
		3+12,0+12,4+12,
		3+12,7+12,4+12,
		
		//3~4 layer
		0+16,1+16,5+16,
		0+16,4+16,5+16,
		1+16,2+16,6+16,
		1+16,5+16,6+16,
		2+16,3+16,7+16,
		2+16,6+16,7+16,
		3+16,0+16,4+16,
		3+16,7+16,4+16,
		
		//2~3 layer
		0+20,1+20,5+20,
		0+20,4+20,5+20,
		1+20,2+20,6+20,
		1+20,5+20,6+20,
		2+20,3+20,7+20,
		2+20,6+20,7+20,
		3+20,0+20,4+20,
		3+20,7+20,4+20,
		
		//1~2 layer
		0+24,1+24,5+24,
		0+24,4+24,5+24,
		1+24,2+24,6+24,
		1+24,5+24,6+24,
		2+24,3+24,7+24,
		2+24,6+24,7+24,
		3+24,0+24,4+24,
		3+24,7+24,4+24,
		
		//0~1 layer
		0+28,1+28,5+28,
		0+28,4+28,5+28,
		1+28,2+28,6+28,
		1+28,5+28,6+28,
		2+28,3+28,7+28,
		2+28,6+28,7+28,
		3+28,0+28,4+28,
		3+28,7+28,4+28,
		
		//Bottom	
		32,33,34,
		32,35,34
	];
	var vertexShaderText = '\
		attribute vec3 vertPosition;\
		attribute vec3 vertColor;\
		varying vec3 fragColor;\
		uniform mat4 mWorld;\
		void main(){\
			fragColor = vertColor;\
			gl_Position = mWorld*vec4(vertPosition, 1.0);\
		}';

	var fragmentShaderText ='\
		precision mediump float;\
		varying vec3 fragColor;\
		void main(){\
			gl_FragColor = vec4(fragColor, 1.0);\
		}';
	var canvas = document.getElementById('fifthcanvas');
	var gl = canvas.getContext('webgl');

	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);

	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);

	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	var boxVertexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

	var boxIndexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
	var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
	gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
	gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);

	gl.enableVertexAttribArray(positionAttribLocation);
	gl.enableVertexAttribArray(colorAttribLocation);

	// Tell OpenGL state machine which program should be active.
	gl.useProgram(program);
	var angle = 0;

	var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
	var worldMatrix = new Float32Array(16);
	glMatrix.mat4.identity(worldMatrix);
	
	gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	//
	// Main render loop
	//
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);

	var loop = function () {
		angle +=0.02;
		//glMatrix.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
		//glMatrix.mat4.rotate(xRotationMatrix, identityMatrix, angle/2, [1, 0, 0]);
		//glMatrix.mat4.rotate(zRotationMatrix, identityMatrix, angle, [0, 0, 1]);
		//glMatrix.mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
		//glMatrix.mat4.mul(worldMatrix, zRotationMatrix, worldMatrix);
		glMatrix.mat4.rotate(worldMatrix, identityMatrix, angle, [1, 1, 1]);
		gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
}
function bending(){
	var radian=0*Math.PI/180
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);
	var x1 = 0.5*sangle-cangle+0.5;
	var y1 = 0.5*cangle+sangle;
	var x2 = 0.5*sangle+0.5;
	var y2 = 0.5*cangle;
	var x3 = -1*cangle+0.5;
	var y3 = sangle;

	var canvas=document.getElementById('sixth0canvas');
	var gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	
	var vertexShaderSource='\
		attribute vec3 vertexPosition;\
		attribute vec3 vertexColor;\
		varying vec3 fragmentColor;\
		uniform mat4 rotMatrix;\
		void main(){\
			gl_Position=rotMatrix*vec4(vertexPosition, 1.5);\
			fragmentColor=vertexColor;\
		}';
	var fragmentShaderSource='\
		varying mediump vec3 fragmentColor;\
		void main(){\
			gl_FragColor=vec4(fragmentColor, 1.0);\
		}';
		
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);
	
	var rotMatrixLocation = gl.getUniformLocation(program, 'rotMatrix');
	var rotationMatrix = new Float32Array(16);
	glMatrix.mat4.identity(rotationMatrix);
	gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);
	
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	var vertexDataTBR=[
		//Top
		 x1,   y1,  -0.5, 0.5, 0.0, 0.0,//0
		 x1,   y1,   0.5, 0.5, 0.0, 0.0,//1
		 x2,   y2,  -0.5, 0.5, 0.0, 0.0,//2
		 x2,   y2,   0.5, 0.5, 0.0, 0.0,//3
		//Bottom
		-0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//4
		-0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//5
		 0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//6
		 0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//7
		//Right
		 x2,   y2,  -0.5, 0.0, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.0, 0.0, 0.0,//9
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		 0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//12
		 0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //13
	];
	var elementDataTBR=[
		//Top
		0,1,2,
		1,2,3,
		//Bottom
		4,5,6,
		5,6,7,
		//Right
		8,9,10,
		9,10,11,
		10,11,12,
		11,12,13
	];
	var vertexDataFBL=[
		//Front
		 x1,   y1,  -0.5, 0.8, 0.0, 0.0,//0
		 x2,   y2,  -0.5, 0.8, 0.0, 0.0,//1
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//2
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//3
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//4
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//5
		-0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//6
		 0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//7
		//Back
		 x1,   y1,   0.5, 0.8, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.8, 0.0, 0.0,//9
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//12
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//13
		-0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//14
		 0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//15
		//Left
		 x1,   y1,  -0.5, 0.0, 0.0, 0.0,//16
		 x1,   y1,   0.5, 0.0, 0.0, 0.0,//17
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//18
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//19
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//20
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//21
		-0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//22
		-0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //23
	];
	var elementDataFBL=[
		//Front
		0,1,2,
		1,2,3,
		4,5,6,
		5,6,7,
		//Back
		8,9,10,
		9,10,11,
		12,13,14,
		13,14,15,
		//Left
		16,17,18,
		17,18,19,
		20,21,22,
		21,22,23,
	];
	
	var loop = function () {
		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		
		identityMatrix=rotationMatrix;
		glMatrix.mat4.rotateY(rotationMatrix, identityMatrix, 0.01);
		//glMatrix.mat4.rotateZ(rotationMatrix, identityMatrix, 0.02);
		//glMatrix.mat4.rotateX(rotationMatrix, identityMatrix, 0.02);
		gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);

		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataTBR), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataTBR), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataTBR.length, gl.UNSIGNED_SHORT, 0);
	
		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataFBL), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataFBL), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataFBL.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
}
function bending1(){
	var radian=45*Math.PI/180
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);
	var x1 = 0.5*sangle-cangle+0.5;
	var y1 = 0.5*cangle+sangle;
	var x2 = 0.5*sangle+0.5;
	var y2 = 0.5*cangle;
	var x3 = -1*cangle+0.5;
	var y3 = sangle;

	var canvas=document.getElementById('sixth1canvas');
	var gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	
	var vertexShaderSource='\
		attribute vec3 vertexPosition;\
		attribute vec3 vertexColor;\
		varying vec3 fragmentColor;\
		uniform mat4 rotMatrix;\
		void main(){\
			gl_Position=rotMatrix*vec4(vertexPosition, 1.5);\
			fragmentColor=vertexColor;\
		}';
	var fragmentShaderSource='\
		varying mediump vec3 fragmentColor;\
		void main(){\
			gl_FragColor=vec4(fragmentColor, 1.0);\
		}';
		
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);
	
	var rotMatrixLocation = gl.getUniformLocation(program, 'rotMatrix');
	var rotationMatrix = new Float32Array(16);
	glMatrix.mat4.identity(rotationMatrix);
	gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);
	
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	var vertexDataTBR=[
		//Top
		 x1,   y1,  -0.5, 0.5, 0.0, 0.0,//0
		 x1,   y1,   0.5, 0.5, 0.0, 0.0,//1
		 x2,   y2,  -0.5, 0.5, 0.0, 0.0,//2
		 x2,   y2,   0.5, 0.5, 0.0, 0.0,//3
		//Bottom
		-0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//4
		-0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//5
		 0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//6
		 0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//7
		//Right
		 x2,   y2,  -0.5, 0.0, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.0, 0.0, 0.0,//9
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		 0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//12
		 0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //13
	];
	var elementDataTBR=[
		//Top
		0,1,2,
		1,2,3,
		//Bottom
		4,5,6,
		5,6,7,
		//Right
		8,9,10,
		9,10,11,
		10,11,12,
		11,12,13
	];
	var vertexDataFBL=[
		//Front
		 x1,   y1,  -0.5, 0.8, 0.0, 0.0,//0
		 x2,   y2,  -0.5, 0.8, 0.0, 0.0,//1
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//2
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//3
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//4
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//5
		-0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//6
		 0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//7
		//Back
		 x1,   y1,   0.5, 0.8, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.8, 0.0, 0.0,//9
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//12
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//13
		-0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//14
		 0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//15
		//Left
		 x1,   y1,  -0.5, 0.0, 0.0, 0.0,//16
		 x1,   y1,   0.5, 0.0, 0.0, 0.0,//17
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//18
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//19
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//20
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//21
		-0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//22
		-0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //23
	];
	var elementDataFBL=[
		//Front
		0,1,2,
		1,2,3,
		4,5,6,
		5,6,7,
		//Back
		8,9,10,
		9,10,11,
		12,13,14,
		13,14,15,
		//Left
		16,17,18,
		17,18,19,
		20,21,22,
		21,22,23,
		
		2,3,4,
		10,11,12,
		18,19,20,
		19,20,21,
	];
	
	var loop = function () {
		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		
		identityMatrix=rotationMatrix;
		glMatrix.mat4.rotateY(rotationMatrix, identityMatrix, 0.01);
		//glMatrix.mat4.rotateZ(rotationMatrix, identityMatrix, 0.02);
		//glMatrix.mat4.rotateX(rotationMatrix, identityMatrix, 0.02);
		gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);

		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataTBR), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataTBR), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataTBR.length, gl.UNSIGNED_SHORT, 0);
	
		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataFBL), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataFBL), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataFBL.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);	
}
function bending2(){
	var radian=45*Math.PI/180
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);

	var x1 = 0.5*sangle-cangle+0.5;
	var y1 = 0.5*cangle+sangle;
	var x2 = 0.5*sangle+0.5;
	var y2 = 0.5*cangle;
	var x3 = -1*cangle+0.5;
	var y3 = sangle;

	radian=radian/2;
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);
	var x4 = -1*cangle+0.5;
	var y4 = sangle;

	var canvas=document.getElementById('sixth2canvas');
	var gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	
	var vertexShaderSource='\
		attribute vec3 vertexPosition;\
		attribute vec3 vertexColor;\
		varying vec3 fragmentColor;\
		uniform mat4 rotMatrix;\
		void main(){\
			gl_Position=rotMatrix*vec4(vertexPosition, 1.5);\
			fragmentColor=vertexColor;\
		}';
	var fragmentShaderSource='\
		varying mediump vec3 fragmentColor;\
		void main(){\
			gl_FragColor=vec4(fragmentColor, 1.0);\
		}';
		
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);
	
	var rotMatrixLocation = gl.getUniformLocation(program, 'rotMatrix');
	var rotationMatrix = new Float32Array(16);
	glMatrix.mat4.identity(rotationMatrix);
	gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);
	
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	var vertexDataTBR=[
		//Top
		 x1,   y1,  -0.5, 0.5, 0.0, 0.0,//0
		 x1,   y1,   0.5, 0.5, 0.0, 0.0,//1
		 x2,   y2,  -0.5, 0.5, 0.0, 0.0,//2
		 x2,   y2,   0.5, 0.5, 0.0, 0.0,//3
		//Bottom
		-0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//4
		-0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//5
		 0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//6
		 0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//7
		//Right
		 x2,   y2,  -0.5, 0.0, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.0, 0.0, 0.0,//9
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		 0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//12
		 0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //13
	];
	var elementDataTBR=[
		//Top
		0,1,2,
		1,2,3,
		//Bottom
		4,5,6,
		5,6,7,
		//Right
		8,9,10,
		9,10,11,
		10,11,12,
		11,12,13
	];
	var vertexDataFBL=[
		//Front
		 x1,   y1,  -0.5, 0.8, 0.0, 0.0,//0
		 x2,   y2,  -0.5, 0.8, 0.0, 0.0,//1
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//2
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//3
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//4
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//5
		-0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//6
		 0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//7
		//Back
		 x1,   y1,   0.5, 0.8, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.8, 0.0, 0.0,//9
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//12
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//13
		-0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//14
		 0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//15
		//Left
		 x1,   y1,  -0.5, 0.0, 0.0, 0.0,//16
		 x1,   y1,   0.5, 0.0, 0.0, 0.0,//17
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//18
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//19
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//20
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//21
		-0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//22
		-0.5, -0.5,  0.5, 0.0, 0.0, 0.0,//23
		
		//x4,y4
		 x4,   y4,  -0.5, 1.0, 1.0, 1.0,//24
		 x4,   y4,   0.5, 1.0, 1.0, 1.0 //25
	];
	var elementDataFBL=[
		//Front
		0,1,2,
		1,2,3,
		4,5,6,
		5,6,7,
		//Back
		8,9,10,
		9,10,11,
		12,13,14,
		13,14,15,
		//Left
		16,17,18,
		17,18,19,
		20,21,22,
		21,22,23,
		
		2,3,24,
		4,5,24,
		10,11,25,
		12,13,25,
		
		18,19,24,
		19,24,25,
		20,21,24,
		21,24,25,
	];
	
	var loop = function () {
		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		
		identityMatrix=rotationMatrix;
		glMatrix.mat4.rotateY(rotationMatrix, identityMatrix, 0.01);
		//glMatrix.mat4.rotateZ(rotationMatrix, identityMatrix, 0.02);
		//glMatrix.mat4.rotateX(rotationMatrix, identityMatrix, 0.02);
		gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);

		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataTBR), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataTBR), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataTBR.length, gl.UNSIGNED_SHORT, 0);
	
		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataFBL), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataFBL), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataFBL.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
}
function bending3(){
	var radian=45*Math.PI/180
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);

	var x1 = 0.5*sangle-cangle+0.5;
	var y1 = 0.5*cangle+sangle;
	var x2 = 0.5*sangle+0.5;
	var y2 = 0.5*cangle;
	var x3 = -1*cangle+0.5;
	var y3 = sangle;

	radian=radian/3*2;
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);
	var x4 = -1*cangle+0.5;
	var y4 = sangle;
	
	radian=radian/3;
	var sangle=Math.sin(radian);
	var cangle=Math.cos(radian);
	var x5 = -1*cangle+0.5;
	var y5 = sangle;

	var canvas=document.getElementById('sixth3canvas');
	var gl=canvas.getContext('webgl');
	gl.clearColor(1.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	
	var vertexShaderSource='\
		attribute vec3 vertexPosition;\
		attribute vec3 vertexColor;\
		varying vec3 fragmentColor;\
		uniform mat4 rotMatrix;\
		void main(){\
			gl_Position=rotMatrix*vec4(vertexPosition, 1.5);\
			fragmentColor=vertexColor;\
		}';
	var fragmentShaderSource='\
		varying mediump vec3 fragmentColor;\
		void main(){\
			gl_FragColor=vec4(fragmentColor, 1.0);\
		}';
		
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program=gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);
	
	var rotMatrixLocation = gl.getUniformLocation(program, 'rotMatrix');
	var rotationMatrix = new Float32Array(16);
	glMatrix.mat4.identity(rotationMatrix);
	gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);
	
	var identityMatrix = new Float32Array(16);
	glMatrix.mat4.identity(identityMatrix);
	
	var vertexDataTBR=[
		//Top
		 x1,   y1,  -0.5, 0.5, 0.0, 0.0,//0
		 x1,   y1,   0.5, 0.5, 0.0, 0.0,//1
		 x2,   y2,  -0.5, 0.5, 0.0, 0.0,//2
		 x2,   y2,   0.5, 0.5, 0.0, 0.0,//3
		//Bottom
		-0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//4
		-0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//5
		 0.5, -0.5, -0.5, 0.5, 0.0, 0.0,//6
		 0.5, -0.5,  0.5, 0.5, 0.0, 0.0,//7
		//Right
		 x2,   y2,  -0.5, 0.0, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.0, 0.0, 0.0,//9
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		 0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//12
		 0.5, -0.5,  0.5, 0.0, 0.0, 0.0 //13
	];
	var elementDataTBR=[
		//Top
		0,1,2,
		1,2,3,
		//Bottom
		4,5,6,
		5,6,7,
		//Right
		8,9,10,
		9,10,11,
		10,11,12,
		11,12,13
	];
	var vertexDataFBL=[
		//Front
		 x1,   y1,  -0.5, 0.8, 0.0, 0.0,//0
		 x2,   y2,  -0.5, 0.8, 0.0, 0.0,//1
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//2
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//3
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//4
		 0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//5
		-0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//6
		 0.5, -0.5, -0.5, 0.8, 0.0, 0.0,//7
		//Back
		 x1,   y1,   0.5, 0.8, 0.0, 0.0,//8
		 x2,   y2,   0.5, 0.8, 0.0, 0.0,//9
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//10
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//11
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//12
		 0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//13
		-0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//14
		 0.5, -0.5,  0.5, 0.8, 0.0, 0.0,//15
		//Left
		 x1,   y1,  -0.5, 0.0, 0.0, 0.0,//16
		 x1,   y1,   0.5, 0.0, 0.0, 0.0,//17
		 x3,   y3,  -0.5, 1.0, 1.0, 1.0,//18
		 x3,   y3,   0.5, 1.0, 1.0, 1.0,//19
		-0.5,  0.0, -0.5, 1.0, 1.0, 1.0,//20
		-0.5,  0.0,  0.5, 1.0, 1.0, 1.0,//21
		-0.5, -0.5, -0.5, 0.0, 0.0, 0.0,//22
		-0.5, -0.5,  0.5, 0.0, 0.0, 0.0,//23
		
		//x4,y4
		 x4,   y4,  -0.5, 1.0, 1.0, 1.0,//24
		 x4,   y4,   0.5, 1.0, 1.0, 1.0,//25
		 
		 //x5,y5
		 x5,   y5,  -0.5, 1.0, 1.0, 1.0,//26
		 x5,   y5,   0.5, 1.0, 1.0, 1.0 //27
	];
	var elementDataFBL=[
		//Front
		0,1,2,
		1,2,3,
		4,5,6,
		5,6,7,
		//Back
		8,9,10,
		9,10,11,
		12,13,14,
		13,14,15,
		//Left
		16,17,18,
		17,18,19,
		20,21,22,
		21,22,23,
		
		2,3,24,
		3,24,26,
		4,5,26,
		
		10,11,25,
		11,25,27,
		12,13,27,
		
		18,19,24,
		19,24,25,
		24,25,26,
		25,26,27,
		20,21,26,
		21,26,27,
	];
	
	var loop = function () {
		gl.clearColor(1.0, 0.8, 0.0, 1.0);
		gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
		
		identityMatrix=rotationMatrix;
		glMatrix.mat4.rotateY(rotationMatrix, identityMatrix, 0.01);
		//glMatrix.mat4.rotateZ(rotationMatrix, identityMatrix, 0.02);
		//glMatrix.mat4.rotateX(rotationMatrix, identityMatrix, 0.02);
		gl.uniformMatrix4fv(rotMatrixLocation, gl.FALSE, rotationMatrix);

		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataTBR), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataTBR), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataTBR.length, gl.UNSIGNED_SHORT, 0);
	
		var vertexBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDataFBL), gl.STATIC_DRAW);
		var elementBuffer=gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(elementDataFBL), gl.STATIC_DRAW);
	
		var positionAttribLocation = gl.getAttribLocation(program, 'vertexPosition');
		var colorAttribLocation = gl.getAttribLocation(program, 'vertexColor');
		gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
		gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
		gl.enableVertexAttribArray(positionAttribLocation);
		gl.enableVertexAttribArray(colorAttribLocation);
	
		gl.drawElements(gl.TRIANGLES, elementDataFBL.length, gl.UNSIGNED_SHORT, 0);

		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
}