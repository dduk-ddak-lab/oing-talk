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
mycode = $.cookie("mycode");   // 쿠키 중에서 mycode 받기.
if (mycode === undefined ) {
  mycode = code_generator();
  $.cookie('mycode', mycode,{expires: 7, path:'/'});  // 쿠키 mycode 생성.
}
//==============================================================================





//==============================================================================
//                    친구 코드 생성  또는  불러오기
//------------------------------------------------------------------------------

// html 요소 중 id : mainspace 인 곳에 친구코드 삽입하기.
function mainspacing(input_value) {
  var newa = document.createElement("a");  // 하이퍼링크가 있는 영역에 삽입.
  newa.innerHTML = "<h1>" + input_value + "</h2>";
  var mainspace = document.getElementById("mainspace");
  mainspace.appendChild(newa);
}

//쿠키 불러오기 (친구 목록)  i.e. 초기설정]
// 쿠키 전부 friends 객체로 받음.
var friends = $.cookie();
// 쿠키들 중 mycode를 제외한 값들을 ㅡ i.e.친구코드 ㅡ mainspace에 기록함.
for(var key in friends) {
  if (key !== "mycode") {
    mainspacing(key);
  }
}

//친구 코드 받기
function get_friends_code() {
  search_value=document.getElementById('search_bar').value;
// 쿠키 전부 friends 새로 받음 :: 쿠키 업데이트.
  var friends = $.cookie();
// friends 객체 개수 :: 몇번째 친구인지 불러옴. > 새로운 쿠키의 이름이 될 것.
  var friends_length = Object.keys(friends).length;
// 쿠키 저장.
  $.cookie('friends_code'+friends_length, search_value,{expires: 7, path:'/'});
}

//==============================================================================
