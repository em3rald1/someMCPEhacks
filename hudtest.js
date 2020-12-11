let GUI;

function newLevel() {
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try {
      let layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);
      
      let hud_button = new android.widget.Button(ctx);
      hud_button.setText("HUD");
      
      
    }
  }}));
}

function leaveGame() {
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    if(GUI != null) {
      GUI.dismiss();
      GUI = null;
    }
  }}))
}
