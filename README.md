# Simple Interface Music
_(hosted by james, ty <3)_
A rudimentary music score-writer web app by Sherwin Zhang and Sven Slattum.
Using Lilypond, this app allows users to write new notes, change the latest notes, and delete notes from the end
The default loaded score is Bach's Minuet in G Major.

## Features
1. Write Note: Users can write new notes at the end of the piece, automatically formatted by Lilypond.
2. Change Note: Users can change the latest note at the end of the piece, depending on the selected staff.
3. Delete Note: Users can delete the latest note at the end of the piece, depending on the selected staff.
4. Print/Export: View the current score, available for download as pdf

## TODO:
- Make a mysql db for unique urls for each piece
- Fix order of code so that user only needs to press export once instead of twice
- Do error checking on user input
- Syncs with user table when pressing 'save'
- Clean up user interface