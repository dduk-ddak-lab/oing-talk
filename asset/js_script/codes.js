//==============================================================================
//                                   내 코드
//------------------------------------------------------------------------------
// my code 위한 난수 생성  :: 코드 > 16진수
// 숫자 앞에 0 붙이기 // n : 숫자, width : 길이
function numberPad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

// my code 생성
function code_generator() {
  var random_code = new Uint16Array(1);
  crypto.getRandomValues(random_code);
  var code = random_code[0].toString(16).toUpperCase();
  return numberPad(code,4);
}
//==============================================================================



//==============================================================================
//                                   쿠 키
//------------------------------------------------------------------------------
var mycode = $.cookie('mycode');
if (mycode === undefined ) {
  mycode = code_generator();
  $.cookie('mycode', mycode,{expires: 7, path:'/'});
}
//==============================================================================



//==============================================================================
//                                 친구 코드들
//------------------------------------------------------------------------------
// 변수 저장 객체 지정.
var friends = {
  count : 0,
  codes : []
};
// search 탭  search_value를 검색하면 main 구역에 #search_value 생성
function searching() {
  search_value=document.getElementById('search_bar').value;
  var newDIV = document.createElement("div");
  newDIV.innerHTML = "<a> <h1>" + search_value + "</h2> </a>";
  var mainspace = document.getElementById("mainspace");
  mainspace.appendChild(newDIV);
  friends.codes[friends.count] = search_value;
  friends.count = friends.count + 1;
}
//==============================================================================
