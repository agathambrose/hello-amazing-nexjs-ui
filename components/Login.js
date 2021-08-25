import Link from "next/link"

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault
  }
  
  return (
    <div className="w-full max-w-xs">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="username"
          >
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="you@mail.com"
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-1 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block text-xs font-bold text-black align-baseline hover:text-green-800"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="inline-block text-xs font-bold text-green-500 align-baseline hover:text-green-800"
            href="#"
          >
            Additional Support?
          </a>
        </div>
        <div>
          <button
            className="w-full py-2 mt-3 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            <Link href="/admin">
              <a>Sign In</a>
            </Link>
          </button>
        </div>
      </form>
      <p className="text-xs text-center text-gray-500">
        &copy;2021 Hello Amazing. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
