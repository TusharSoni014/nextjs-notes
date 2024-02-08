---
title: 'Getting Started with NEXT.JS'
date: '2024-02-08'
---

## Introduction

Welcome to my Next.js blog! In this post, we'll explore the basics of Next.js and how to set up a simple blog using this powerful React framework.

## Getting Started

To create a new Next.js project, open your terminal and run the following commands:

```bash
npx create-next-app my-blog
cd my-blog
npm run dev
```

This will initialize a new Next.js project with a development server.

# Creating Your First Page
Navigate to the pages directory and create a new file called `index.js`. Add the following code to create your home page:

```jsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <p>This is my first Next.js blog post.</p>
    </div>
  );
};

export default HomePage;
```

# Styling Your Blog
You can add styles to your blog by creating a styles.module.css file. Here's an example:

```css
/* styles.module.css */
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #333;
}

```

Update your `index.js` to use these styles:

```jsx
// pages/index.js
import React from 'react';
import styles from '../styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Blog!</h1>
      <p>This is my first Next.js blog post.</p>
    </div>
  );
};

export default HomePage;
```

# Conclusion
Congratulations! You've successfully set up your Next.js blog. Feel free to customize and expand it according to your preferences.

Happy blogging!

