x1, y1, x2, y2 = input("x1 "), input("y1 "), input("x2 "), input("y2 ")
x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)

def distanceCalc(x1, y1, x2, y2):
    return (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5

print("Distance between points:", distanceCalc(x1, y1, x2, y2))
