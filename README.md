<h1 align='center'>xkill</h1>

## Table of contents

1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshpatel18/xkill.git
   ```
2. Navigate to the project directory:
   ```bash
   cd xkill
   ```
3. Run the following command to start the application:
   ```bash
   docker-compose up
   ```

### Without Docker

1. clone the repository:
   ```bash
   git clone https://github.com/priyanshpatel18/xkill.git
   ```
2. Navigate to the project directory:
   ```bash
   cd xkill
   ```
3. (optional) Start a PostgreSQL database using Docker:
   ```bash
   docker run -d \
       --name xkill-db \
       -e POSTGRES_USER=myuser \
       -e POSTGRES_PASSWORD=mypassword \
       -e POSTGRES_DB=mydatabase \
       -p 5432:5432 \
       postgres
   ```
   based on this command the connection url will be
   ```
   DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydatabase?schema=public
   ```
4. Create a `.env` file based on the `.env.example` file and configure the `DATABASE_URL` with your postgreSQL connection string.
5. Install dependencies:
   ```bash
   npm install
   ```
6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```
7. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

We welcome contributions from the community! To contribute to xkill, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/newFeat`).
3. Make your changes and commit them (`git commit -m 'Add some newFeat'`).
   > Make sure to lint and format your code before commiting
   >
   > - `npm run lint:check` to check for lint errors
   > - `npm run lint:fix` to fix lint errors
   > - `npm run format:check` to format the code
   > - `npm run format:fix` to fix the formatting
4. Push to the branch (`git push origin feature/newFeat`).
5. Create a new Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

Read our [contribution guidelines](./CONTRIBUTING.md) for more details.

<a href="https://github.com/priyanshpatel18/xkill/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=priyanshpatel18/xkill" />
</a>
