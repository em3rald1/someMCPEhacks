const prefix = ChatColor.BOLD + "[" + ChatColor.PINK + 'Fullbright' + ChatColor.RESET + ChatColor.BOLD + "] " + ChatColor.RESET;

let GUI;

function newLevel() {
  clientMessage(prefix + "Started.");
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try {
      let layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);
      
      let btn = new android.widget.Button(ctx);
      btn.setText("FB");
      
      btn.setOnClickListener( new android.view.View.OnClickListener({ onclick: function() { Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 0, 60*60*20, false, true); clientMessage(prefix+"Added effect for 1 hour" } }));
      layout.addView(btn);
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
   }
   catch(err) {
      print("Error occured: "+err);
   }
   }}));
}
