// Synchronous  Blocking behavior

console.log("Take order from customer 1");

function processOrder() {
  //   console.log("Processing order for customer 1");

  const currentTime = new Date().getTime();
  while (currentTime + 5000 >= new Date().getTime());
  console.log("Processing order for customer 1");
}

processOrder();
console.log("Completed order for Customer 1");
