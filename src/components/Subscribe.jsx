import PropTypes from "prop-types";

export const Subscribe = ({ setIsSubscribed, errorEmail, setErrorEmail  }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubscribed(true)
      setErrorEmail(false)
    } else {
      setErrorEmail(true)
    }
  }
  return (
    <div className="flex flex-col">
      <form className="w-80 ml-8 mr-8 mb-8 lg:ml-0 lg:w-[400px]" onSubmit={handleSubmit} noValidate>
        <div className="flex justify-between">
          <label htmlFor="email" className="block">Email address</label>
          <label
            htmlFor="error"
            className={`text-red ${errorEmail ? "block" : "hidden"}`}>Valid email required
          </label>
        </div>
        <input
          className="w-full border mb-4 border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          required/>
        <button
          type="submit"
          className="h-12 bg-blue800 rounded-lg w-80 text-white font-semibold cursor-pointer
          lg:w-[400px] lg:mt-4 hover:bg-custom-gradient">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  )
}

Subscribe.propTypes = {
  setIsSubscribed: PropTypes.func.isRequired,
  errorEmail:PropTypes.bool.isRequired,
  setErrorEmail: PropTypes.func.isRequired,
}