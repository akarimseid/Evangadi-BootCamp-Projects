// The first two questions are the same questions you solved last week using vanilla JavaScript. You
// will be using jQuery this time round.


// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.

const sample1 = $("#sample1")
// 1.2. Print the element itself on the console upon page refresh.

console.log(sample1);
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element
console.log(sample1.text());

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.

const techCompanies = $("#techCompanies");
console.log(techCompanies);
console.log(techCompanies.text());

// 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?

const totalCompanies = $("#techCompanies li").length;
console.log(totalCompanies);

// 2.3. Select all elements with a class of "red" and display them on the console.

const redElements = $(".red")
console.log(redElements);

// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

const newItem = $("<li> Facebook</li>");
console.log(newItem);

// 2.5. Give the newly created element a class of "blue" using jQuery
newItem.addClass("blue");

// 2.6. Append the newly created element next to the the "Sony" <li> element
// techCompanies.append(newItem);
$("#techCompanies").append(newItem);

// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.

const totalBlue = $("#techCompanies .blue").length;
console.log(totalBlue);
const result = $("#blueCompanies").append(`Total number of elements labeled as blue is ${totalBlue}`);


// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form

const firstForm = $("#firstForm");
const resultBoxSum = $("#dsum");
const resultBoxProduct = $("#dvg");

firstForm.on("submit", (event)=> {
    event.preventDefault();

    const firstValue =$('#in1').val();
    const secondValue = $('#in2').val();

    const firstInput = Number(firstValue);
    const secondInput = Number(firstValue);

    if (isNaN(firstInput) || isNaN(secondInput)){
        $("#dsum").append("<p> Please Enter numerical value only</p>");
        return;
    }
    const sum = firstInput + secondInput;
    const average = (firstInput + secondInput)/2;
     
    console.log(average);
    console.log(sum);

    $("#davg").text(average);
    $("#dsum").text(sum);
})

// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email address.
// All the fields should be labeled as required. Once the user submits, write a JavaScript function
// that checks if all the fields are provided. If not, it should show an error message above the form.
// If the user provides all the values, hide the form input fields, and display all the values provided by the user on the browser.