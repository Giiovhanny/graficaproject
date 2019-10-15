function drawCup(nSlides){

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

    var obj = new Object();
    obj.vertexData = positionDataNew;
    obj.colorData = colorData;

    return obj;

};

function getAll (e,fig,todos){
  var obje = new Object();

  switch (e.keyCode) {
  case 49:
    obje.fig=1,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= Math.PI/2 / 70, obje.todos=false ;
    return  obje;
    break;
  case 50:
    obje.fig=2,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0 ,obje.angle= Math.PI/2 / 70,obje.todos=false ;
    return  obje;
    break;
  case 51:
    obje.fig=3,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false;
    return  obje;
    break;
  case 52:
      obje.fig=4,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;
  case 53:
      obje.fig=5,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;
  case 54:
      obje.fig=6,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;
  case 55:
      obje.fig=7,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;
  case 56:
      obje.fig=8,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;
  case 57:
      obje.fig=9,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=false ;
      return  obje;
      break;


  case 48:
      obje.fig=0,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=0,obje.angle= 0,obje.todos=true ;
      return  obje;
      break;


  case 120:
     obje.fig=fig ,obje.Val =true, obje.Xx = -0.009 ,obje.Yy =1.0 , obje.Zz =1.0, obje.Op=101,obje.angle= 0,obje.todos=todos;
     return  obje;
     break;
  case 88:
      obje.fig=fig,obje.Val =false, obje.Xx = 0.1 ,obje.Yy = 0.10 , obje.Zz =0.10, obje.Op=101,obje.angle= 0,obje.todos=todos ;
      return  obje;
      break;
  case 121:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = -0.09 , obje.Zz =0.0, obje.Op=101,obje.angle= 0,obje.todos=todos ;
      return  obje;
      break;
  case 89:
      obje.fig=fig,obje.Val =false, obje.Xx = 0.0,obje.Yy = 0.01 , obje.Zz =0.0, obje.Op=101,obje.angle= 0,obje.todos=todos ;
      return  obje;
      break;
  case 122:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0,obje.Yy = 0.0 , obje.Zz =-0.09, obje.Op=101,obje.angle= 0,obje.todos=todos ;
      return  obje;
      break;
  case 99:
      obje.fig=fig,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz = 0.1 , obje.Op=101,obje.angle= 0,obje.todos=todos ;
      return  obje;
      break;






  case 119:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=101,obje.angle= -Math.PI/2 / 70,obje.todos=todos ;
      return  obje;
      break;
  case 115:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=101,obje.angle= Math.PI/2 / 70,obje.todos=todos;
      return  obje;
      break;
  case 101:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=102,obje.angle= -Math.PI/2 / 70,obje.todos=todos;
      return  obje;
      break;
  case 113:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=102,obje.angle= Math.PI/2 / 70,obje.todos=todos ;
      return  obje;
      break;
  case 100:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=103,obje.angle= -Math.PI/2 / 70,obje.todos=todos ;
      return  obje;
      break;
  case 97:
      obje.fig=fig,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =0.0, obje.Op=103,obje.angle= Math.PI/2 / 70,obje.todos=todos;
      return  obje;
      break;





  case 62:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.10 ,obje.Yy = 0.0 , obje.Zz =0.0,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  case 60:
      obje.fig=fig ,obje.Val =true, obje.Xx = -0.10 ,obje.Yy = 0.0 , obje.Zz =0.0,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  case 105:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.10 , obje.Zz = 0.0,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  case 107:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = -0.10 , obje.Zz = 0.0,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  case 44:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.10 , obje.Zz =0.10,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  case 46:
      obje.fig=fig ,obje.Val =true, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz =-0.10,obje.Op=105 ,obje.angle= 0.0,obje.todos=todos ;
      return  obje;
      break;
  default:
  obje.fig=0 ,obje.Val =false, obje.Xx = 0.0 ,obje.Yy = 0.0 , obje.Zz = 0,obje.Op=0 ,obje.angle= 0 ;


}};
