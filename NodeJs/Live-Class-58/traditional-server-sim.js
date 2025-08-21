console.log("Traditional server simulation started...");
console.log("Handling 5 user requests...");

function processImage(userId) {
  console.log(`User ${userId}: Start image uploading...`);

  // Simulate heavy processing (blocking operation)

  const start = Date.now();
  while (Date.now() - start < 3000) {
    //blocking 3 seconds per upload
  }
  console.log(`User ${userId}: Image upload complete.`);
}

function newsFeed(userId) {
  console.log(`User ${userId}: Getting feed...`);
}

processImage(1);
newsFeed(2);
processImage(3);
newsFeed(4);
processImage(5);
