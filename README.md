# Project Name

## Description

This project is a Next.js website that utilizes the EmailJS service for sending emails and integrates reCAPTCHA v2 with a tickbox for form submission verification.

## Build Process

1. **Installation**: Clone the repository to your local machine and install dependencies using npm or yarn.

```
git clone https://github.com/yourusername/project-name.git
cd project-name
npm install
```


2. **Environment Variables**: Set up environment variables for your project. You'll need to configure variables for EmailJS, reCAPTCHA keys, and any other required configurations. Refer to the .env.example file for the list of required variables.

```
cp .env.example .env.local
```
Edit the .env.local file and provide values for each environment variable.



3. EmailJS Setup: EmailJS allows sending emails directly from the client-side JavaScript code without the need for server-side code. Follow these steps to set up EmailJS:

Sign up for an EmailJS account at EmailJS website.

Create a new EmailJS service and template for sending emails. Note down the service ID and template ID.

Set up environment variables for EmailJS in your .env.local file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = {your-emailjs-service-id}
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = {your-emailjs-template-id}
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = {your-emailjs-public-key}
```


4. reCAPTCHA Setup: reCAPTCHA v2 is integrated with a tickbox for form submission verification. Follow these steps to set up reCAPTCHA:

Sign up for a reCAPTCHA account at Google reCAPTCHA website.

Create a new reCAPTCHA site and note down the site key and secret key.

Add the reCAPTCHA site key to your .env.local file:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY = {your-recaptcha-site-key}
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = {your-recaptcha-secret-key}
```


5. **Deployment**: Deploy your project to Netlify for hosting.

    - Sign up for a Netlify account if you don't already have one.
    - Log in to Netlify and click on "New site from Git".
    - Connect your repository and configure the build settings:
        - Build command: `npm run build`
        - Publish directory: `.next`
    - Set up environment variables in Netlify:
        - Go to your Netlify project dashboard.
        - Navigate to "Settings" > "Build & deploy" > "Environment" variables.
        - Add the same environment variables as in your `.env.local` file, but without the `NEXT_PUBLIC_` prefix.
        - **Note**: If you have already committed the `.env` file to GitHub, it's recommended to update the keys for Netlify to ensure security. Do not expose sensitive information like API keys in your public repository.
    - Deploy your site, and Netlify will provide you with a unique URL for your project.



# Packages Used :package:

|   Used Package List        |
| :------------------------: |
|             next           |
|       @emailjs/browser     |
|         lottie-react       |
|     react-fast-marquee     |
|         react-icons        |
|        react-toastify      |
|             sass           |
|         tailwindcss        |
|   react-google-recaptcha   |
------------------------------
