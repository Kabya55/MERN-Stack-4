console.log("Node.js server simulation");

function processImage(userId) {
  console.log(`User ${userId}: Start image uploading...`);

  // Simulate heavy processing (Non-blocking operation)

  setTimeout(() => {
    console.log(`User ${userId}: Image upload complete.`);
  }, 3000);
}

function newsFeed(userId) {
  console.log(`User ${userId}: Getting feed...`);
}

processImage(1);
newsFeed(2);
processImage(3);
newsFeed(4);
processImage(5);

// Event loop
