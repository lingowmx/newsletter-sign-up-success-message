import listIcon from "../../assets/images/icon-list.svg"
import PropTypes from 'prop-types';

export const Success = ({setIsSubscribed}) => {
  return (
    <div className="h-screen">
      <div className="p-8 mt-24 mb-24">
        <img src={listIcon} alt="list-icon" className="w-16 h-16 mb-8"/>
        <h1 className="font-semibold text-5xl">Thanks for subscribing!</h1>
        <p className="mt-4 leading-7">A confirmation email has been sent to 
          <span className="font-semibold"> ash@loremcompany.com</span>
          Please open it and click the button to confirm your subscription</p>
      </div>
      <button onClick={() => setIsSubscribed(false)}
      className="h-12 bg-blue800 rounded-lg w-80 m-8 text-white font-semibold cursor-pointer">
        Dismiss message
      </button>
    </div>
  )
}

Success.propTypes = {
  setIsSubscribed: PropTypes.func.isRequired
}