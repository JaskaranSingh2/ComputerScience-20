print("Welcome to the Chess Quiz")

dictQuiz = {
    "What is the most IMPORTANT piece in chess?": ["The King", "King"],
    "What is the most POWERFUL piece in chess?": ["The Queen", "Queen"],
    "How many small squares are on a chess board?": "64",
    "What is the only chess piece that can jump over other pieces?": ["Horse", "The Horse"],
}

qNumber = 1
answerCorrect = 0

for question, answer in dictQuiz.items():
    print(question)
    guess = input(f"Q{qNumber} Answer: ")
    if isinstance(answer, list):
        countLen = 1
        for answers in answer:
            if guess.lower() == answers.lower():
                print("Correct!")
                print("")
                answerCorrect += 1
                break
            elif countLen == len(answer):
                print("Incorrect!")
                print("")
            countLen += 1
        qNumber += 1
    elif isinstance(answer, str):   
        if guess.lower() == answer.lower():
            print("Correct!")
            print("")
            answerCorrect += 1
        else:
            print("Incorrect!")
            print("")
        qNumber += 1
        

if answerCorrect / len(dictQuiz) >= 0.75:
    print("Great job!")
else:
    print("You're trash!")

print(f"{answerCorrect} / {len(dictQuiz)} ({int(round(answerCorrect/len(dictQuiz) * 100))}%)")