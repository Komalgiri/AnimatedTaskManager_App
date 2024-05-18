
# Animated Task Manager

This React Native application demonstrates various types of animations using native modules in Java for optimal performance. The app includes animations such as fade-in for components, slide-in for a list of items, and rotation for a button.

## Features

- **Fade-In Animation**: Smoothly fades in a component when it enters the screen.
- **Slide-In Animation**: Items in a list slide in from left to right with a slight delay between each item.
- **Rotation Animation**: A button rotates 360 degrees clockwise when pressed.

## Technologies Used

- **Frontend**: React Native
- **Backend (Native Modules)**: Java
- **Other Tools**: Android Studio, Xcode, Node.js


## Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Android Studio with Android SDK and NDK
- Xcode (for iOS development)
- Java JDK

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/animated-task-manager.git
   cd animated-task-manager
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Install Pods for iOS:**
   ```sh
   cd ios
   pod install
   cd ..
   ```

## Running the Application

1. **Run on Android:**
   ```sh
   npx react-native run-android
   ```

2. **Run on iOS:**
   ```sh
   npx react-native run-ios
   ```

## Project Structure

```
animated-task-manager/
├── android/
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/
│   │   │   │   │   └── com/
│   │   │   │   │       └── animatedtaskmanager/
│   │   │   │   │           ├── CustomAnimationsModule.java
│   │   │   │   │           ├── CustomAnimationsPackage.java
│   │   │   │   │           ├── MainActivity.java
│   │   │   │   │           └── MainApplication.java
├── ios/
│   └── ...
├── src/
│   ├── components/
│   │   ├── FadeInView.js
│   │   ├── SlideInList.js
│   │   └── RotateButton.js
│   └── screens/
│       └── TaskListScreen.js
├── App.tsx
├── package.json
└── README.md
```


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

---
