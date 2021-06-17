const Episode = ({
  title,
  description,
  url,
  number,
  detail,
  align,
  alt,
  img,
}) => {
  return (
    <div className="episode">
      <h1 style={{ textAlign: align }}>#{number}</h1>
      <hr />
      <h2>
        <b>{title}</b>
      </h2>
      <h4>{description}</h4>
      <div className="my-4 row">
        <div className="col-8">
          <iframe
            title={`spotify ${number}`}
            src={url}
            width="100%"
            height="100%"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="col-4">
          <div>
            <img
              
              src={img}
              alt="episode"
            />
          </div>
        </div>
      </div>
      <p>{detail}</p>
    </div>
  );
};

export default Episode;
