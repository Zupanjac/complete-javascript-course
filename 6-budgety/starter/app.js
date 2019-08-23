// Budget controller
var BudgetController = (function() {

})(); 

// UI controller
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type', 
        inputDescription: '.add__description' ,
        inputValue: '.add__value', 
        inputButton: '.add__btn' 
    }
    return {
        getInput: function() {
            return {
            /**
            * @type HTMLInputElement
            */
            type:  document.querySelector(DOMStrings.inputType).value,
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value,
        }
    }, 
        getDOMString: function() {
            return DOMStrings;
        } 
};
})();

// Global app controller
var controller = (function (budgCtr, UICt) {

    var DOM = UICt.getDOMString();
    var ctrlAddItem = function () {
        var input = UICt.getInput(); 
        console.log(input);
        // 1. Get the field input data 
        // 2. Add the item to the bugdet controller
        // 3. Add new iterm to the user interface
        // 4. Calculate the budget
        // 5. Display the budget
    }
    document.querySelector(DOM.inputButton).addEventListener('click', 
    ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem(); 
        }
    });

})(BudgetController, UIController); 

