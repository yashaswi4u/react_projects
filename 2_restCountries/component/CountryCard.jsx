

export default function CountryCard({name,flag,capital}) {
   
  return (
    <a className="country-card" href="/country.html?name=South Korea">
      <img src={flag} alt={name} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>5,17,80,579
        </p>
        <p>
          <b>Region: </b>Asia
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  );
}
