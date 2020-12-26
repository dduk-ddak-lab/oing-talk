//==============================================================================
//                      내 코드 생성  또는  불러오기
//------------------------------------------------------------------------------
// my code 위한 난수 생성  :: 코드 > 16진수
// 숫자 앞에 0 붙이기 // n : 숫자, width : 길이
function numberPad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

// 랜덤으로 my code 생성
function code_generator() {
  var random_code = new Uint16Array(1);
  crypto.getRandomValues(random_code);
  var code = random_code[0].toString(16).toUpperCase();
  return numberPad(code,4);
}


//**************************************************************************************
//  이하 코드는 수정할 것. mycode는 쿠키가 아닌 데이터베이스에 저장할 것.
//**************************************************************************************
// 쿠키에 내 코드가 저장이 안되어있으면 새로 생성  [i.e. 초기설정]
mycode = $.cookie("mycode");   // 쿠키 중에서 mycode 받기.                       //  초기설정
if (mycode === undefined ) {
  mycode = code_generator();
  $.cookie('mycode', mycode,{expires: 7, path:'/'});  // 쿠키 mycode 생성.
}
//==============================================================================




//==============================================================================
//                                 채팅 탭
//------------------------------------------------------------------------------
// 채팅 들어오자마자 임시로 저장했던 쿠키 삭제. i.e. 무슨 코드로 들어왔는지.
function on_chat() {
  $.cookie('signal', self,{expires: -1, path:'/'});
}
//==============================================================================




//==============================================================================
//                    친구 코드 생성  또는  불러오기
//------------------------------------------------------------------------------

// html 요소 중 id : mainspace 인 곳에 친구코드 삽입하기.
function mainspacing(input_value) {
  var newDIV = document.createElement("div");  // div 영역에 삽입.
  // DIV에 id 추가 >> 나중에 제거하기 용이하도록.
  newDIV.setAttribute("id",input_value);
  newDIV.onclick = function() {
    if (del_mode==true) { // 만약 delete mode라면!  i.e. 버튼 2
      $('div').remove('#'+input_value);  // div 제거
      $.cookie("friends_code"+input_value, 0,{expires: -1, path:'/'});
    } else {  // delete mode가 아니라면! : default  i.e. 버튼2
    $.cookie('signal', input_value,{expires: 1, path:'/'});
    //*********************************************************************************
    location.replace("");  // 주소 입력
    //*********************************************************************************
    }
  }
  newDIV.innerHTML = "<h1>#" + input_value + "</h1>";
  var mainspace = document.getElementById("mainspace");
  mainspace.appendChild(newDIV);
}

//쿠키 불러오기 (친구 목록)  i.e. 초기설정]
// 쿠키 전부 friends 객체로 받음.
var friends = $.cookie();
// 쿠키들 중 friends_code로 시작하는 값들을 ㅡ i.e.친구코드 ㅡ mainspace에 기록함.
for (key in friends) {
var test = key.split('friends_code')[1];
    if (test!==undefined) {mainspacing($.cookie(key));}
}

//친구 코드 받기
function get_friends_code() {
// 검색어 저장
  str=document.getElementById('search_bar').value;
// # 기호 제거
  str = str.split('#');
  search_value = str[1];
// 검색바 초기화
  document.getElementById('search_bar').value="#";
// 쿠키 저장. 쿠키 업데이트
  $.cookie('friends_code'+search_value, search_value,{expires: 7, path:'/'});
// 친구수 한명 증가
}

//==============================================================================
