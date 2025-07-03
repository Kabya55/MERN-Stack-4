import React from "react";

function About() {
  return (
    // <div className="max-w-7xl mx-auto px-4 py-8">
    //   <h2 className="text-3xl font-bold mb-6">About Us</h2>
    //   <p className="text-gray-700">
    //     We are a team of passionate individuals committed to providing the best
    //     online shopping experience. Our platform offers a wide range of products
    //     to cater to your needs.
    //   </p>
    //   <p className="text-gray-700 mt-4">
    //     Our mission is to deliver high-quality products at competitive prices,
    //     while ensuring exceptional customer service. We believe in building
    //     lasting relationships with our customers and value your feedback.
    //   </p>
    // </div>
    <>
      <h1 className="text-2xl font-bold mb-4">About Our Store</h1>
      <p className="mb-4">
        Welcome to our simple React E-commerce store! This project is built as a
        frontend-only demo to showcase core e-commerce functionality such as
        product listing, product details, cart management, and routing — all
        without a backend.
      </p>
      <p className="mb-4">
        The application is developed using <strong>React</strong> and{" "}
        <strong>React Router</strong>, with cart state management handled by{" "}
        <strong>React Context API</strong>. It focuses on clean design, smooth
        navigation, and a responsive layout to ensure a user-friendly experience
        across devices.
      </p>
      <p className="mb-4">
        This store is for educational and demonstration purposes only. No real
        transactions or user accounts are involved.
      </p>
      <p className="text-sm text-gray-500">
        Thank you for visiting our store demo. Happy coding!
      </p>
    </>
  );
}

export default About;
