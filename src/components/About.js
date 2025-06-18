const About = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4 max-w-2xl mx-auto">
        Welcome to{" "}
        <span className="font-semibold text-yellow-600">Food Zone</span> – Food
        Zone is an online platform where you can explore various restaurants and
        view their menus. It uses the Swiggy API to fetch real-time restaurant
        and food data.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">App Highlights</h2>
        <p className="text-md max-w-xl mx-auto">
          You can search for restaurants, filter top-rated ones, and check
          detailed menus. The app is built using React.js with a clean and
          responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default About;
