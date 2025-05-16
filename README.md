# CamiTrade Frontend

A modern React-based frontend application for CamiTrade, featuring service listings, licensing information, and corporate content management.

## Features

- Dynamic service listings with categorized content
- Mobile-responsive design
- Social media sharing integration
- Contact form integration
- URL-based navigation and content loading
- Service category management

## Project Structure

```
src/
├── components/
│   ├── ServiceList.jsx         # Main service listing component
│   ├── LicensingServiceList.jsx # Licensing services component
│   ├── CorporateContent.jsx    # Corporate content management
│   └── ContactForm.jsx         # Contact form component
├── jsonData/
│   └── MainServices.js         # Service data structure
└── App.jsx                     # Main application component
```

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd camitrade-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Component Overview

### ServiceList Component
- Handles display of service listings
- Supports both mobile and desktop views
- Implements URL-based navigation
- Features social media sharing

### LicensingServiceList Component
- Manages licensing-specific services
- Implements similar functionality to ServiceList
- Handles licensing-specific routing

### CorporateContent Component
- Manages corporate content display
- Handles content categorization
- Implements dynamic content loading

## State Management

The application uses React's built-in state management with the following key states:
- `activeService`: Tracks the currently selected service
- `currentServices`: Manages the list of services for the current category
- `currentService`: Stores the currently displayed service details
- `currentCategory`: Tracks the active category

## Routing

The application uses React Router for navigation with the following main routes:
- `/other-services/:id` - Other services section
- `/licensing-services/:id` - Licensing services section
- `/corporate-content/:id` - Corporate content section

## Dependencies

- React
- React Router DOM
- React Share (for social media sharing)
- React Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact [contact information]. 