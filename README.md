# AI-Powered Student Project Management System - Website

A complete, responsive student project website showcasing an AI-powered project management system with modern UI/UX design.

## Project Overview

This is a professional multi-page website built with **HTML5**, **CSS3**, and **vanilla JavaScript**. The website is fully responsive, works on all devices (desktop, tablet, mobile), and includes various interactive features like dropdowns, form validation, and smooth animations.

## 📁 Project Structure

```
project-website/
├── index.html              # Home page
├── domain.html             # Project domain, research, methodology
├── milestones.html         # Project milestones with table and dropdowns
├── documents.html          # Downloadable documents and reports
├── presentations.html      # Presentations and video links
├── about-us.html          # Team member profiles
├── contact-us.html        # Contact form and team contacts
├── css/
│   └── style.css          # Main stylesheet (comprehensive styling)
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # For storing images (currently empty - add as needed)
├── docs/                  # For storing document downloads
├── slides/                # For storing presentation files
└── README.md              # This file
```

## 🎨 Features

### Design Features
- **Clean, Modern UI** - Professional color scheme with blue, dark, and accent colors
- **Fully Responsive** - Works perfectly on desktop (1024px+), tablet (768px-1023px), and mobile (<768px)
- **Smooth Animations** - Fade-in, slide-up, and scroll animations throughout
- **Consistent Navigation** - Sticky navigation bar on all pages
- **Professional Footer** - Consistent footer with contact information

### Functional Features
- **Responsive Navigation** - Hamburger menu for mobile devices
- **Interactive Dropdowns** - Expandable milestone details on Milestones page
- **Form Validation** - Contact form with email validation and error handling
- **Sortable Table** - Click table headers to sort milestones by name, date, or marks
- **Smooth Scrolling** - Automatic smooth scroll between sections
- **Intersection Observer** - Cards animate in as they come into view
- **Mobile-Friendly Forms** - Proper font sizes to prevent iOS zoom issues

### Pages Included

1. **Home Page (index.html)**
   - Hero section with project introduction
   - Project overview cards (Vision, Innovation, Impact)
   - Key features showcase
   - Abstract section
   - Call-to-action buttons

2. **Domain Page (domain.html)**
   - Literature survey
   - Research gap analysis
   - Research problem statement
   - Project objectives
   - Development methodology
   - Technology stack (Frontend, Backend, AI/ML, Infrastructure)

3. **Milestones Page (milestones.html)**
   - Sortable milestones table
   - Progress tracking dashboard
   - Expandable milestone details with dropdowns
   - Completion status visualization

4. **Documents Page (documents.html)**
   - Core project documents (Proposal, Charter, Report)
   - Technical documentation with dropdowns
   - Development documentation
   - User & project documentation
   - Research & analysis documents

5. **Presentations Page (presentations.html)**
   - All presentations (Proposal, Progress 1, Progress 2, Final)
   - Video recordings links
   - Design & assets
   - Speaker notes and handouts
   - Key talking points by phase

6. **About Us Page (about-us.html)**
   - Team member profiles with roles
   - Mission and vision statements
   - Team skills and expertise badges
   - Project contributions
   - Project timeline with phases
   - Team achievements

7. **Contact Us Page (contact-us.html)**
   - Contact information (Email, Phone, Location)
   - Contact form with validation
   - FAQ section
   - Individual team member contact details
   - Newsletter signup
   - Quick links section

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup needed - runs as static HTML files

### Installation

1. **Extract the project files** to your desired location
2. **Open index.html** in your web browser or use a local server:

#### Using Python (Python 3):
```bash
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

#### Using Python (Python 2):
```bash
python -m SimpleHTTPServer 8000
# Then open http://localhost:8000 in your browser
```

#### Using Node.js (http-server):
```bash
npx http-server
# Then open the provided URL in your browser
```

#### Using Live Server (VS Code Extension):
- Install "Live Server" extension in VS Code
- Right-click on index.html
- Select "Open with Live Server"

## 🎯 How to Customize

### Change Project Name
1. Open each HTML file
2. Replace "AI-Powered Student Project Management System" with your project name
3. Replace "AI Project Hub" in the navbar with your preferred name

### Update Team Members
1. Open `about-us.html` and `contact-us.html`
2. Find the team member sections
3. Update names, roles, emails, and phone numbers
4. Change emoji icons to suit your team

### Modify Colors
1. Open `css/style.css`
2. Find the `:root` section at the top
3. Modify these variables:
   - `--primary-color`: Main theme color (currently #2c3e50 - dark blue)
   - `--secondary-color`: Secondary theme color (currently #3498db - light blue)
   - `--accent-color`: Highlight color (currently #e74c3c - red)
   - `--light-bg`: Light background color
   - `--text-color`: Main text color

### Add Images
1. Place image files in the `images/` folder
2. Reference them in HTML as: `images/filename.jpg`
3. Use the `<img>` tag or CSS background-image property

### Add Documents
1. Place PDF/document files in the `docs/` folder
2. Update download links in HTML files
3. Modify the onclick handlers to reference actual file paths

### Add Presentations
1. Place presentation files (PDF/PowerPoint) in the `slides/` folder
2. Update presentation links in `presentations.html`
3. The download handler in `script.js` will handle the downloads

## 💻 JavaScript Functionality

### Available Functions

#### Mobile Navigation
- `toggleDropdown(element)` - Toggle dropdown menus open/closed
- Mobile hamburger menu automatically closes when links are clicked

#### Form Handling
- `validateForm(formId)` - Validates contact form
- `showError(element, message)` - Shows validation error messages
- `isValidEmail(email)` - Validates email format

#### User Interactions
- `downloadFile(fileName, fileType)` - Handles file downloads
- `sortTable(tableId, columnIndex)` - Sorts table columns
- `copyToClipboard(text)` - Copies text to clipboard

#### Scroll Effects
- Intersection Observer - Animates cards as they scroll into view
- Smooth scroll behavior on anchor links

## 🎨 CSS Classes

### Utility Classes
- `.container` - Max width container (1200px)
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` - Responsive grid layouts
- `.btn`, `.btn-primary`, `.btn-accent` - Button styles
- `.badge` - Badge/pill styling
- `.card` - Card container with shadow and hover effects
- `.text-center` - Center align text

### Component Classes
- `.hero` - Hero section styling
- `.team-member` - Team member card
- `.dropdown` - Expandable dropdown
- `.contact-info` - Contact information box
- `.form-group` - Form field container
- `.links-list` - Styled list of links

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

CSS automatically adjusts layouts, font sizes, and spacing for each breakpoint.

## ✨ Special Features

### Animations
- **fadeIn** - Content fades in
- **fadeInDown** - Content slides down while fading in
- **slideInUp** - Content slides up from below
- **slideDown** - Dropdown content expands

### Interactive Elements
- **Hover Effects** - Cards lift up on hover
- **Active States** - Navigation links highlight when on current page
- **Form Validation** - Real-time error messages on form submission
- **Progress Bars** - Visual progress indicators on milestone page
- **Table Sorting** - Click headers to sort by different columns

## 🔐 Security Considerations

- No sensitive data is stored in the frontend
- Contact form validation prevents malicious input
- All links are properly encoded
- Email addresses are displayed but not collected directly by the website

## 🐛 Troubleshooting

### Navigation not working
- Ensure all HTML files are in the same directory
- File names must match exactly (case-sensitive on some systems)

### Styles not loading
- Verify `css/style.css` is in the `css/` subfolder
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### JavaScript not working
- Verify `js/script.js` is in the `js/` subfolder
- Check browser console for error messages (F12 key)

### Mobile menu not showing
- Make sure viewport meta tag is present in the `<head>`
- Test with browser developer tools mobile view

## 📚 Browser Compatibility

- **Chrome**: ✅ Full support (v90+)
- **Firefox**: ✅ Full support (v88+)
- **Safari**: ✅ Full support (v14+)
- **Edge**: ✅ Full support (v90+)
- **Mobile Browsers**: ✅ Full responsive support

## 🚀 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to repository settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Deploy to Netlify
1. Drag and drop the project folder on netlify.com
2. Or connect your GitHub repository
3. Site will be live automatically with automatic updates

### Deploy to Vercel
1. Connect your GitHub repository
2. Select the project folder as root
3. Deploy automatically

## 📝 License

This is an educational project created for demonstrating web development skills. Feel free to use and modify for your own projects.

## 👥 Credits

**Project Team**: Advanced Computer Science Project Team
**Email**: project@university.edu
**Phone**: +1 (234) 567-890

---

## 📋 Customization Checklist

- [ ] Change project name and title
- [ ] Update team member information
- [ ] Replace sample content with your actual project content
- [ ] Update contact email and phone
- [ ] Add team member photos/icons
- [ ] Add actual documents to download
- [ ] Customize colors to match your brand
- [ ] Update all social media links (if applicable)
- [ ] Test on mobile devices
- [ ] Test all form validations
- [ ] Deploy to web hosting

---

**Last Updated**: February 2025
**Version**: 1.0
