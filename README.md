# Promptopia

Promptopia is a modern, full-stack web application built with **Next.js 13, MongoDB, and Tailwind CSS**. It allows users to create, share, and discover AI prompts.

## Features

* User authentication with **NextAuth.js**
* Create, edit, and delete prompts
* Search prompts by **tag, keyword, or username**
* View and explore **other users’ profiles**
* Responsive design with Tailwind CSS
* Server-side rendering (SSR) and optimized performance with Next.js

## Tech Stack

* **Frontend:** Next.js 13, React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** MongoDB & Mongoose
* **Authentication:** NextAuth.js
* **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* MongoDB (local or Atlas)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/promptopia.git
cd promptopia
```

Install dependencies:

```bash
npm install
```

Set up environment variables in `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
app/
  ├── api/        # API routes
  ├── profile/    # User profile pages
  ├── globals.css # Global styles
components/
  ├── Feed.js
  ├── PromptCard.js
  ├── Profile.js
models/
  ├── prompt.js
  ├── user.js
```

## Deployment

Easily deploy on [Vercel](https://vercel.com) with GitHub integration.

## License

This project is licensed under the MIT License.

---

Would you like me to also include a **"Contributing"** and **"Future Improvements"** section so it feels more professional, like open-source projects?
