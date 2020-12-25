
#import csv

top_notes = []
bot_notes = []
title = ''
composer = ''
time_sig = ''
num_of_measures = ''
staff1 = ''
staff2 = ''
accidental = ''
pieceID = ''
pdf = ''

def split(word):
    return [char for char in word]

def lowerChar(char):
  return char.lower()

def note_converter(note_pitch, duration):
    seperated_pitch = split(note_pitch)
    note_name = lowerChar(seperated_pitch[0])
    octave = seperated_pitch[1]
    accidental = ''
    if octave == '#':
        octave = seperated_pitch[2]
        accidental = 'is'

    if octave == 'b':
        octave = seperated_pitch[2]
        accidental = 'es'

    if octave == '6':
        lyoctave = "'''"
    elif octave == '5':
        lyoctave = "''"
    elif octave == '4':
        lyoctave = "'"
    elif octave == '3':
        lyoctave = ""
    elif octave == '2':
        lyoctave =  ","
    elif octave == '1':
        lyoctave = ",,"
    elif octave == '0':
        lyoctave = ",,,"
    else:
        lyoctave = "error"

    if duration == '16':
        lyduration = '1'
    elif duration == '12':
        lyduration = '2.'
    elif duration == '8':
        lyduration = '2'
    elif duration == '6':
        lyduration = '4.'
    elif duration == '4':
        lyduration = '4'
    elif duration == '3':
        lyduration = '8.'
    elif duration == '2':
        lyduration = '8'
    elif duration == '1':
        lyduration = '16'
    else:
        lyduration = 'error'

    ans = note_name + accidental + lyoctave + str(lyduration)
    #print(ans)
    return ans

def print_list(list):
    st = ''
    i = 0
    while i < len(list):
        st = st + ' ' + list[i]
        i += 1
    return st

notes = 'notes.csv'

with open(notes, 'r') as csvfile1:
    datareader1 = csvfile1.readlines()
    for row in datareader1:
        pitch = row.split(',')[5]
        if row.split(',')[1] == '1':
            note = note_converter(pitch, row.split(',')[2])
            top_notes.append(note)

        else:
            note = note_converter(pitch, row.split(',')[2])
            bot_notes.append(note)


measure = 'measure.csv'

with open(measure, 'r') as csvfile2:
    datareader2 = csvfile2.readlines()
    for row in datareader2:
        split = row.split(',')[0]
        #print(row)
    #print("\n")


piece = 'piece.csv'

with open(piece, 'r') as csvfile3:
    datareader3 = csvfile3.readlines()
    for row in datareader3:
        pieceID = row.split(',')[0]
        title = row.split(',')[1]
        composer = row.split(',')[2]
        time_sig = row.split(',')[3]
        num_of_measures = row.split(',')[4]
        pdf = row.split(',')[5]
    #print("\n")


staff = 'staff.csv'

with open(staff, 'r') as csvfile4:
    datareader4 = csvfile4.readlines()
    for row in datareader4:
        staff_type = row.split(',')[1]
        if row == 0:
            staff1 = staff_type
        else:
            staff2 = staff_type
    #print("\n")

file_ly = open('piece.ly', 'w+')
file_ly.write("""\\version "2.20.0"
    
\header{
   title = """ + '"' + title + '"' +
"""    \n   subtitle = """ + '"' + composer + '"' + """
}

topLine = {\n""")
file_ly.write(print_list(top_notes))
file_ly.write("""
}

botLine = {\n""")
file_ly.write(print_list(bot_notes))
file_ly.write("""
}
\\new GrandStaff <<
\\new Staff {
\clef "treble"
\key  g \major
\\time """ + time_sig +"""
\\topLine
}

\\new Staff{
\clef "bass"
\key  g \major
\\time """ + time_sig +"""
\\botLine
}
>>
""")


if __name__ == '__main__':
    print_list(top_notes)