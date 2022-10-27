// GETTING THE NUMBER ELEMENTS
const number = document.querySelectorAll('.num');
// BUTTON FOR THE FIRST PAGE
const submitBtn = document.querySelector('.btn');
// THE RATING BASED ON THE USERS CHOICE FROM THE FIRST PAGE
const ratedNumber = document.querySelector('.rated-number');

// GETTING PAGES
const ratingPage = document.querySelector('.rating-state');
const tyPage = document.querySelector('.thank-you-state');

// RETURN BUTTON
const returnBtn = document.querySelector('.return');


// This function resets the styling every time that a number is clicked
function defaultNumberStyling () {
    number.forEach((num) => {
        num.style.color = 'hsl(217, 12%, 63%)';
        num.style.backgroundColor = 'hsl(216, 12%, 8%)';

    })
}


// This function sets a new styling to the element clicked
function selecteRatingNumber(){
    number.forEach((num) => num.addEventListener('click', (e) => {
        defaultNumberStyling();
        num.style.backgroundColor = 'hsl(217, 12%, 63%)';
        num.style.color = '#ffffff'
        
        // This event hides the current page and display the thank you state page, at the same time updating the selected number
        submitBtn.addEventListener('click', () => {
            ratingPage.classList.add('active');
            tyPage.classList.add('active');

            ratedNumber.innerHTML = num.innerHTML
        })
    }))
}

selecteRatingNumber()

// This event returns to the intial page if the user change his mind about the rating
    // And resets the styling for the numbers
function mindChanged () {
    returnBtn.addEventListener('click', () => {
        ratingPage.classList.remove('active');
        tyPage.classList.remove('active');
        defaultNumberStyling()
    })
}

mindChanged()