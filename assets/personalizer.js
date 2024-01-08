function change_img(x){

    console.log("::::::");
    var size_img = x.replace("_", "-");
    size_img = "https://storage.googleapis.com/sube_tu_foto/mockups/personalizado-"+size_img+".png";
    var image = document.getElementById('placeholder');
    $("#placeholder").attr("src",size_img);
    $(".btndiv").css("display","block");
    $(".stk_btn").attr("href",size_img);

   }

var options = {valueNames: [ 'size_width', 'size_height','size_proportion','size_material','size_price']};
var userList ;
var object;
var products;
let httpRequest = new XMLHttpRequest(); // asynchronous request
httpRequest.open("GET", "https://storage.googleapis.com/sube_tu_foto/productos.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        object = JSON.parse(this.response);
    //console.log(object);
    products = object.CL_Report;
    //console.log(products.length);

    x = "";
    for (var i=0; i<products.length; i++) {
        var form ="";
        


        if(products[i].Proportion == "1:1"){
            form = "square";
        }else if(products[i].Proportion == "1:2" || products[i].Proportion == "1:3" || products[i].Proportion == "1:4"  || products[i].Proportion == "2:3" || products[i].Proportion == "3:4"){
            form = "vertical";
        }else{
            form = "horizontal"
        }

        x = x+'<li id="'+products[i].Name+'" onclick="change_img(this.id);"><div class="size_proportion"><img src="https://storage.googleapis.com/sube_tu_foto/placeholders/'+form +'.png"/></div><div class="size_name"><span class="size_width">'+products[i].Width+'</span> x <span class="size_height">'+products[i].Height+'</span> cm<br>'+products[i].Material+'</div><div class="size_price">'+ products[i].Price+'</div><div class="size_material">'+products[i].Material+'</div></li>';
        //console.log(products[i].Name);
    }
    document.getElementById('product_list').innerHTML = x;
        userList = new List('temp_size', options)
    }


});
//SIZE SORT










function filterSize(s){
    userList.search('Chico');
}

$(document).ready(function() {
    $("#canvas").addClass("btn_active");
    userList.search('canvas');




   $('ul.material li').click(function(e) { 
    var material_img = "https://storage.googleapis.com/sube_tu_foto/placeholders/"+this.id+".png";
    
    var image = document.getElementById('placeholder');
    $("#placeholder").attr("src",material_img);


    $("#canvas").removeClass( "btn_active" );
    $("#acrilico").removeClass( "btn_active" );
    $("#aluminio").removeClass( "btn_active" );
    $("#pixset").removeClass( "btn_active" );
    $("#canvas").removeClass( "btn_active" );
    $("#poster").removeClass( "btn_active" );
    $("#enmarcado").removeClass( "btn_active" );
    $("#"+this.id).addClass("btn_active");
    console.log(this.id);
    userList.search(this.id);



    //$(".size_"+this.id).css("display","block");
    $(".btndiv").css("display","none");
   });


   $('#product_list li').click(function(e) { 
     /*  console.log("....");
    var size_img = this.id.replace("_", "-");
    size_img = "https://storage.googleapis.com/clvisonbucket/sube_tu_foto/mockups/personalizado-"+size_img+".png";
    var image = document.getElementById('placeholder');
    $("#placeholder").attr("src",size_img);
    $(".stk_btn").css("display","block");
    $(".stk_btn").attr("href","https://google.com/"+size_img);
    */
   });



   



});