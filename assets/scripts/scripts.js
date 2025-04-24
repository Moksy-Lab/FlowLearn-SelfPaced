{
           "@context": "http://www.schema.org",
           "@type": "ProfessionalService",
           "name": "FlowLearn",
           "title": "FlowLearn - Online Learning for Personal Excellence",
           "url": "/",
           "sameAs": [
              ""
           ],
           "logo": "https://moksy.com/api/build/uploads/99615384/uploads/logo.png",
           "priceRange": "$$$",
           "image": "https://moksy.com/api/build/uploads/99615384/uploads/socialshare.png",
           "description": "Achieve personal excellence with online learning from FlowLearn. Explore our courses and start your journey towards self-improvement.",
           "address": {
              "@type": "PostalAddress",
              "streetAddress": "3-5, Marco Polo House, Lansdowne Road",
              "addressLocality": "London",
              "addressRegion": "Surrey",
              "postalCode": "CR0 2BX",
              "addressCountry": "United Kingdom"
           },
           "email": "support@moksy.com",
           "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.37683",
              "longitude": "-0.09728"
           },
           
           "openingHours": "Mo 09:00-17:00 Tu 09:00-17:00 We 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00",
           "telephone": "+44 0808 175 1749",
           "aggregateRating": {
                 "@type": "AggregateRating",
                 "ratingValue": "",
                 "ratingCount": ""
               },
          "datePublished": ""
         }
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const testimonials = [{
	text: 'Taking the Essentials course transformed my career. The practical lessons, expert guidance, and hands-on projects equipped me with skills that immediately boosted my job prospects and confidence.',
	name: 'Lauren Cox',
	color: 'rgba(235, 59, 90,1.0)'
},{
	text: 'This course transformed my career. The practical skills and expert insights were invaluable.',
	name: 'Terry Fletcher',
	color: 'rgba(250, 130, 49,1.0)'
},{
	text: 'Highly recommend. Engaging content and fantastic support from instructors.',
	name: 'John Doe',
	color: 'rgba(75, 123, 236,1.0)'
},{
	text: 'Best course ever. It boosted my confidence and helped me land a great job.',
	name: 'Jessie Barnett',
	color: 'rgba(165, 94, 234,1.0)'
},{
	text: 'Data Science Essentials transformed my career. The course content was clear, practical, and engaging. Thanks to the expert instructors, I gained the skills needed to land my dream job in data analytics',
	name: 'Taylor Swift',
	color: 'rgba(32, 191, 107,1.0)'
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
	author.addEventListener('click', (e) => {
		addTestimonial(idx);
		author.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = testimonials[idx];
	
	nameEl.innerHTML = testimonial.name;
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(0, testimonial.color.length-4)}0.9)`;
	
	authorsEl.forEach(author => {
		author.classList.remove('selected');
	});
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
document.write(new Date().getFullYear());
Value for custom_js_code