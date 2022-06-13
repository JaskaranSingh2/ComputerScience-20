from random import randint
print("1. Roll Dice Once\n2. Roll Dice 5 Times\n3. Roll Dice ‘n’ Times\n4. Roll Dice until Snake Eyes\n5. Exit")

while True:
    userIn = input("Select an option (1-5): ")

    if int(userIn) == 1:
        one = randint(1,6)
        two = randint(1,6)
        print(one, two, f"(sum: {one + two})" )

    if int(userIn) == 2:
        for i in range(5):
            one = randint(1,6)
            two = randint(1,6)
            print(one, two, f"(sum: {one + two})" )

    if int(userIn) == 3:
        n = int(input("How many times do you want to roll the dice? "))
        for i in range(n):
            one = randint(1,6)
            two = randint(1,6)
            print(one, two, f"(sum: {one + two})" )

    if int(userIn) == 4:
        count = 0
        while True:
            one = randint(1,6)
            two = randint(1,6)
            print(one, two, f"(sum: {one + two})" )
            count += 1
            if one == 1 and two == 1:
                print("Snake eyes!", f"You rolled {count} times.")
                break

    if int(userIn) == 5:
        exit()