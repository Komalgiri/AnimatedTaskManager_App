package com.animatedtaskmanager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.UIManagerModule;
import android.animation.ObjectAnimator;
import android.view.View;

public class CustomAnimationsModule extends ReactContextBaseJavaModule {

    public CustomAnimationsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomAnimations";
    }

    @ReactMethod
    public void fadeIn(View view) {
        ObjectAnimator.ofFloat(view, "alpha", 0f, 1f).setDuration(1000).start();
    }

    @ReactMethod
    public void slideIn(View view) {
        ObjectAnimator.ofFloat(view, "translationX", -1000f, 0f).setDuration(1000).start();
    }

    @ReactMethod
    public void rotate(View view) {
        ObjectAnimator.ofFloat(view, "rotation", 0f, 360f).setDuration(1000).start();
    }
}
