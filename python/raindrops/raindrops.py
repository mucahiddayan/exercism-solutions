sounds = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
}
def convert(number):
    result = ""

    for n in [3,5,7]:
        if number % n ==0:
            result += sounds[n]
    
    return (result,str(number))[result == '']
