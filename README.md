# PyCrack

PyCrack is a simple quick-answer programming game in which the goal is to answer as many questions as possible in a limited amount of time. The questions are given as code snippets in various languages, and the player is instructed to write the output that would be printed if the code was compiled and run.

The goal of the game is to simulate a common occurrence in high school and university programming exams, in which students are often given a snippet of code on paper and asked to analyze it or write its output. Since this format of code is very rarely stumbled upon in actual programming, it often leads to a lot of careless mistakes, even among experienced programmers, mostly due to lack of exposure.

This type of question has drawn criticism, as it is not considered to be an accurate representation of actual programming, since running and testing code to see its output is costless rather than guessing. However, this kind of visual intuition is very helpful in debugging, and speeds up the debugging process significantly. It instills more confidence in the fundamentals of a programmer, and completes the understanding of a language. Therefore, the intent of this game is to give practice and exposure to this type of question to clear up the careless mistakes that often arise.


## Contributing

As of right now, PyCrack runs completely locally, and has no backend. This means that all of the questions and their data are stored directly in the repository, at `src\content\[language]Questions.js`. At the beginning of every session, `formQuestions.js` loads all of the questions into a local variable, which is then used to access questions. The current solution is good enough given the volume of questions. Right now, we need more questions from different languages and support for more languages. I expect to refactor the question drawing system at every milestone(the next being about 1000), and I will probably look into developing a backend at around 5000 questions(or, if I plan to add a leaderboard or some other similar feature in the near future). 

At the time of writing, here are the following points for contribution:
- **QUESTIONS**
- Report a question
- Timer
- More language support
- Responsive design
