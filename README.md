## PZ Cheeseria

PZ Cheeseria is a sample project for a cheeseria with a parallax scrolling front end, a cheese list, and a calculator for pricing cheeses by weight. It demonstrates CRUD functionality for managing the cheese list, implemented using a Node.js backend and a React.js frontend.

## Features

- Parallax scrolling effect
- Cheese list with pricing calculator
- Modal popup for cheese details
- Basic CRUD operations with Node.js and Express
- Docker and Docker Compose setup for multi-stage builds
- Test coverage (Unit testing with Jest)

## Future Improvements

1. **Frontend Testing**:

   - Include comprehensive frontend testing with Jest and React Testing Library.

2. **Additional Persistence Mechanism**:

   - Implement a persistent database such as MongoDB or PostgreSQL for cheese data.
   - Use Mongoose or Sequelise for database modeling.
   - Better docker containerise and use the cloud to store (AWS / Azure).

3. **Admin Panel**:

   - Create a secure admin panel for adding, editing, and deleting cheese products.
   - Implement proper structure, MVC or Microservice to increase management and security.

4. **Authentication & Authorisation**:

   - Add user authentication and role-based authorisation.

5. **Styling**:
   - Improve the overall design using a design system like Tailwind CSS.

## Getting Started

### Prerequisites

- Docker
- Node.js
- npm

### Local Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/Pscheeseria.git

   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd Pscheeseria/backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Run both backend and frontend:

   ```bash
   npm start
   ```

5. Open your browser and navigate to http://localhost:3000.

### Docker Setup

1. Run docker first.
   
2. From the root directory (PsCheeseria) run:

   ```bash
   docker-compose up --build
   ```

3. Access the frontend at http://localhost:3000 and the backend at http://localhost:5050.

### API Documentation

API Documentation
The backend API is documented using Swagger/OpenAPI.

- Swagger UI

### Testing

Backend testing is implemented with Jest. To run backend tests:

Navigate to the backend directory:

```bash
cd backend
npm test
```

## Technology Stack

- Frontend: React.js, CSS
- Backend: Node.js, Express
- Testing: Jest
- Containerisation: Docker, Docker Compose

## Project Structure
```java
Pscheeseria/
├── backend/
│    ├── Dockerfile
|    ├── Data/
│    │    ├── CheeseData.js
|    |    └── images/
│    │    │    ├── americancheese.jpeg
│    │    │    ├── brie.jpeg
│    │    │    ├── camembert.jpeg
│    │    │    ├── gouda.jpeg
|    |    |    └── pecorinoromano.jpeg
│    ├── node_modules/
│    ├── server.js
│    ├── cheeseData.js
│    ├── package.json
│    └── tests/
│    |    └── cheese.test.js
|
├── frontend/
│    ├── Dockerfile
│    ├── jest.config.js
│    ├── setupTests.js
│    ├── src/
│    │    ├── components/
│    │    │    ├── **test**/
│    │    │    │    ├── CheeseList.test.js
│    │    │    │    └── ParallaxSection.test.js
│    │    │    ├── CheeseList.js
│    │    │    ├── ParallaxSection.js
│    │    │    └── CheeseModal.js
│    │    ├── styles/
│    │    │    ├── AboutSection.css
│    │    │    ├── App.css
│    │    │    ├── CheeseCalculator.css
│    │    │    ├── CheeseDetail.css
│    │    │    ├── CheeseList.css
│    │    │    ├── ParallaxSection.css
│    │    │    └── index.css
│    │    ├── App.js
│    │    └── index.js
│    ├── .babelrc
│    ├── package.json
│    ├── public/
│    │    ├── images/
│    │    │    ├── backgroundImage.jpg
│    │    │    ├── catering.jpeg
│    │    │    ├── cheese-selection.jpeg
|    |    |    └── cheese-shop.jpeg
│    └──  └── index.html
|
├── docker-compose.yml
├── .gitignore
└── README.md
```

## License
This project is licensed under the MIT License.

