function save(){
    const a = document.getElementById("ProjfullName").value;
    document.getElementById("ab").innerHTML = a;
    const b = document.getElementById("date").value;
    document.getElementById("abc").innerHTML = b;
    const c = document.getElementById("status").value;
    document.getElementById("abcd").innerHTML = c;
    const d = document.getElementById("progress").value;
    document.getElementById("abcde").innerHTML = d;
    document.getElementById("updateTable").style.display = "none";
}

function view(){
    document.getElementById("updateTable").style.display = "block";
    document.getElementById("updateTable").style.width = "1200px";
    document.getElementById("updateTable").style.height = "90px";
}


function onSearch(){
    let filter = document.getElementById("text").value.toUpperCase();

    let myTable = document.getElementById("list");

    let tr = myTable.getElementsByTagName('tr');
    
    for(var i = 0 ; i < tr.length ; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter)> -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}


