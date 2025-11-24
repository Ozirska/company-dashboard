# Company Dashboard — Test Task

This project is a small dashboard built with React, React Mosaic, and Recharts.
It displays company information, securities data, and a generated stock price chart for different tickers.

The application loads mock data from the /fake_api folder and allows switching between companies using a dropdown selector.
Each company widget is displayed inside a Mosaic window, allowing users to rearrange, resize, and split the layout interactively.

# Features

Mosaic window layout using react-mosaic-component

Company info + securities info widgets

Responsive chart using Recharts

Dropdown selection for switching companies

Fake API using static .json files

Responsive design with TailwindCSS

Fully containerized using Docker

# Project Structure

```txt
├── src/
│ ├── components/
│ │ ├── MosaicLayout.tsx
│ │ ├── CompanyWidget.tsx
│ │ ├── Dropdown.tsx
│ ├── types/
│ │ └── type.ts
│ ├── main.tsx
│
│
├── public/
│ └── fake_api/
│ ├── companies-lookup.json
│ └── securities.json
│
├── Dockerfile
├── docker-compose.yml
├── README.md
└── package.json
```

# Installation & Running Locally

1. Clone the repository
   git clone https://github.com/Ozirska/company-dashboard.git
   cd company-dashboard

2. Install dependencies
   npm install

3. Run development server
   npm run dev

The project will be available at:

http://localhost:5173

# Running with Docker

The project includes a ready-to-use Dockerfile.

1. Build the Docker image
   docker build -t company-dashboard .

2. Run the container
   docker run -p 8080:80 company-dashboard

Your app will now be available at:

http://localhost:8080

# Running with Docker Compose

If you want to use Docker Compose:

run
docker compose up --build
open
http://localhost:8080

# About the Data

The project uses two mock API files:

companies-lookup.json — list of companies

securities.json — securities mapped by company_id

# How to Extend

If I had more time, I could improve:

Persist mosaic layout: Save the user’s layout (tiles and positions) to localStorage so it stays the same after refresh.

Improve design: Add better styling and visual polish.

Enhance responsiveness: Make the layout more adaptive across screen sizes.
