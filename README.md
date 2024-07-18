# Overview of website and coding functions
Starting with a bootstrap template, I went from there, and added materials and links to make it a navigationable and live website. To summarize what each file does:
index.html: gives a fundamental template to be able to work off of. 
imports from the Vite library, including React (plugin), and exports a configuration object that also has a port, and will open automatically when running "npm start" or "npm run dev" in the terminal.
main.jsx: renders the React application, and then the App.jsx file.
<img width="1280" alt="Screen Shot 2024-07-17 at 9 55 45 PM" src="https://github.com/user-attachments/assets/8c556db7-fc9b-4527-9e54-15cf0fbed392">
App.jsx: Routing page for assemblings all the JSX pages and components together (entry point).
JSX files in Pages folder:
Resume: replaced by a href to a direct PDF link, that using "target='_blank'" will open up a tab to the PDF that is downloable and printable. 
Portfolio: posts some photos, and then calls the component Project.jsx contigent on the string components.
Project.jsx: 
