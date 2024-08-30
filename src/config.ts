// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Michael Nilan";
export const SITE_DESCRIPTION =
  "Welcome to my personal landing page! I am a PhD student @FIU, Miami, USA.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Michael Nilan";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
