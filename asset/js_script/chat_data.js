//------------------------------------------------------------------------------
// mainspace 에 삽입하는 용도.
      function mainspacing(input_value, input_class) {
        var newDIV = document.createElement("div");  // div 영역에 삽입.
        // DIV에 class 추가
        newDIV.setAttribute('class',input_class);
        newDIV.style.margin = '2rem';
        newDIV.onclick = function() {
          if (del_mode==true) { // 만약 delete mode라면!  i.e. 버튼 2
            $(this).remove();  // div 제거
            // 데이터베이스에서도 지워야한다. ************************************************
          }
        }
// inline 블록으로 설정할 것. 그러고 이 블럭을 가운데 정렬해서 밑줄 그으려는 의도.
        newDIV.innerHTML = "<div style='text-align: justify' class='inline'>" + input_value + "</div>";
        var mainspace = document.getElementById("mainspace");
        mainspace.appendChild(newDIV);
        // 스크롤 조절.
        var scroll_height = mainspace.scrollHeight;
        mainspace.scrollBy(0,scroll_height);
      }
//------------------------------------------------------------------------------
