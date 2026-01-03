import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-n-8 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
