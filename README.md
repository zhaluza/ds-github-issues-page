# Github Issues Clone

A recreation of Github's issues page, as seen
[here](https://github.com/facebook/react/issues). All data is fetched in real time from Github's GraphQL API.

To demo a live version of this app,
[click here](https://flamboyant-leakey-d44728.netlify.app/).

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
    -   [Tested With](#tested-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
    <img width="500" src="https://github.com/zhaluza/ds-github-issues-page/blob/master/screenshots/screenshot1.png?raw=true">
</p>
### Built With

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Sass](https://sass-lang.com/)
-   [GraphQL](https://graphql.org/)
-   [Apollo](https://www.apollographql.com/)

### Tested With

-   [Jest](https://jestjs.io/)
-   [Enzyme](https://enzymejs.github.io/enzyme/)
<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/zhaluza/espp-budget-app.git
```

3. Install NPM packages

```sh
npm i
```

4. Create a new Github access token (if one was provided to you, skip this step),

5. Create a `.env` file and enter the access token:

```sh
REACT_APP_GITHUB_ACCESS_TOKEN=add access token here
```

<!-- USAGE EXAMPLES -->

## Usage

Boot up the app by running the following script:

```sh
npm start
```

You can now access the app at `http://localhost:3000` in your browser.

To create a build, run the following
command:

```
npm run build
```

## Testing

The app's current test coverage consists of unit tests for each of the three
main components. Run tests with the following script:

```
npm test
```

## License

Distributed under the ISC License.
