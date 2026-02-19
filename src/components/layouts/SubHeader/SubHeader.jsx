import "./SubHeader.scss";
import { motion } from "framer-motion";

function SubHeader({ title, subtitle, img, alt }) {
  return (
    <div className="subHeader">
      <div className="contenedor">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="subHeader__contenido"
        >
          <div className="subHeader__contenido--info">
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
          </div>
          <div className="subHeader__contenido--img">
            <img src={img} alt={alt} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SubHeader;
