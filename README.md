# Marvel Heroes React App

This is a React app built using Yarn and Vite that displays a list of Marvel heroes, series, and comics. The app also includes a search and pagination.

## Installation

To install the app, clone the repository from GitHub:

```bash
git clone https://github.com/DmitrySychevDev/marvel.git
```

Then, navigate to the project directory and install the dependencies using Yarn:

```bash
cd marvel
yarn install
```

This will start the app on `http://localhost:3000`.

## API

This app uses the [Marvel Comics API](https://developer.marvel.com/) to fetch data about Marvel heroes, series, and comics. To use the API, you will need to [create an account](https://developer.marvel.com/documentation/getting_started) and obtain an API key.

Once you have your API key, create a `.env` file in the root directory of the project and add your key:

```.env
VITE_PUBLIC_API_KEY = your public key
VITE_PRIVATE_API_KEY=your private key
VITE_BASE_API_URL=https://gateway.marvel.com/
```

The API key is loaded into the app using the `process.env`
