\version "2.20.0"
    
\header{
   title = ""    
   subtitle = ""
}

topLine = {

}

botLine = {

}
\new GrandStaff <<
\new Staff {
\clef "treble"
\key  g \major
\time 
\topLine
}

\new Staff{
\clef "bass"
\key  g \major
\time 
\botLine
}
>>
