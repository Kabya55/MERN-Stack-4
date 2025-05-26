// async/await example
// async function promise are ak ta blit in function
// async function er modha await use kora hoy
// async function er modha await use kora hoy tahole take async function bole

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

async function meeting() {
  try {
    const meetingDetails = await meetingPromise;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  } catch (error) {
    console.log(error.message);
  }
}
meeting();
