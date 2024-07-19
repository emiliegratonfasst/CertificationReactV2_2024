# Projet de certification REACT niveau 2 - 2024

## Structure projet
```
src
|___ Common
|    |_ Router.jsx
|___ Components
|    |_ FixedQuestion.jsx
|    |_ InteractiveQuestion.jsx
|    |_ QuizGame.jsx
|    |_ QuizMaker.jsx
|    |_ QuizResult.jsx
|    |_ QuizSelection.jsx
|___ Hook
     |_ useFetchQuiz.js
     |_ useGameQuiz.js
     |_ useQuizData.js
     |_ useQuizSelection.js
|___ Utils
     |_ quizUtils.js
App.jx
main.jsx
```

## Structure objet type 
Référencé dans useQuizData
### Paramètres de personnalisation du quizz 
```
quizOptions
{difficulty: int, category: string}
```
### Structure de donnée du quiz
```
quizData
[{
    key: string,
    isAnswer: boolean
    question: string,
    answers : [
        {
            key: String
            answer: string,
            isCorrect: boolean,
            isSelected: boolean
        }
    ]
}]
```