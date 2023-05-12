Creating a Custom React Context Provider
========================================

Hello React enthusiasts! Today we're going to go on a coding adventure to create a reusable custom context provider. By the end of this journey, you'll have a fully functional Next.js app with a context provider managing a list of delicious cookies. We'll also include a search feature to look for your favorite cookies.

Let's dive in!

Step 1: Setting Up Your Project
-------------------------------

The first thing we need is a new Next.js project. To create one, open your terminal and type the following:

```bash
npx create-next-app@13 --typescript
```

This command will create a new Next.js project with TypeScript. Navigate into your new project:

```bash
cd your_project_name
```

Step 2: Creating Our Context
----------------------------

Context in React provides a way to pass data through the component tree without having to pass props down manually at every level.

Let's create a new file called `CookieContext.tsx` in a folder named `context` at the root of our project.

Inside `CookieContext.tsx`, let's create and export our context:

```typescript
import { createContext, useContext } from "react";

interface CookieContextInterface {
  cookies: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CookieContext = createContext<CookieContextInterface | undefined>(undefined);

export const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookieContext must be used within a CookieProvider");
  }
  return context;
};

export default CookieContext;
```

In this file, we're importing [`createContext`](https://reactjs.org/docs/context.html#reactcreatecontext) and [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) from React. We're creating a context for our cookies and a search value. We're also creating a custom hook `useCookieContext` that we will use to access our context.

Step 3: Creating the Context Provider
-------------------------------------

Next, we'll create the context provider in the same `CookieContext.tsx` file. The provider will wrap our components, making the context available to them.

Add the following code to `CookieContext.tsx`:

```typescript
import { useState } from "react";

export const CookieProvider: React.FC = ({ children }) => {
  const [cookies, setCookies] = useState<string[]>(["Chocolate Chip", "Sugar", "Oatmeal", "Gingerbread"]);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <CookieContext.Provider value={{ cookies, searchValue, setSearchValue }}>
      {children}
    </CookieContext.Provider>
  );
};
```

Here, we're importing the [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook from React. `useState` is a Hook that lets you add React state to function components. We're using it to manage our cookies list and the search value.

Step 4: Using the Provider
--------------------------

Now let's use our `CookieProvider` to wrap our app. Open `_app.tsx` and import the `CookieProvider`:

```typescript
import { CookieProvider } from "../context/CookieContext";
```

Then, wrap the `Component` with `CookieProvider`:

```typescript
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookieProvider>
      <Component {...pageProps} />
    </CookieProvider>
  );
}

export default MyApp;
```


Step 5: Using the Context (Continued)
-------------------------------------

We can now use our context in any component within our app. Let's create a `CookieList` component which will list our cookies and include a search feature.

Create a new file called `CookieList.tsx` in a folder named `components` at the root of our project.

Let's import React and our custom context hook `useCookieContext`:

```typescript
import React from 'react';
import { useCookieContext } from '../context/CookieContext';
```

Then, let's create a functional component that uses our context:

```typescript
const CookieList: React.FC = () => {
  const { cookies, searchValue, setSearchValue } = useCookieContext();

  const filteredCookies = cookies.filter((cookie) =>
    cookie.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a cookie..."
      />
      <ul>
        {filteredCookies.map((cookie, index) => (
          <li key={index}>{cookie}</li>
        ))}
      </ul>
    </div>
  );
};

export default CookieList;
```

In this component, we're accessing the cookies, the search value, and the function to set the search value from our context. We're filtering the cookies based on the search value and rendering them in a list. We're also creating an input field that sets the search value when it's changed.

Finally, to see our `CookieList` component in action, let's import it into our `index.tsx` file:

```typescript
import React from 'react';
import CookieList from '../components/CookieList';

const Home: React.FC = () => (
  <div>
    <h1>Welcome to the Cookie Shop!</h1>
    <CookieList />
  </div>
);

export default Home;
```

That's it! If you run `npm run dev` in the terminal and go to `http://localhost:3000` in your browser, you should see a list of cookies and a search box. As you type into the search box, the list of cookies will update to match your search.

In this tutorial, we've learned how to create a custom context provider in a Next.js app using TypeScript. This approach provides a neat and reusable way to share and manage state across your React components. Happy coding!