sounds = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
}
def convert(number):
    result = ""

    if number%3 == 0:
        result += sounds[3]
    if number%5 ==0:
        result += sounds[5]
    if number%7 ==0:
        result += sounds[7]
    
    if result == "":
        result = str(number)
    return result
