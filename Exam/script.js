function gatdata(){
    var x = document.getElementById('name').value;
    var y = document.getElementById('email').value;
    var z = document.getElementById('contact').value;
    var tdata = document.getElementById('tinfo');
    var t_body = tdata.getElementsByTagName('tbody')[0];
    var input = document.createElement('input').type = 'Delete';
    var row = t_body.insertRow(-1);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(1);
    var cell4 = row.insertCell(2);
    var cell5 = row.insertCell(3);
    cell2.innerHTML = x;
    cell3.innerHTML = y;
    cell4.innerHTML = z;
    cell5.innerHTML = input;
    cell5.onclick = function(){
        t_body.deleteRow(-1);
    }
    clearData();
}
function clearData(){
    var x = document.getElementById('name');
    var y = document.getElementById('email');
    var z = document.getElementById('contact');
    x.innerHTML = "";    
    y.innerHTML = "";    
    z.innerHTML = "";    
}

