const claciNumber = document.querySelectorAll(".calciNumber");
const display = document.getElementById("display");
const backButton = document.querySelector("#backButton");
const clear = document.querySelector(".delete")
const equals = document.querySelector(".equals");
// Main part
var empty = "";
claciNumber.forEach((num)=> {
    num.addEventListener("click", (e)=> {
        e.preventDefault();
        empty += e.target.dataset.val;   
        display.value = empty;     
    });
});
backButton.addEventListener("click" ,(e)=> {
    e.preventDefault(); 
    empty = empty.slice(0,empty.length-1);
    display.value = empty;     
});
clear.addEventListener("click", (e)=> {
    e.preventDefault();
    empty = "";
    display.value = empty;
});
equals.addEventListener("click", (e)=> {
    e.preventDefault();
    evalString = "";
    if(claciNumber.length) {
        let n = Number(empty[0]);
        function factorial(n) {
            let ans = 1; 
            if (n===0) {
                return 1;
            }
             for (let i = 2; i <= n; i++) {
                ans = ans * i; 
             }
             return ans; 
        }
        const evalString = empty
            .replace(/x/g,"*")
            .replace(/\^/g,"**")
            .replace(/√/g, "Math.sqrt")
            .replace(/π/g,"Math.PI")
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/log/g, "Math.log")
            .replace(/tan/g, "Math.tan")
            .replace(/ln/g, "Math.log10")
            .replace(/e/g, "Math.E")
            .replace(/x/g,"*");

        if (display.value == `${n}!${empty.slice(2,empty.length)}`) {
            display.value = `${factorial(n)}`
        } 
        else {
            display.value = eval(evalString)
        }
       
    }
    empty="";


});

