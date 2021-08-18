// finding largest number

var doctorErPola = 2344;
var bankerErPola = 4534;
var engineerErPola = 45645;


// compare 1
if (doctorErPola > bankerErPola && doctorErPola > engineerErPola) {
    console.log('Doctorer pola is bigger');
}
else if (bankerErPola > doctorErPola && bankerErPola > engineerErPola) {
    console.log('banker er pola is bigger');
}
else {
    console.log('Engineer er pola is bigger');
}

// compare 2
var max = Math.max(doctorErPola, bankerErPola, engineerErPola);
console.log('Bigger is :', max);


// compare 2
function largest(doctorErPola, bankerErPola, engineerErPola) {
    if (doctorErPola > bankerErPola && doctorErPola > engineerErPola) {
        return doctorErPola;
    }
    else if (bankerErPola > doctorErPola && bankerErPola > engineerErPola) {
        return bankerErPola;
    }
    else {
        return engineerErPola;
    }
}

const powerful = largest(5245, 6535, 74646);
console.log('the powerful is:', powerful);

// finding smallest number
var doctorErPola = 2344;
var bankerErPola = 4534;
var engineerErPola = 45645;


// compare 1
if (doctorErPola < bankerErPola && doctorErPola < engineerErPola) {
    console.log('Doctorer pola is Smallest');
}
else if (bankerErPola < doctorErPola && bankerErPola < engineerErPola) {
    console.log('banker er pola is Smallest');
}
else {
    console.log('Engineer er pola is Smallest');
}
// compare 2
var min = Math.min(doctorErPola, bankerErPola, engineerErPola);
console.log('smalltiny :', min);


// compare 3
function smallest(doctorErPola, bankerErPola, engineerErPola) {
    if (doctorErPola < bankerErPola && doctorErPola < engineerErPola) {
        return doctorErPola;
    }
    else if (bankerErPola < doctorErPola && bankerErPola < engineerErPola) {
        return bankerErPola;
    }
    else {
        return engineerErPola;
    }
}

const poor = smallest(5245, 6535, 74646);
console.log('the Smallest is:', poor);

