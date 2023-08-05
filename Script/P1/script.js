function gatdata(){
var sel = document.getElementById('P');
sel.addEventListener('click',gatdata);
    alert("hellow");
}
function getdeta(){
    var cel = document.getElementById('P1');
    var X = prompt('Enter a student Name');
    cel.textContent = 'No.1:' + X;
}