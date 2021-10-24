function doGet(){
  return HtmlService.createHtmlOutputFromFile('frontend');
}

// ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// この部分は正常に動作中(単体にて試験済み)
// ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function send_to_code_gs(option1,ss_url) {
  const ss_id="1mHZURelfs1cuwW-Ju_-HdSDvnLOc2aoYP1NjbHOSR-c";
  //ここのIDの取得方法はこちらを参考にしました
  //https://qiita.com/n0bisuke/items/67afb8ad50d20fba0ad3
  var st =  SpreadsheetApp.openById(ss_id).getSheetByName("Sheet1");
  var lastrow = st.getLastRow()+1;
  //st.getRange(lastrow,1).setValue(option1);
  st.getRange(lastrow,1).setValue(1);
  return "完了！"
}


function myFunction2(){
}

function myFunction3(){

}