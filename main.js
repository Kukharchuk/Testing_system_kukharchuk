var create = document.getElementById("btn_create");
var main_block = document.getElementById("form_block");

create.addEventListener("click", function(){
    var new_block = document.createElement("div");
    main_block.appendChild(new_block);
    var question = document.createElement("input");
    question.setAttribute("type","text");
    new_block.appendChild(question);
    //var btn_answer = document.createElement(button);
    for(var i = 0; i <=3; i++){
      var answer = document.createElement("input");
      answer.setAttribute("type","text");
      new_block.appendChild(answer);
    }
})
