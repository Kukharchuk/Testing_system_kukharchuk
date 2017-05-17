var create = document.getElementById("btn_create");
var main_block = document.getElementById("form_block");
var container = document.getElementsByClassName("container")[0];
var num = 0;
create.addEventListener("click", function(){
    var new_block = document.createElement("div");
    main_block.appendChild(new_block);
    new_block.classList.add("new_block");
    var question = document.createElement("input");
    question.setAttribute("type","text");
    question.setAttribute("placeholder","Введите вопрос...");
    question.classList.add("form-control");
    question.setAttribute("name","questions");
    new_block.appendChild(question);
    //var btn_answer = document.createElement(button);
    for(var i = 0; i < 3; i++){
      var answer_block = document.createElement("div");
      var answer = document.createElement("input");
      var radio_block = document.createElement("form");
      answer.setAttribute("name","answ_"+num);
      answer.setAttribute("type","text");
      answer.setAttribute("placeholder","Введите вариант ответа...");
      answer_block.appendChild(answer);
      answer_block.appendChild(radio_block);
      new_block.appendChild(answer_block);
      for (var j = 0; j < 3; j++) {
              var lab_text = document.createElement("label");
              radio_block.appendChild(lab_text);
              var mark = document.createElement("input");
                    lab_text.appendChild(mark);
                 lab_text.innerHTML ="<input type='radio'" + " name=" + (i+"_"+num) + " " + "value=" + j + ">" + (1+j);

      }
      answer_block.classList.add("input-group");
      answer.classList.add("form-control");
    }
        num++;
    if(num == 2){
      var save_btn = document.createElement("input");
      save_btn.setAttribute("type", "button");
      save_btn.value = "Готово!";
      save_btn.setAttribute("class", "btn btn-lg btn-success");
      var div_save = document.getElementById("btn_save");
      div_save.appendChild(save_btn);
      var v = 0;
      save_btn.addEventListener("click", function(){
        v++;
        var tests = [];
        var questions = document.getElementsByName("questions");
    //   tests.name = document.getElementById("test_name").value;
        for (var t = 0; t < num; t++) {
          var answers = document.getElementsByName("answ_" + t);
          tests[t] = {};
          tests[t].block = "block_" + t;
          tests[t].quest = questions[t].value;
          tests[t].answ = [];
          tests[t].marks = [];
          for( an = 0; an < 3; an++){
          tests[t].answ[an] = answers[an].value;
          var mks = document.getElementsByName(an+"_"+t);
          for( mk = 0; mk < 3; mk++){
            if(mks[mk].checked)
              tests[t].marks[an] = +mks[mk].value + 1;
        }

        }
        console.log(tests);
        }
        validation();
            //    new_test(tests);
      })
    }
})

function validation(){
  container.remove();
  var container = document.createElement("div");
  container.setAttribute("class", "container");
  body.appendChild(container);
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.value = "+";
  btn.addEventListener("click", function(){
    var form = document.createElement("form");
    container.appendChild(form);
    var interval_1 = document.createElement("input");
    interval_1.setAttribute("type", "text");
    form.appendChild(interval_1);
    var interval_2 = document.createElement("input");
    interval_2.setAttribute("type", "text");
    form.appendChild(interval_2);
    var text_result = document.createElement("input");
    text_result.setAttribute("type", "text");
    form.appendChild(text_result);
  })

}

function new_test(tests){
        container.innerHTML = " ";
        for (var i = 0; i<tests.length; i++) {
        	var div_test = document.createElement("div");
        	container.appendChild(div_test);
        	div_test.classList.add("div_test");
        	var div_test_question = document.createElement("div");
        	div_test.appendChild(div_test_question);
        	div_test_question.classList.add("div_test_question");
        	div_test_question.innerHTML = tests[i].quest;
        	var form = document.createElement("form");
        	div_test.appendChild(form);

        	for (var j = 0; j < tests[i].answ.length; j++) {
        		var div_answer_check = document.createElement("div");
        		form.appendChild(div_answer_check);
        		div_answer_check.classList.add("div_answer_check");
        		var check_test_var = document.createElement("input");
        		div_answer_check.appendChild(check_test_var);
        		check_test_var.classList.add("answer_check");
        		check_test_var.setAttribute("type", "radio");
        		check_test_var.setAttribute("name", tests[i].block);
        		check_test_var.setAttribute("value", tests[i].marks[j])
        		var p_text = document.createElement("p");
        		div_answer_check.appendChild(p_text);
        		p_text.classList.add("answer_check");
        		p_text.innerHTML = tests[i].answ[j];

        	}
        }

}
