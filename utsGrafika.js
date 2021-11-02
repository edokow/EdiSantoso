var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

//Membuat Segitiga 
c.beginPath();
c.moveTo(300, 50); 
c.lineTo(150, 250); 
c.lineTo(300, 250);
c.closePath();
c.strokeStyle = 'deeppink';
c.stroke();

//Membuat Persegi
c.strokeRect(300,150,100,100); //Persegi dengan garis outline saja
//Membuat Persegi
c.strokeRect(400,150,100,100); //Persegi dengan garis outline saja

//Membuat Lingkaran
c.beginPath();
c.arc(300, 300, 50, 0, Math.PI * 2);
c.fillStyle = 'Green';
c.stroke();

//Membuat Lingkaran
c.beginPath();
c.arc(450, 300, 50, 0, Math.PI * 2);
c.fillStyle = 'Green';
c.stroke();

c.font = "30px arial";
c.fillText("Membuat Truk dengan Segitiga, Persegi dan Lingkaran :", 25, 40); //Teks dengan warna

c.font = "30px arial";
c.strokeText("Gambar : ", 25, 400);


function printFoto(){
	//mendeklarasikan gambar
	var img = document.getElementById("angga");
	//mencetaknya
	c.drawImage(img, 50, 450);
}