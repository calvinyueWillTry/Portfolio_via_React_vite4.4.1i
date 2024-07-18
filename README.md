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
Project.jsx: controls the rendering of content based on the portfolioType prop passed to it. If "YouTube" (line 26), then one can select specific YouTube videos to play, depending on the YouTube id of the video. If "Music" (line 45), then the button onClick will call either function, depending on which one is selected.
<img width="1280" alt="Screen Shot 2024-07-17 at 10 08 49 PM" src="https://github.com/user-attachments/assets/a0d87f0d-4224-4835-8061-826daf470e3d">
Homepage.jsx: calls the HomeCarousel.jsx, which creates a carousel of photos with text captions at the bottom of the photos. One can chooe the "previous" or "next" buttons on either side to "scroll" (the "next" button will appear because the hover will turn from a pointer to a hand shape).
<img width="1280" alt="Screen Shot 2024-07-17 at 10 12 17 PM" src="https://github.com/user-attachments/assets/e06d280b-5bf6-4abe-9564-bddd83f91dc1">
Contact.jsx: uses the useState hook from React to manage state for the user's name, email, phone number, subject, and text input fields, changing according to the text inputs (or option selection in the case of "subject"), then after an alert popup, redirects to a page to allow one to send the message.
<img width="1280" alt="Screen Shot 2024-07-17 at 10 13 05 PM" src="https://github.com/user-attachments/assets/b33d6c1e-6f51-4c59-b104-f23573f9bd62">
Coding Portfolio: Gives a header, then creates a space for the PortfolioCard.jsx. This page creates a card structure,  each rendering a section that displays information about the portfolio of some previous work (title, description links, and screenshot).  
<img width="1280" alt="Screen Shot 2024-07-17 at 10 16 09 PM" src="https://github.com/user-attachments/assets/0e692f2c-0243-49f6-9c0f-2fb58a9f9f9c">
AboutMe.jsx includes a page format, and renders links to downloadable PDFs. 
<img width="1280" alt="Screen Shot 2024-07-17 at 10 21 45 PM" src="https://github.com/user-attachments/assets/997e2e31-ad7d-48cd-a14e-a290c9f1434f">
Nav.jsx creates clickable links (not Hamburger though) to navigate through the pages, calling the string name, according to how it's defined in App.jsx. It is then rendered in Header.jsx, to stay in all pages. 
<img width="1280" alt="Screen Shot 2024-07-17 at 10 25 11 PM" src="https://github.com/user-attachments/assets/36434f48-e314-47d0-8e51-dcfda4b3f74b">
Feet.jsx: besides rendering contact info and a map of Eugene, OR, it also has logos with backgrounds, that contains clickable links. 
<img width="1280" alt="Screen Shot 2024-07-17 at 10 30 07 PM" src="https://github.com/user-attachments/assets/1cc15b7b-c5ca-4b84-ad99-ec95741cf052">
<img width="1280" alt="Screen Shot 2024-07-17 at 10 27 42 PM" src="https://github.com/user-attachments/assets/1e396990-3fbd-48ad-8959-3cf25429a96c">
