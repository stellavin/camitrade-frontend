import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

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
      <section className="jurisdictions-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <Fade bottom delay={200}>
                <div className="sec-title corporate-title">
                  <span className="section-label">Global Presence</span>
                  <h1>Our Global Reach</h1>
                  <p className="section-subtitle">
                    Camitrade fiduciaries delivers a comprehensive range of <Link to="/corporate-services">services</Link> spanning multiple jurisdictions. With our team situated across the globe, we are excellently positioned to cater to the needs of our international clients around the clock, every day of the year. Explore our <Link to="/licensing-services">licensing services</Link> and <Link to="/contact">contact our global advisors</Link> to discuss your jurisdictional needs.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
          <Fade bottom delay={300}>
            <div className="jurisdiction-search-wrapper">
              <div className='country-search-corporate'>
                <i className="icofont-search-1"></i>
                <input
                  type='text'
                  placeholder='Search countries...'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </Fade>

          {isLoading ? (
            <div className="jurisdiction-loading">
              <div className="loading-spinner"></div>
              <p>Loading countries...</p>
            </div>
          ) : (
            <div className="jurisdictions-content">
              {getSortedContinents().map((continent, continentIndex) => {
                const countries = filterCountries(countriesByContinent[continent] || []);
                const isExpanded = expandedContinents[continent];
                const countryCount = countriesByContinent[continent]?.length || 0;

                if (countries.length === 0 && searchQuery) return null;

                return (
                  <Fade bottom delay={400 + (continentIndex * 100)} key={continent}>
                    <div className="continent-section-corporate">
                      <div 
                        className="continent-header-corporate"
                        onClick={() => toggleContinent(continent)}
                      >
                        <div className="continent-header-left">
                          <h2 className="continent-title-corporate">
                            {continent}
                          </h2>
                          <span className="country-count-corporate">
                            {countryCount} {countryCount === 1 ? 'country' : 'countries'}
                          </span>
                        </div>
                        <span className="expand-icon-corporate">
                          <i className={`icofont-${isExpanded ? 'minus' : 'plus'}`}></i>
                        </span>
                      </div>
                      {isExpanded && (
                        <div className='country-container-corporate'>
                          {countries.length > 0 ? (
                            countries.map((country, countryIndex) => (
                              <Fade bottom delay={500 + (continentIndex * 100) + (countryIndex * 10)} key={country.name}>
                                <div className='country-card-corporate'>
                                  <img 
                                    src={country.flag} 
                                    alt={`${country.name} flag`} 
                                    className="country-flag-corporate"
                                    loading="lazy"
                                  />
                                  <p className="country-name-corporate">{country.name}</p>
                                </div>
                              </Fade>
                            ))
                          ) : (
                            <div className="no-results-corporate">
                              <i className="icofont-search-1"></i>
                              <p>No countries found matching your search.</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Fade>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Jurisdiction;
