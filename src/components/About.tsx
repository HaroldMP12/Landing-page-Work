const About = () => {
    return (
        <div className="about_page flex flex-col md:flex-row justify-center items-center my-10 md:my-20 pr-4 md:pr-20 pl-4 md:pl-56 w-full bg-neutral-400 p-5">
    <div className="w-full md:w-2/4 md:mr-56">
    <h1 className="text-center text-3xl text-black underline">About Us.</h1>
    <h2 className="text-left mt-6 text-lg text-black">Design Your Dream was founded with a simple idea in mind: to help people transform their living spaces into their dream homes. Our passion for interior design and attention to detail has allowed us to create stunning and functional spaces that reflect our clients unique styles and personalities.</h2>
    </div>
    <div className="w-full md:w-2/4 md:ml-4 md:mt-0">
        <img src="img/Design.jpg" alt="Design Pic" className="w-full rounded-md mt-2"/>
    </div>
</div>
);
}
export default About;