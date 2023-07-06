<script>jQuery(function ($) {
$(document).ready(function() {

    
    
    
    $("#myform1").submit(function( event ) {
    event.preventDefault();

    var ddd = $("#totaldb").val();
    if(ddd != "")
this.submit(); 
});

  $("#tymin").on("change", function() {
  var date  = $("#datt").val();
  var time  = $("#tym").val();
  var min   = $("#tymin").val();
  var datee=date+"-"+time+":"+min+":00";

  var sdat = datee.split(":");
  var ssdat =  sdat[0].split("-");
  var hourz = ssdat[3];
  var minz = sdat[1];
  var tminz = (+hourz) * 60 + (+minz);

  var et = $("#mtimi").val();

  var ftimm = (+tminz)+(+et);

  var fhours = Math.floor( ftimm / 60);          
   var fminutes = ftimm % 60;
   if(fminutes == 0)
   {
       fminutes = "00";
   }
   var ftimef = fhours+":"+fminutes; 
   var nftimef = date+" "+ftimef+":00";
   $("#m_etr_time").html(nftimef);
   $("#estr").val(nftimef);
   
   

})

  $("#w0").submit(function( event ) {
    event.preventDefault();
  var date  = $("#datt").val();
  var time  = $("#tym").val();
  var min   = $("#tymin").val();
  var datee=date+"-"+time+":"+min+":00";
  $("#delivery_date").val(datee);
    var date  = $("#delivery_date").val();
    this.submit();
});

    $("#myBtn").click(function(){
      $("#myModal").show();
      $("body").addClass("modal-content-open");
    });

    $(".close").click(function(){
      $("#myModal").hide();
      $("body").removeClass("modal-content-open")
    });


    $("input[type=checkbox]").change(function(){
      recalculate();
    });

    function recalculate(){
      var g = 0;
      var durr = 0;
      var sum = 0;
      var fsum = 0;
      var val = "";
      var pri = "";
      var d5 = 0;
      var d4 = 0;
      var d3 = 0;
      var d2 = 0;
      var dtot = 0;
      var ccount = 1;
      var md = 0;
      var dis6 = 0;
      $("input[type=checkbox]:checked").each(function(){
      var md = 0;
        durr += parseFloat($(this).attr("data-durr"));
        sum += parseFloat($(this).attr("rel"));
       // fsum += parseFloat($(this).attr("rel"));
        var dd = counnt();
        dis2 = $(this).attr("data-disc2");
        dis3 = $(this).attr("data-disc3");
        dis4 = $(this).attr("data-disc4");
        dis5 = $(this).attr("data-disc5");

        disP = $(this).attr("data-discP");

        val += this.value+"<br>";
       
        spri = $(this).attr("data-id");

if(ccount==2)
{
  md = spri * (dis2 / 100);
  dtot +=   (spri * (dis2 / 100));
  spri = (spri - ( spri * dis2 / 100 ));

}
else if(ccount == 3)
{
  if(dis3 == 0)
  {
    dis3 = dis2;
  }
   md = spri * (dis3 / 100);
  dtot +=   (spri * (dis3 / 100));
  spri = (spri - ( spri * dis3 / 100 ));
}
else if(ccount == 4)
{
  if(dis4 == 0)
  {
    dis4 = dis3;
    if(dis3 == 0)
    {
      dis4 = dis2;
    }
  }
   md = spri * (dis4 / 100);
  dtot +=   (spri * (dis4 / 100));
  spri = (spri - ( spri * dis4 / 100 ));
}
else if(ccount == 5)
{
  if(dis5 == 0)
  {
    dis5 = dis4;
    if(dis4 == 0)
    {
      dis5 = dis3;
      if(dis3 == 0)
      {
        dis5 = dis2;
      }
    }
  }

   md = (spri * (dis5 / 100));
  dtot +=   (spri * (dis5 / 100));
  spri = (spri - ( spri * dis5 / 100 ));
}
else if(ccount >= 6)
{
  if(dis5 != 0)
  {
    dis6 = dis5;
  }
   else if(dis4 != 0)
  {
    dis6 = dis4;
  }
   else if(dis3 != 0)
  {
    dis6 = dis3;
  }
   else if(dis2 != 0)
  {
    dis6 = dis2;
  }
   md = (spri * (dis6 / 100));
  dtot +=   (spri * (dis6 / 100));
  spri = (spri - ( spri * dis6 / 100 ));
}
//alert(spri);
//var disdp = spri - md;
spri = parseFloat(spri);
if(md != 0)
{
 pri+= "<strike style=color:red><span style=color:black>€ "+$(this).attr("data-id")+"</span></strike> "+spri.toFixed(2)+"<br>";
}
else
{
 pri+= "€ "+$(this).attr("data-id")+"<br>"; 
}
fsum += parseFloat(spri);
ccount++;
     });

     /* alert(spri);
      alert("||"+dis2+"||"+dis3+"||"+dis4+"||"+dis5+"||");*/
      //calcPrice  = (price - ( price * percentage / 100 )).toFixed(2);
      // fsum = fsum - d5;
      // fsum = fsum - d4;
      // fsum = fsum - d3;
      // fsum = fsum - d2;
/*
      fsum = (fsum - ( fsum * d5 / 100 ));
      fsum = (fsum - ( fsum * d4 / 100 ));
      fsum = (fsum - ( fsum * d3 / 100 ));
      fsum = (fsum - ( fsum * d2 / 100 ));*/

  //    dtot = parseFloat(d5)+parseFloat(d4)+parseFloat(d3)+parseFloat(d2);

      //fsum = fsum - dtot;
      $("#pric").html(pri);
      $("#serv").html(val);
      $("#stotal").html(sum.toFixed(2));
      $("#total").html(fsum.toFixed(2));
      $("#discount").html(dtot.toFixed(2));


      $("#mServ").html(val);
      $("#mPrice").html(pri);
      $("#msubtotal").html(sum.toFixed(2));
      $("#mtotal").html(fsum.toFixed(2));
      $("#mdiscount").html(dtot.toFixed(2)+"");

       var hours = Math.floor( durr / 60);          
       var minutes = durr % 60;
       var timef = hours+"hrs - "+minutes+"min";

      $("#mdurr").html(timef);
      $("#mtimi").val(durr);


      data=val.replace(new RegExp("<br>", "g"),",");
      $("#totaldb").val(fsum.toFixed(2));
      $("#mServdb").val(data);

    }
  });

  $(window).scroll(function(e){ 
    var $el = $(".fixedElement"); 
    var isPositionFixed = ($el.css("position") == "fixed");
    if ($(this).scrollTop() > 1300 && !isPositionFixed){ 
      $(".fixedElement").css({"position": "sticky", "top": "0px"}); 
    }
    if ($(this).scrollTop() < 1300 && isPositionFixed)
    {
      $(".fixedElement").css({"position": "static", "top": "0px"}); 
    } 
  });
$(document).ready(function(){
      var sel_id = $(".idsl").val();
      //alert(sel_id);



           
});

jQuery('#w2').yiiActiveForm([], []);
});</script>
