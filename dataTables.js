console.log(tableEmployee.columns().flatten());
console.log(tableEmployee.column([0]).search($(this).val()));
tableEmployee.columns().flatten().each(function(cols){
    var select =$('<select/>').appendTo(tableEmployee.column(cols).footer()).on('change',function(){
        tableEmployee.column(cols).search($(this).val()).draw();
    });
    tableEmployee.column(cols).cache('search').sort().unique().each(function(colsSelect){
        select.append( $('<option value="'+colsSelect+'">'+colsSelect+'</option>') );
    });
});

$('#empTable tbody').on( 'click', 'tr', function () {

    var index= tableEmployee.column(2).index('visible');
    tableEmployee.column( 3 ).visible( false );
    var rowData = tableEmployee.row( this ).data();
   
    var rowData = tableEmployee.row( ':eq(4)' ).data();
    tableEmployee.search( 'Coimbatore' ).draw();
        console.log(JSON.stringify(rowData));
     
    console.log(JSON.stringify(rowData.firstname));
    if(rowData.firstname == "anil"){
        console.log("Success Selection");
    }else{
        console.log("Failuer Selection Try Again");
    }
    
  } );