let GUI = null;
let lmao = false;
let text = null;

class GSLA {
  constructor(color, gravity, ctx, width, height, layout) {
     this.win = new android.widget.PopupWindow();
     this.win.setContentView(layout);
     this.win.setWidth(width);
     this.win.setHeight(height);
     this.win.setBackgroundDrawable(color);
     this.win.showAtLocation(ctx.getWindow().getDecorView(), gravity, 0,0);
  }
  dismiss() {
    this.win.dismiss();
  }
}

function newLevel() {
  let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try {
      let layout = new android.widget.RelativeLayout(ctx);
      let btn = new android.widget.Button(ctx);
      btn.setText("Hello!");
      btn.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function() {
          lmao = !lmao;
        }
      }));
      layout.addView(btn);
      text = new android.widget.TextView(ctx);
      layout.addView(text);
      let color = new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT);
      GUI = new GSLA(color, android.view.Gravity.TOP | android.view.Gravity.RIGHT, ctx, 200, 200, layout);
    } catch(err) {
      print("Error: "+err); 
    }
  }}));
}

function modTick() {
  text.setText(lmao?"":"LMAO");
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
