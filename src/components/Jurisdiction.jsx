import React, { useState, useEffect } from 'react';

const Jurisdiction = (props) => {
  let { parallaxTestimonial } = props;
  let { bgTestimonial } = props;

  const [countriesByContinent, setCountriesByContinent] = useState({});
  const [expandedContinents, setExpandedContinents] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Continent order for better display
  const continentOrder = ['Europe', 'Americas', 'Oceania', 'Polar', 'Africa', 'Asia'];

  useEffect(() => {
    async function fetchCountriesGroupedByContinent() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,subregion');
        const data = await response.json();

        const countriesByContinent = {};

        data.forEach(country => {
          // Use region as continent, fallback to subregion if region is empty
          let continent = country.region || country.subregion || 'Other';
          
          // Normalize continent names
          if (continent === 'Americas') {
            // Split Americas into North and South America
            if (country.subregion === 'South America' || country.subregion === 'Central America' || country.subregion === 'Caribbean') {
              continent = 'South America';
            } else if (country.subregion === 'Northern America') {
              continent = 'North America';
            } else {
              continent = 'Americas';
            }
          }

          if (!countriesByContinent[continent]) {
            countriesByContinent[continent] = [];
          }

          countriesByContinent[continent].push({
            name: country.name.common || country.name,
            flag: country.flags.png || country.flags.svg,
          });
        });

        // Sort countries within each continent alphabetically
        Object.keys(countriesByContinent).forEach(continent => {
          countriesByContinent[continent].sort((a, b) => a.name.localeCompare(b.name));
        });

        setCountriesByContinent(countriesByContinent);
        
        // Expand all continents by default
        const allExpanded = {};
        Object.keys(countriesByContinent).forEach(continent => {
          allExpanded[continent] = true;
        });
        setExpandedContinents(allExpanded);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setIsLoading(false);
      }
    }

    fetchCountriesGroupedByContinent();
  }, []);

  const toggleContinent = continent => {
    setExpandedContinents(prev => ({
      ...prev,
      [continent]: !prev[continent]
    }));
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filterCountries = (countries) => {
    if (!searchQuery) return countries;
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get sorted continent keys
  const getSortedContinents = () => {
    const allContinents = Object.keys(countriesByContinent);
    const ordered = continentOrder.filter(c => allContinents.includes(c));
    const others = allContinents.filter(c => !continentOrder.includes(c)).sort();
    return [...ordered, ...others];
  };

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
            <div className='country-search'>
              <input
                type='text'
                placeholder='Search countries...'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>Loading countries...</div>
            ) : (
              getSortedContinents().map(continent => {
                const countries = filterCountries(countriesByContinent[continent] || []);
                const isExpanded = expandedContinents[continent];
                const countryCount = countriesByContinent[continent]?.length || 0;

                if (countries.length === 0 && searchQuery) return null;

                return (
                  <div key={continent} className="continent-section">
                    <div 
                      className="continent-header"
                      onClick={() => toggleContinent(continent)}
                    >
                      <h2 className="continent-title">
                        {continent}
                        <span className="country-count">({countryCount} {countryCount === 1 ? 'country' : 'countries'})</span>
                      </h2>
                      <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
                    </div>
                    {isExpanded && (
                      <div className='country-container'>
                        {countries.length > 0 ? (
                          countries.map(country => (
                            <div key={country.name} className='country'>
                              <img 
                                src={country.flag} 
                                alt={`${country.name} flag`} 
                                className="country-flag"
                                loading="lazy"
                              />
                              <p>{country.name}</p>
                            </div>
                          ))
                        ) : (
                          <div className="no-results">No countries found matching your search.</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jurisdiction;
