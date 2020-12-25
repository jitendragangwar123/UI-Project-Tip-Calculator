//Variables declared Globally
let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let person = document.getElementById('person');

//calc Class is created
class calc {

    // Method is created for the tip and total tip per person calculation
    calculation() {
        //strings are converted to number
        bill = Number(bill.value);
        tip = Number(tip.value);
        person = Number(person.value);

        /*
        cheching the conditions for the Bill Amount
        Bill always be greater than $0.00
        It should be a Number
        */
       //Exception Handling using Try-Catch
        if (bill <= 0 || isNaN(bill)) {
            try {
                if (isNaN(bill))
                    throw "Bill Amount should always be a Number Only";
                if (bill <= 0)
                    throw "Bill Amount can't be less than equal to 0";
            }
            catch (excp) {
                alert('Please Enter Valid Bill Amount. \n\nError: ' + excp)
                window.location.reload(1); //used to refresh page, whenever any exception occurs

            }
        }
        //cheching the conditions for tip
        // Bill always be greater than 0 %
        else if (tip < 0 ) {
            try {
                if (tip < 0)
                    throw "Tip % can't be less than 0 %";
            }
            catch (excp) {
                alert('Please Enter Valid Tip %. \n\nError: ' + excp)
                window.location.reload(1);//used to refresh page, whenever any exception occurs

            }
        }
        //cheching the conditions for the Number of Persons
        // No of person should always be greater than 0
        // It should be a Natural Number [floor() is used to get floor value]
        else if (person <= 0 || Math.floor(person) != person) {
            try {
                if (person <= 0)
                    throw "Number of Person can't be less than equal to 0";
                if (Math.floor(person) != person)
                    throw "Number of Person should always be a Natural Number Only";
            }
            catch (excp) {
                alert('Please Enter Valid Number of Person. \n\nError: ' + excp)
                window.location.reload(1);//used to refresh page, whenever any exception occurs
            }
        }
        else {
            //ToFixed(2) is used to calculate the result to the 2 decimal places
            let x = tip / 100 * bill;
            tippp.value = "$ " + (x / person).toFixed(2);

            let y = bill + x;
            total.value = "$ " + (y / person).toFixed(2);

            //refresh after every 5 seconds
            /*setTimeout(function () {
                window.location.reload(1);
            }, 5000);*/
        }
    }
}
//Object of class is created, to access the members of the class
let c = new calc();

//Onclick, funtion will be called and execution will takes place
calculate.addEventListener('click', c.calculation);


