x1, y1, x2, y2 = int(input("x1 ")), int(input("y1 ")), int(input("x2 ")), int(input("y2 "))
print("Distance between points:", (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5)

"""
Function version:
x1, y1, x2, y2 = int(input("x1 ")), int(input("y1 ")), int(input("x2 ")), int(input("y2 "))
def distanceCalc(x1, y1, x2, y2):
    return (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5
print("Distance between points:", distanceCalc(x1, y1, x2, y2))
"""