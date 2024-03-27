x = 0;
y = 0;

fig = 0

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "El sistema esta escuchando. Porfavor, habla";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event); 
   
   var content = event.results[0][0].transcript;
   
      document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
         if(content =="círculo")
         {
           x = Math.floor(Math.random() * 900);
           y = Math.floor(Math.random() * 600);
           document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo "; 
           Fig = 1;
         }
         if(content =="rectángulo")
         {
           x = Math.floor(Math.random() * 900);
           y = Math.floor(Math.random() * 600);
           document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo "; 
           Fig = 2;
         }
   }
   
   function setup() {
     canvas = createCanvas(900, 600);
   }
   
   function draw() {
     if(Fig == 1)
     {
       radius = Math.floor(Math.random() * 100);
       circle(x, y, radius);
       document.getElementById("status").innerHTML = "Se dibujó un círculo. ";
       Fig = 0;
     }
   
     if(Fig == 2)
     {
       rect(x,y,70,50);
       document.getElementById("status").innerHTML = "Se dibujó un rectángulo. ";
       Fig = 0;
     }
   
   }