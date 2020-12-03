\version "2.20.0"
    
\header{
   title = "Minuet in G major"    
   subtitle = "Johann Sebastian Bach"
}

topLine = {
 d''4 g'8 a'8 b'8 c''8 d''4 g'4 g'4 e''4 c''8 d''8 e''8 fis''8 g''4 g'4 g'4 c''4 d''8 c''8 b'8 a'8 b'4 c''8 b'8 a'8 g'8 fis'4 g'8 a'8 b'8 g'8 a'2. d''4 g'8 a'8 b'8 c''8 d''4 g'4 g'4 e''4 c''8 d''8 e''8 fis''8 g''4 g'4 g'4 c''4 d''8 c''8 b'8 a'8 b'4 c''8 b'8 a'8 g'8 a'4 b'8 a'8 g'8 fis'8 g'2.
}

botLine = {
 g2 a4 b2. c2. b2. a2. g2. d'4 b4 g4 d'4 d8 c'8 b8 a8 b2 a4 g4 b4 g4 c'2. b4 c'8 b8 a8 g8 a2 fis4 g2 b4 c'4 d'4 d4 g2 g,4 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8 dis,8
}
\new GrandStaff <<
\new Staff {
\clef "treble"
\key  g \major
\time 3/4
\topLine
}

\new Staff{
\clef "bass"
\key  g \major
\time 3/4
\botLine
}
>>
