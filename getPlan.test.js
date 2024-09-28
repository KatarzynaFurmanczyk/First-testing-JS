const { getPlan } = require('./getPlan');

test('should return an array', () => {
    const goals = getPlan(200, 3, 50);

    expect(goals).toBeInstanceOf(Array);
});

test('should return array of a given length', () => {
    const goals = getPlan(200, 3, 50);

    expect(goals).toHaveLength(3);
});

test('should return expected values', () => {
    const goals = getPlan(200, 3, 50);

    expect(goals).toEqual([300, 450, 675]);
});


// ostatni test zawiera w sobie pozostełe dwa testy, bo spodziewa się tablicy, bo używamy [], a w pierwszym teście oczekujemy tablicy

// drugi test mówi, że tablia ma mieć długość 3, a ostatni test ma ws sobie 3 elementy, więc sprawdza tę samą rzecz

// trzeci byłby w zupełności wystarczający do spawdzenia tych trzeh rzeczy

//testy mają sprawdzac konrektne use casies, czyli sposoby, w jakich ta funkcja będzie używana => polegamy na specyfikacji i dokumentacji; sprawdzamy czy nasz test pokrywa różne przypadki => jeden test może pokryć wiele przypadków ;

// czsem wiele testów != dobrze; w przypadku zmiany wymagań będziemhy musieli dostosować wszystkie testy 

test('should return expected values when no rounding is require', () => {
    const goals = getPlan(100, 4, 100);

    expect(goals).toEqual([200, 400, 800, 1600]);
});

test('should return 0 for 0 startProduction', () => {
    const goals = getPlan(0, 4, 100);

    expect(goals).toEqual([0, 0, 0, 0]);
});

test('should return empty array for 0 numberOfMonths', () => {
    const goals = getPlan(100, 0, 100);

    expect(goals).toEqual([]);
});

test('should return fixed production for 0 percent', () => {
    const goals = getPlan(100, 4, 0);

    expect(goals).toEqual([100, 100, 100, 100]);
});

test('should round values', () => {
    const goals = getPlan(10, 4, 30);

    expect(goals).toEqual([13, 16, 20, 26]);
});

// testy od linii 32 to zastosowana technika wynaczania testów: technika klas równoważności - sprawdzają jak się zachowa funkcja dla szczególnych typów danych => tetsy jednostkowe sprawdzają różne skrajne przypadki, zeby zobaczyć czy nasza funkcja działa poprawnie