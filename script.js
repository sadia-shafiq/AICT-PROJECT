 // form validation
  function validateForm(){
    let name= document.getElementById("name").value;
    let iD=document.getElementById("studentid").value;
    let dep=document.getElementById("dep").value;
    let email=document.getElementById("email").value;


    if (name === "" || dep === "" || email === "") {
    alert("All fields are required");
    return false;
}

     
    let regex=/^cs\d{6}$/i;

    if (regex.test(iD)) {

         document.getElementById("subSel").style.display = "block";
        return false;
    } else {
        alert("Invalid ID. Format should be cs123456");
        return false;
    }

    
}


  

//  function called when any subject is selected 
  document.getElementById("qbtn").onclick = function () {
    let subject = document.getElementById("sub").value;

    
    document.getElementById("mathQuiz").style.display = "none";
    document.getElementById("sciQuiz").style.display = "none";

    if (subject === "math") {
        document.getElementById("mathQuiz").style.display = "block";
        document.getElementById("info").style.display = "none";
        document.getElementById("subSel").style.display = "none";
    } 
    else if (subject === "science") {
        document.getElementById("sciQuiz").style.display = "block";
        document.getElementById("info").style.display = "none";
        document.getElementById("subSel").style.display = "none";
    } 
    else {
        alert("Please select a subject");
    }
};


function getRemark(score) {
    if(score >= 9) return "Excellent!";
    else if(score >= 7) return "Good!";
    else if(score >= 5) return "Average!";
    else return "Needs Improvement!";
}


//    for checking math

   document.getElementById("mathbtn").onclick = function checkMath() {
    var score = 0;

    // Q1
    if(document.getElementsByName("q1")[0].checked) score++;

    // Q2
    if(document.getElementsByName("q2")[0].checked) score++;

    // Q3
    if(document.getElementsByName("q3")[0].checked) score++;

    // Q4
    if(document.getElementsByName("q4")[0].checked) score++;

    // Q5
    if(document.getElementsByName("q5")[0].checked) score++;

    // Q6
    if(document.getElementsByName("q6")[0].checked) score++;

    // Q7
    if(document.getElementsByName("q7")[0].checked) score++;

    // Q8
    if(document.getElementsByName("q8")[0].checked) score++;

    // Q9
    if(document.getElementsByName("q9")[0].checked) score++;

    // Q10
    if(document.getElementsByName("q10")[0].checked) score++;

   
document.getElementById("mathQuiz").style.display = "none";

   
    document.getElementById("marksheet").style.display = "block";

    
    document.getElementById("studentName").innerHTML = "Name: " + document.getElementById("name").value;
    document.getElementById("studentID").innerHTML = "ID: " + document.getElementById("studentid").value;
    document.getElementById("subject").innerHTML = "Subject: Math";
    document.getElementById("score").innerHTML = "Score: " + score + " / 10";

    document.getElementById("remark").innerHTML = "Remark: " + getRemark(score);

   }


    // for checking science
    document.getElementById("scibtn").onclick=function checkScience() {
    
    var score = 0;

    // Q1
    if(document.getElementsByName("sq1")[2].checked) score++;

    // Q2
    if(document.getElementsByName("sq2")[2].checked) score++;

    // Q3
    if(document.getElementsByName("sq3")[1].checked) score++;

    // Q4
    if(document.getElementsByName("sq4")[2].checked) score++;

    // Q5
    if(document.getElementsByName("sq5")[2].checked) score++;

    // Q6
    if(document.getElementsByName("sq6")[2].checked) score++;

    // Q7
    if(document.getElementsByName("sq7")[3].checked) score++;

    // Q8
    if(document.getElementsByName("sq8")[2].checked) score++;

    // Q9
    if(document.getElementsByName("sq9")[2].checked) score++;

    // Q10
    if(document.getElementsByName("sq10")[2].checked) score++;


    document.getElementById("sciQuiz").style.display = "none";
     
 
    document.getElementById("marksheet").style.display = "block";

    
    document.getElementById("studentName").innerHTML = "Name: " + document.getElementById("name").value;
    document.getElementById("studentID").innerHTML = "ID: " + document.getElementById("studentid").value;
    document.getElementById("subject").innerHTML = "Subject: Science";
    document.getElementById("score").innerHTML = "Score: " + score + " / 10";

    document.getElementById("remark").innerHTML = "Remark: " + getRemark(score);

    }