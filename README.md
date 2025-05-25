# Parth Rastogi's Portfolio Website

This is a responsive portfolio website built with HTML, CSS, and JavaScript. It features a clean, modern design to showcase my skills, experience, and projects.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Project filtering by category
- Animated typing effect
- Contact form
- Skills showcase with progress bars
- Project portfolio with filtering
- Social media links

## Project Sections

- **About Me**: Information about my education, skills, and interests
- **Skills**: Visualization of my technical competencies
- **Projects**: Showcase of my key projects with details and links
- **Contact**: Ways to get in touch with me

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account.
2. Click on the "+" icon in the top right corner and select "New repository".
3. Name your repository: `parthrastogicoder.github.io` (this will be your GitHub Pages domain)
4. Make the repository public.
5. Click "Create repository".

### Step 2: Push Your Code to GitHub

Open your terminal and navigate to your portfolio directory:

```bash
cd /home/parth/Desktop/Portfolio
```

Initialize a Git repository and add your files:

```bash
git init
git add .
git commit -m "Initial commit"
```

Connect your local repository to GitHub:

```bash
git remote add origin https://github.com/parthrastogicoder/parthrastogicoder.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on "Settings" tab.
3. Scroll down to "GitHub Pages" section.
4. Under "Source", select "main" branch and "/ (root)" folder.
5. Click "Save".

Your site will be published at `https://parthrastogicoder.github.io/`.

## Customization

- **Profile Picture**: Replace `images/profile.jpg` with your own photo.
- **Project Images**: Replace the project images in the `images` folder.
- **Resume**: Replace `assets/resume.pdf` with your actual resume.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- Typed.js

## Resources

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Poppins font
- [Typed.js](https://github.com/mattboldt/typed.js/) - Typing animation
