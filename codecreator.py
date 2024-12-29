import random

code = ""
currentletter = 0

for i in range(7):
    currentletter = random.randint(1, 9)
    code = (code + str(currentletter))

print(code)