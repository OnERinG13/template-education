let pictures = ['teacher1.svg', 'teacher2.svg', 'teacher3.svg',
 'teacher4.svg', 'teacher5.svg', 'teacher6.svg', ];
 let address = Array();
 for(i = 0 ; i<11 ; i++){
   address[i] = './img/'+pictures[Math.round(Math.random()*5)];
 }
for(i = 1 ; i < 10 ; i++){
  document.getElementById('image'+i).src = address[i];
}
