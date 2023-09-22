// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyC9EgyXRniptlkSV8J9rt3Or4PYm8CrcIc',
    appId: '1:359786242502:web:c1457b4f1221cdd637d2c7',
    messagingSenderId: '359786242502',
    projectId: 'imagemflutter',
    authDomain: 'imagemflutter.firebaseapp.com',
    storageBucket: 'imagemflutter.appspot.com',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyCrxPyx0mODrC2cIluKgXbvBfjFSaOQ7OQ',
    appId: '1:359786242502:android:6b2a36951bf4c3c037d2c7',
    messagingSenderId: '359786242502',
    projectId: 'imagemflutter',
    storageBucket: 'imagemflutter.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDlkZlKBTp68aq7b3rWwQoaQ4YKSY1OOtA',
    appId: '1:359786242502:ios:caef804c084999f737d2c7',
    messagingSenderId: '359786242502',
    projectId: 'imagemflutter',
    storageBucket: 'imagemflutter.appspot.com',
    iosBundleId: 'com.example.appCrudSqlite',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyDlkZlKBTp68aq7b3rWwQoaQ4YKSY1OOtA',
    appId: '1:359786242502:ios:6359b6f1de2f38df37d2c7',
    messagingSenderId: '359786242502',
    projectId: 'imagemflutter',
    storageBucket: 'imagemflutter.appspot.com',
    iosBundleId: 'com.example.appCrudSqlite.RunnerTests',
  );
}
