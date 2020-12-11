let GUI = null;
let TEXT = null;
let LMAO = false;

function newLevel() {
  clientMessage("Greetings");
  
  let ctx = new com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try {
      let layout = new android.widget.RelativeLayout(ctx);
      layout.setOrientation(1);
      let btn = new android.widget.Button(ctx);
      btn.setText("TRY");
      btn.setOnClickListener(new android.view.View.OnClickListener({ onClick: function() {
        LMAO = !LMAO;
      }}))
      layout.addView(btn);
      TEXT = new android.widget.TextView(ctx);
      layout.addView(TEXT);
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch(e) {
      print("ERROR:"+e);
    }
  }}));
}

function modTick() {
  TEXT.setText(lmao?"":"LAMO");
}

function leaveGame() {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
    }}));
}
