$("#btn").on("click", function(){
    
    var ddd = document.getElementById("tip")
          if(ddd){
                $("#tip").empty();
          }else{
              var $div = $("<div id='tip'></div>").appendTo("body");
          }
    
          // var $h1=$("<h5 title='一级标题'  class='red'>DOM文档</h1>");
          // $($div).append($h1);  
          var idnew = "menu1";
          var textnew = "textnew";
          var $ul = $("<ul class='menu'>").appendTo($("#tip"));
          var menus = ["成功率","成功次数"];
          addMenu(menus,$ul);
        //   var $li = $("<li id='" + idnew+"'>li1</li>").appendTo($ul);
        //   var $li2 = $("<li id='menu2'>li2</li>").appendTo($ul);

          //修改菜单名称
          $("#menu1").text("linew");
          $("#" + idnew).text(textnew);
          //绑定事件
          setTimeout(function() {
              
            $("#" + idnew).on("click", function(){
              alert(idnew);
            });
          }, 200);
              
});

function addMenu(arr,target){
    for(var i = 0; i< arr.length; i++){
        var idnew = "menu" + (i+1);
        var $li = $("<li id='" + idnew+"'>"+arr[i]+"</li>").appendTo(target);

    }
}
function addListener(id,callback){
    $("#" + id).on("click", callback);
}