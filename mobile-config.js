/**
 * Created by Cole on 2/15/16.
 */
App.info({
    name: 'Fittist',
    description: 'A fitness logging and tracking tool. Great for crossfit, or strength and conditioning',
    version: '0.0.1'
});

App.icons({
    'android_ldpi': 'resources/icons/kettlebell.png',
    'android_mdpi': 'resources/icons/kettlebell.png',
    'android_hdpi': 'resources/icons/kettlebell.png',
    'android_xhdpi': 'resources/icons/kettlebell.png',
    'iphone':'resources/icons/kettlebell.png',
    'iphone_2x':'resources/icons/kettlebell.png'
});

App.launchScreens({
    'iphone':'resources/splash/kettlebell-splash.png',
    'iphone_2x':'resources/splash/kettlebell-splash.png',
    'iphone5':'resources/splash/kettlebell-splash.png'
});

App.accessRule('http://*');
App.accessRule('https://*');
App.accessRule('*' , {launchExternal: true});