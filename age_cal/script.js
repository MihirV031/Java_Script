    // function agecalculate() {
    //   var date = document.getElementById("date").value;
    //   var month = document.getElementById("month").value;
    //   var year = document.getElementById("year").value;
    //   var today = new Date();
    //   var birthDateObj = new Date(date);
    //   var age = today.getFullYear() - birthDateObj.getFullYear();
    //   var monthDiff = today.getMonth() - birthDateObj.getMonth();

    //   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    //     age--;
    //   }

    //   document.getElementById("final-result").innerHTML = "Your age is: " + age;  
    // }
    function agecalculate(){
        var day = parseInt(document.getElementById('date').value)
        var month = parseInt(document.getElementById('month').value)
        var year = parseInt(document.getElementById('year').value)
        var another_date = parseInt(document.getElementById('another-date').value)
        var another_month = parseInt(document.getElementById('another-month').value)
        var another_year = parseInt(document.getElementById('another-year').value)
        var today = new Date();
        var age_year = another_year - year;
        console.log(age_year);
        var age_month = another_month - month;
        console.log(age_month);
        if(age_month < 0 ){
            age_year--;
            age_month += 12;
        }
        var age_day = another_date - day;
        console.log(age_day);
        if(age_day < 0){
            var last_month = new Date(today.getFullYear(), today.getMonth(), 0);
            age_month--;
            age_day += last_month.getDate();
        }
        var final_result = 'AGE:- '+ age_year+'Years, '+age_month+'Months, '+age_day + 'Days' ;
        document.getElementById('final-result').innerHTML = final_result;
    }