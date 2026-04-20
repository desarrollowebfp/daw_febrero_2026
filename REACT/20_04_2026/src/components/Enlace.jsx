import "./Enlace.css";

const Enlace = ({ children }) => {
  return (
    <a href="#null" className="enlace">
      {children}
    </a>
  );
};

export default Enlace;
