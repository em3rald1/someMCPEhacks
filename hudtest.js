let GUI;
let window__ = null;
let lmao = false;

function newLevel() {
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try {
      window__ = new android.widget.PopupWindow();
      let layout = new android.widget.RelativeLayout(ctx);
      let btn = new android.widget.Button(ctx);
      btn.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function() {
          lmao = !lmao;
      }}));
      layout.addView(btn);
      let txt = new android.widget.TextView();
      txt.setText(lmao?'':"LMAO");
      layout.addView(txt);
      
      window__.setContentView(layout);
      window__.setWidth(100);
      window__.setHeight(100);
      
      window__.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
      window__.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch(err) {
      print("Error: "+err); 
    }
  }}));
}

function leaveGame() {
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    if(window__ != null) {
      window__.dismiss();
      window__ = null;
    }
  }}))
}
