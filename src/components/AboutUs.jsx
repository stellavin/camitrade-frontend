import React from 'react';
import AboutContent from './AboutContent';

const AboutUs = () => {
	return (
		<>
			<div className="about-us-sec bg-blue-dark">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 offset-lg-12 col-12">
							<AboutContent/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;