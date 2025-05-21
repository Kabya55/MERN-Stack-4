// Asynchronous  Blocking behavior

console.log("Take order from customer 1");

function processOrder() {
  //   console.log("Processing order for customer 1");

  // Callback function
  setTimeout(() => {
    console.log("Order processed for customer 1");
  }, 5000);

  setTimeout(() => {
    console.log("Order processed for customer 2");
  }, 3000);
}

processOrder();
console.log("Completed order for Customer 1");
