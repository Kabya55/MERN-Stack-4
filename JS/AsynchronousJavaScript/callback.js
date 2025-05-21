// Asynchronous Non-Blocking behavior
// Solve flow control problem with Callback

function takeOrder(customer, callback) {
  console.log(`Take order from ${customer}`);
  callback(customer);
}

function processOrder(customer, callback) {
  console.log(`Processing order for ${customer}`);

  // Callback function
  setTimeout(() => {
    console.log(`Cooking done for ${customer}`);
    console.log(`Order processed for ${customer}`);
    callback(customer);
  }, 3000);
}

function completeOrder(customer) {
  console.log(`Completed order for ${customer}`);
}

// Callback pattern
takeOrder("customer 1", (customer) => {
  processOrder(customer, () => {
    completeOrder(customer);
  });
});
