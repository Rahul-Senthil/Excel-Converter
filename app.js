const data_1 = document.getElementById("data1");
const data_2 = document.getElementById("data2");
const data_3 = document.getElementById("data3");
const data_4 = document.getElementById("data4");
const data_5 = document.getElementById("data5");
const data_6 = document.getElementById("data6");
const data_7 = document.getElementById("data7");
const data_8 = document.getElementById("data8");
const data_9 = document.getElementById("data9");
const data_10 = document.getElementById("data10");
const n = document.getElementById("n");




function upload(){
    
    var no = n.value;
    var data=[]
    
     data[0] = data_1.value;
     data[1] = data_2.value;
     data[2] = data_3.value;
     data[3] = data_4.value;
     data[4] = data_5.value;
     data[5] = data_6.value;
     data[6] = data_7.value;
     data[7] = data_8.value;
     data[8] = data_9.value;
     data[9] = data_10.value;
    
    var fulldata =[]

    
   for(var i=0;i<no;i++){
        fulldata.push(data[i]);
        console.log(fulldata[i]);
   }

   

   var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow(table.rows.length);
    
    var fullcell=[]
    for(var i=0;i<no;i++)
    {
    fullcell[i] = row.insertCell(i);
    console.log(fullcell[i]);
    }
    
    for(var i=0;i<no;i++)
    {
    fullcell[i].innerHTML = fulldata[i];
    }

    data_1.value="";
    data_2.value="";
    data_3.value="";
    data_4.value="";
    data_5.value="";
    data_6.value="";
    data_7.value="";
    data_8.value="";
    data_9.value="";
    data_10.value="";


}

function convert(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#table"));
    alert("Your Excel was saved! Check the Download Bar.");
}
  