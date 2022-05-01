# Quiz App :jigsaw:
Browser application for playing quiz in Russian. You can deploy this app in your browser and play the quiz consisting of 10 default questions on different topics. This project was bootstrapped with Create React App.

This project was developed as part of summer practice. Task and mentoring from **Grid Dynamics**.

## Getting Started :clipboard:

### Prerequisites
To run this application you will need [Node.js](https://nodejs.org/en/). 

### Installing
After installing Node.js, you should clone the project repository from [https://github.com/Maria-Shch/QuizApp.git](https://github.com/Maria-Shch/QuizApp.git).

Then open Node.js command prompt. Using the command **`cd`** go to `my-app` folder. Sample:
```
cd C:\Users\user\Documents\QuizApp\my-app
```

The next step is to run the command:
```
npm install
```

It does with installing various packages and resolving their various dependencies.

And finally the last command will launch the application in your browser at [http://localhost:3000/index](http://localhost:3000/index).
```
npm start
```

## Description :memo:

After launching the application, you can find main page by the link [http://localhost:3000/index](http://localhost:3000/index).

![image](https://user-images.githubusercontent.com/62648024/166155762-fd3303a9-805c-415f-a005-b2626d922537.png)

The **`Квиз`** button will take you to the first question of the quiz.

![image](https://user-images.githubusercontent.com/62648024/166156466-f7dd7e22-3c58-46e8-b8a9-30c15997aed8.png)

After passing the quiz, you will see your result:

![image](https://user-images.githubusercontent.com/62648024/166156532-d1811689-dd2b-4280-9fde-e00448b65212.png)

All your results can be viewed by clicking the **`История`** button.

![image](https://user-images.githubusercontent.com/62648024/166156609-3ea59b70-2bc6-458a-bed5-279ceadbd39e.png)

All results are stored in the browser's Local Storage. To find them, open ``DevTools`` by pressing ``F12`` and then go to the ``Application`` tab.

## Questions storage :open_file_folder:

The file with questions ``questions.json`` is stored along the path ``my-app\src\data\questions.json``. 
By default, a single quiz with ``id:"07e6bda"`` is stored in the file. 

![image](https://user-images.githubusercontent.com/62648024/166157016-3fabb8cf-b96f-4e83-854f-e6ffa84ac810.png)

![image](https://user-images.githubusercontent.com/62648024/166157011-19091fd5-0320-4ef4-95bc-bcb4b887bcc5.png)

You can manage the quiz questions by modifying this file. You can simply edit the already existing set of questions.
And also you can add another quiz. In this case, you must change the quiz id in the ``my-app\src\App.js`` file to your quiz **``id``**.

![image](https://user-images.githubusercontent.com/62648024/166157247-b57e7214-0662-48bf-b46a-b518b79f13e0.png)
