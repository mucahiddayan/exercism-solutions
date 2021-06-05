alphabet = [chr(l) for l in range(97,123)]

def is_pangram(sentence):
    return all(letter in sentence.lower() for letter in alphabet)


