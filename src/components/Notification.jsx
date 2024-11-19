import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  if (!message) return null;

  return (
    <div className="absolute top-0 right-0 mt-4 mr-4 bg-pink-500 text-white p-2 rounded shadow-lg">
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
