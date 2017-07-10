# Firebase
NodeJS + Express + Firebase + AngularJS


# Start
Command Prompt: npm start

# Browser
http://localhost:3000


# Config
index.js var 'config' need to be set with correct values

Firebase Realtime Database Rule should be as below
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

Otherwise you will get permission denied message on the console
