import PropTypes from "prop-types";

export const Subscribe = ({setIsSubscribed}) => {
  return (
    <div className="flex flex-col">
      <form className="w-80 ml-8 mr-8 mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubscribed(true)
      }}>
        <label htmlFor="email" className="block">Email address</label>
        <input
          className="w-full border mb-4 border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
          id="email"
          type="email" 
          name="email"
          placeholder="email@company.com"
          required />
        <button type="submit"
          className="h-12 bg-blue800 rounded-lg w-80 text-white font-semibold cursor-pointer">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  )
}

Subscribe.propTypes = {
  setIsSubscribed: PropTypes.func.isRequired
}