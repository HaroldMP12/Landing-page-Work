const Homepage = () => {
    return (
      <div className="home_page flex flex-col md:flex-row justify-center items-center my-10 md:my-20 pr-4 md:pr-20 pl-4 md:pl-56 w-full">
  <div className="w-full md:w-2/4 md:mr-56">
    <h1 className="text-left text-3xl">Welcome to Design Your Dream.</h1>
    <h2 className="text-left mt-6 text-xl">Where we make your interior design dreams a reality. Let us guide you through the process of creating a space that reflects your style and personality. Our team of highly trained designers is here to help bring your ideas to life.</h2>
    <p className="text-left mt-6 italic text-lg">"Bring your home to life with the design of your dreams."</p>
    <button className="bg-white rounded-md text-black p-2 mt-5 border border-black hover:bg-indigo-600">Let's Get Started</button>
  </div>
  <div className="w-full md:w-2/4 md:ml-4 md:mt-0">
    <img src="img/House.jpg" alt="House Pic" className="w-full rounded-md mt-2"/>
  </div>
</div>
    );
  };
  
  export default Homepage;