import ImagePicker from "@/components/Signup/ImagePicker";

export default function Signup() {
  return (
    <div className="flex justify-center items-center m-8">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="recipient">Recipient</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <ImagePicker />
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
