import "./Avatar.css";

const Avatar = ({ username, image, size }) => {
  if (!image) {
    return (
      <div className={`avatar ${size}`}>
        <h2>{username[0]}</h2>
      </div>
    );
  } else {
    return (
      <div className={`avatar ${size}`}>
        <img src={image} alt={`${username} avatar`} />
      </div>
    );
  }
};

export default Avatar;
