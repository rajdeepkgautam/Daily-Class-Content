console.log("Running");
// example of global execution and functional execution context in this two phase will create like 
// creation and execution.
var number=2;
function square (n)
{
    var result=n*n;
    return result;
}
var newnumber=square(3);
console.log("square of 3 i.e 9")