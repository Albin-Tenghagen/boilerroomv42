Uppgift:
Utveckla en utökad kalkylator som kan hantera flera operationer, inkluderar en meny för användarval och förbättrad felhantering.
Integrera följande ämnen i er kalkylator:
If-satser och ternär operator för beslutstagande.
Loopar (for, while, do-while) för att upprepa handlingar.
Switch-satser för att hantera användarens val av operation.

Grundläggande Funktionalitet
Meny för Användarval:
Kalkylatorn ska visa en meny med tillgängliga operationer.
Använd en switch-sats för att hantera användarens val.
Exempel på operationer:
Addition (+)
Subtraktion (-)
Multiplikation (*)
Division (/)
Exponentiering (^)
Modulus (%)
Avsluta programmet
Användarinteraktion:    
Använd loopar för att låta användaren utföra flera beräkningar utan att starta om programmet.
Efter varje beräkning ska användaren få möjlighet att återgå till menyn eller avsluta.
Beslutstagande och Logik:
Använd if-satser och ternär operator för att hantera felkontroll och validering av användarinmatning.
Implementera felhantering för ogiltig inmatning (t.ex. division med noll, ogiltiga val i menyn).
Användning av Loopar:
For-loopar: Används där det är lämpligt, t.ex. för att visa historik eller utföra repetitiva beräkningar.
While- och Do-while-loopar: Används för att kontrollera om programmet ska fortsätta köras eller avslutas.

Samma commit från boilerroom / Thai

console.log("JavaScript file loaded!");

// Globala variabler för att lagra siffror och operator
let firstInput = null;
let secondInput = null;
let operator = null;

function sparaSiffra1(button) {
    firstInput = Number(button.textContent); // Tilldelar värdet till den globala variabeln
    console.log("Första siffran:", firstInput);
}

function operator1(button) {
    operator = button.textContent; // Tilldelar operatorn till den globala variabeln
    console.log("Operator:", operator);
}

function sparaSiffra2(button) {
    secondInput = Number(button.textContent); // Tilldelar värdet till den globala variabeln
    console.log("Andra siffran:", secondInput);
}

function calculation() {
    let continueCalculation = true;

    do {
        // Kontrollera om alla värden är tilldelade
        if (firstInput === null || secondInput === null || operator === null) {
            alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
            return;
        }

        let result;

        switch (operator) {
            case '+':
                result = firstInput + secondInput;
                break;
            case '-':
                result = firstInput - secondInput;
                break;
            case '/':
                if (secondInput === 0) {
                    alert('Kan inte dividera med noll!');
                    return;
                }
                result = firstInput / secondInput;
                break;
            case '*':
                result = firstInput * secondInput;
                break;
            case '%':
                result = firstInput % secondInput;
                break;
            case '**':
                result = firstInput ** secondInput;
                break;
            default:
                alert('Ogiltigt räknesätt, försök igen');
                return;
        }

        console.log(`Resultat: ${result}`);

        // Frågar om användaren vill fortsätta och läser in svaret
        let ternaryChoice = prompt('Vill du fortsätta? "Ja" eller "Nej"').toLowerCase();
        continueCalculation = ternaryChoice === "ja" ? true : false;

        if (continueCalculation) {
            // Återställ variabler för en ny beräkning
            firstInput = null;
            secondInput = null;
            operator = null;
        }

    } while (continueCalculation === true);
}




För att behålla looparna från den ursprungliga koden, kan vi återintroducera do-while-loopen i calculation()-funktionen och säkerställa att användaren kan fortsätta med beräkningarna tills de väljer att avsluta. Koden nedan innehåller loopar och uppdaterar de globala variablerna i varje iteration. Varje gång en ny beräkning ska göras, nollställs variablerna för att förbereda för en ny användarinmatning.

Sammanfattning av förändringar:
do-while-loop i calculation()-funktionen för att kunna köra flera beräkningar tills användaren väljer att avsluta.
Återställning av variabler för varje ny beräkning för att möjliggöra inmatning av nya värden.