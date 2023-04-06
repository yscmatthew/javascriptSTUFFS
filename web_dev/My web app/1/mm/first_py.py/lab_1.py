import random
print("hello world")

print("Welcome to my first python game, as number guesssing game, enter an integer now")
ans = (random.randint(0,100))
counter = 8

for x in range(7):

    usrinp = input("The random number is in range 1-100:")
    usrinp = int(usrinp)
    if usrinp > ans:
     counter = counter - 1
     print("the number is too large! You have",(counter - 1)," chances left.")
     if counter == 1 :
        str(ans)
        print("you lose, good luck next time. Btw ",(ans)," is the correct answer.")
        print(counter)
     else:
            print("    ") #for debugging use (system may ignore the rule of counter == 1 even it's not)
    
    elif usrinp < ans:
        counter = counter - 1
        print('the number is too small! You have',(counter - 1)," chances left.")
        if counter == 1 :
         str(ans)
         print("you lose, good luck next time. Btw ",(ans)," is the correct answer.")
         print(counter)
         
        

    elif usrinp == ans:
            print("congrats! you are correct, ",(ans)," is the correct answer!")
            break
    else:
        print("never gonna give you up")
    







 
