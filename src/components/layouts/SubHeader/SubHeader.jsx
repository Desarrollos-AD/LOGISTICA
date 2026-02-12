import "./SubHeader.scss";

function SubHeader({ title, subtitle, img, alt}) {
  return (
    <div className="subHeader">
      <div className="contenedor">
        <div className="subHeader__contenido">
          <div className="subHeader__contenido--info">
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
          </div>
          <div className="subHeader__contenido--img">
            <img src={img} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
