const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'NHS Website',
    position: 'www.nhs.uk',
    photo:
      "https://cdn.glitch.global/a2c3ce67-bbb2-4de0-9563-5ceb065e33ec/Symbol-NHS.jpg?v=1663044077657",
    text:
      " The NHS website, the Northern Devon Healthcare NHS Trust and NHS Inform are used to provide information about foodborne illness, its causes and symptoms, and treatments.",
  },
  {
    name: 'UAB News',
    position: 'www.uab.edu',
    photo: 'https://cdn.glitch.global/a2c3ce67-bbb2-4de0-9563-5ceb065e33ec/uab.png?v=1663045037570',
    text:
      "The image used as the primary image for the landing page and the second landing page is taken from a vlog by Alicia Rohan that was published on UAB News. What's Making You Sick: An In-Depth Look at Food-Born Illnesses, is the name of that web page.",
  },
  
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)