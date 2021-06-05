import functools
def is_armstrong_number(number):
    numbers = [n for n in str(number)]
    return functools.reduce(lambda a,b: a+b,[int(n)** len(numbers) for n in numbers]) == number

