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
App.jx
main.jsx
```

## Structure objet type 
Référencé dans useQuizData
### Paramètre de personnalisation du quizz 
```
{difficulty: int, category: string}
```
### Structure de donnée du quiz
```
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