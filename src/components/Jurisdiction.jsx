import React, { useState, useEffect } from 'react';

const Jurisdiction = (props) => {
  let { parallaxTestimonial } = props;
  let { bgTestimonial } = props;

  const [countriesByContinent, setCountriesByContinent] = useState({});
  const [selectedContinent, setSelectedContinent] = useState('All'); // Default to 'All' continents
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCountriesGroupedByContinent() {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();

        const countriesByContinent = {
          All: data.map(country => ({
            name: country.name,
            flag: country.flags.png,
          })),
        };

        data.forEach(country => {
          const continent = country.region;
          if (!countriesByContinent[continent]) {
            countriesByContinent[continent] = [];
          }

          countriesByContinent[continent].push({
            name: country.name,
            flag: country.flags.png,
          });
        });

        setCountriesByContinent(countriesByContinent);
        setIsLoading(false); // Data fetching is done
      } catch (error) {
        console.error('Error fetching countries:', error);
        setIsLoading(false); // Data fetching failed
      }
    }

    fetchCountriesGroupedByContinent();
  }, []);

  const handleContinentClick = continent => {
    setSelectedContinent(continent);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countriesByContinent[selectedContinent]?.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className={`${parallaxTestimonial} ${bgTestimonial} testimonial-area te-pt-90 te-pb-80 te-md-pt-80 te-md-pb-60 te-sm-pt-40 te-sm-pb-50`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 offset-lg-1 ">
              <div className="sec-title">
                <h1>Our Global Reach</h1>
                <p>Camitrade fiduciaries delivers a comprehensive range of services spanning multiple jurisdictions. With our team situated across the globe, we are excellently positioned to cater to the needs of our international clients around the clock, every day of the year.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='continents-container '>
              {Object.keys(countriesByContinent)?.map(continent => (
                <div
                  key={continent}
                  onClick={() => handleContinentClick(continent)}
                  className={`continent ${selectedContinent === continent ? 'active' : ''}`}
                >
                  {continent}
                </div>
              ))}
            </div>

            <div>
              <br />
              <div className='country-search'>
                <input
                  type='text'
                  placeholder='Search countries...'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className='country-container'>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  filteredCountries?.map(country => (
                    <div key={country.name} className='country'>
                      <img src={country.flag} alt={country.name} width='60' />
                      <p>{country.name}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jurisdiction;
