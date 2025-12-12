jQuery(document).ready(function() {
    $('form').hide();
    $('.checkout-btn').click(function() {
        $('form').show();
    });
});


function formValidation() {
    let forms = document.forms[0];
    let name = forms.name.value.trim();
    let card = forms.card.value.trim();
    let exp_date = forms.exp_date.value;
    let cvv = forms.cvv.value.trim();

    // Reset styles
    forms.name.style.border = "1px solid #ccc";
    forms.card.style.border = "1px solid #ccc";
    forms.exp_date.style.border = "1px solid #ccc";
    forms.cvv.style.border = "1px solid #ccc";

    // Validation
    if (name === "") {
        alert("Name field must not be empty");
        forms.name.style.border = "2px solid red";
        return false;
    };

    if (card === "" || card.length < 12) {
        alert("Please enter a valid card number");
        forms.card.style.border = "2px solid red";
        return false;
    };

    if (exp_date === "") {
        alert("Please enter your card's expiration date");
        forms.exp_date.style.border = "2px solid red";
        return false;
    };

    if (cvv === "" || cvv.length < 3) {
        alert("Please enter a valid CVV");
        forms.cvv.style.border = "2px solid red";
        return false;
    };

    alert("Payment Submitted Successfully");
    return true;
}