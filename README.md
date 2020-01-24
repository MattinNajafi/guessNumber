

# Slutprojektet
Beskrivning av uppgiften
Användaren ska kunna:
-skapa en användare /skriva in sitt namn
-se reglerna för spelet
-se en presentation av motspelare/vi bestämde 3st botar(-lätt-medel-svår).  
-välja en bot att spela emot.
-starta spelet
-spela igen
-se en topplista över användare
-se sitt resultat efter spelomgång

Spelet:
Det ska finnas en spelledare som ställer en fråga.
användaren ska kunna gissa på ett tal. 
Få svar av spelledaren om svaret är lägre/högre eller rätt.
Boten gissar på ungefär samma sätt, beroende på vilken bot det är. 

vi har bestämt: spelet ska vara på engelska. 
(shift+alt+f för att fixa koden med prettier-code formatter).

# Bot beteende

Bot 1 -EASY
Gissar alltid på ett random nummer.
Boten vet INTE om spelarens senaste gissning och utgår INTE ifrån den. 
T.ex. om spelaren gissar 50 och svaret är lägre så kan boten gissa högre t.ex. 100. 

Bot 2 -MEDIUM
Gissar på ett random nummer utifrån spelarens senaste gissning.
Boten vet om spelarens senaste gissning och utgår ifrån den.
T.ex. om spelaren gissar 50 och svaret är lägre så gissar boten på ett random nummer under 50, t.ex. 1 eller 49. 

Bot 3 -HARD
Gissar på mitten av nummer utifrån spelarens senaste gissning.
Boten vet om spelarens senaste gissning och utgår ifrån den.
T.ex. om spelaren gissar 50 och svaret är lägre så gissar boten på 25. 


*** Eventuellt som nästa steg i vårt utveckling av spelet, när ovanstående beteeenden är färdiga är att göra boten så smart att den kommer ihåg spelarens ALLA gissningar. 
T.ex.
Om spanet är 0-100.
Spelaren gissar först 50 och får svar att det ska vara lägre. 
Nästa gång gissar spelaren 10 och får svar att det ska vara högre. 
Boten vet nu:
svaret är mindre än 50.
svaret är högre än 10. 

Botens nästa gissning kommer inte vara i mitten av 10-100, eftersom den kommer ihåg att svaret är mindre än 50. 
Boten gissar mellan 10 och 50. alltså gissar den på 30. 
osv. 


## Installation

Kör först kommandot `npm i` för att installera nödvändiga moduler (typescript, etc)
Kör sedan kommandot `npm start` för att starta projektet och se det live i en webbläsare

## TODO
Lägg till ytterliggare information som är specifikt för ert projekt!
