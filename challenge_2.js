const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line 



if (hourOfDay === 00 && minuteOfDay === 00) {
    const balance = salary - (salary * parseInt(tax) / 100) - food - transport - rent
    console.log("R"+balance.toFixed(2))
}

