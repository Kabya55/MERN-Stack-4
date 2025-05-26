// Promise - resolve, reject

const hasMeeting = false;
const meetingPromise = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      title: "Project Meeting",
      location: "Google Meet",
      time: "12:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.title} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return new Promise((resolve) => {
    resolve(calendar);
  });

  // return Promise.resolve(calendar);
};

meetingPromise
  .then((meetingDetails) => {
    console.log(JSON.stringify(meetingDetails));
  })
  .catch((error) => {
    console.log(error.message);
  });

//promise chaining
meetingPromise
  .then(addToCalendar)
  .then((calendar) => {
    console.log(calendar);
  })
  .catch((error) => {
    console.log(error.message);
  });
