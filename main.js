canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


color = "red";


ctx.beginPath();
ctx.strokeStyle = color;
//indica que color se va a utilizar
ctx.lineWidth = 2;
//dice que el grozor del pincel va a ser de 2
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
//esta creando un arco
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e)
{
    //obtener color del cuadro de entrada
    //inicio de la actividad adicional
    color = document.getElementById("color").value;
    console.log(color);
    //final de la actividad adicional
   
     mouse_x = e.clientX - Canvas.offsetLeft;
     mouse_y = e.clientY - Canvas.offsetTop;


    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //sirve para que el codigo se muestre en consola
    circle(mouse_x , mouse_y);    
}


function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
//dice de que color va aser el pincel
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
//dice de que tamaño va a ser el circulo
ctx.stroke();
}


//actividad adicional


function cleararea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // sirve para limpiar el lienzo
}



