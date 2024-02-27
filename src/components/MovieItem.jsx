export default function MovieItem({ img, title, type, id, year }) {
  return (
    <div id={id} className="card movie">
      <div className="card-image">
        <img src={img !== "N/A"? img : `https://via.placeholder.com/300x400?text=${title}` } alt="Film poster" />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>
          {year}
          <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}
