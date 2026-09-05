// Question 5: (Adding interactivity features on apple.com website’s footer section)

// The following question is based on the responsive Apple website you built back in phase 1. As
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of the
// website that are provided by JavaScript. You can use apple.com’s responsive code we wrote from
// the link provided below to implement the interactivity of apple.com's footer section.
// Responsive code for apple.com:
// ● click here
// You can refer to apple.com’s live website to check how the footer behaves:
// ● https://www.apple.com/
// In summary, the footer fully displays all the five columns in expanded state while viewed on desktop or tablet size devices. You are required to implement the following mobile size features.
// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the expansion of the sub-links upon onclick event. Add the added "+" sign on the right side of each <h3>. (Hint: everything up to this point can be achieved without using any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3> slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement the following feature)

$(function () {
    // Select every footer heading
    $(".footer-links-wrapper h3").on("click", function () {
        // Only run this behavior on mobile screens
        if (window.matchMedia("(max-width: 768px)").matches) {
            // The heading that was clicked
            const heading = $(this);

            // The ul immediately following that heading
            const links = heading.next("ul");

            // Change the heading between normal and expanded state
            heading.toggleClass("expanded");

            // Open or close the related links
            links.stop(true, true).slideToggle(300);
        }
    });
});

$(window).on("resize", function () {
  if (window.matchMedia("(min-width: 769px)").matches) {
    $(".footer-links-wrapper h3").removeClass("expanded");
    // $(".footer-links-wrapper ul").removeAttr("style");
  }
});

// Question 6: Question on asynchronous JavaScript (promise)
// Visit the link here to find three quizzes. Please provide the output of the code for each
// quiz. Please do not work on the quizzes online, rather create HTML and JavaScript files
// by following the instructions below