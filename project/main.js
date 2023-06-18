window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 10)
})
const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

//testimonial//

const reviews = [
    {
      id: 1,
      name: "Ahsanul Mahbub Tanvir",
      sem: "7th Semester, CSE, IIUC",
      img:
        "./images/test2.jpg",
      text:
        "Igniting passion, honing skills in competitive programming at International Islamic University Chittagong. Meticulous curriculum, workshops, and contests create a supportive learning environment. Experienced mentors offer invaluable guidance, fostering growth and problem-solving abilities. Competitions boost confidence and expand networking opportunities. Collaborative teamwork enhances overall learning experience. Highly recommended for coding enthusiasts!",
    },
    {
      id: 2,
      name: "Emon Biswas",
      sem: "7th Semester, CSE, IIUC",
      img:
        "./images/test3.jpg",
      text:
        "As a student in the advanced category, actively learning and mentoring junior participants, I have experienced the enriching benefits of our university bootcamp. This dual role has not only enhanced my own learning journey but has also fostered a stronger bond between the seniors and juniors involved in the program.",
    },
    {
      id: 3,
      name: "Sharia Habib Ula",
      sem: "7th Semester, CSE, IIUC",
      img:
        "./images/test4.jpg",
      text:
        "IIUCCPS has had a profound impact on numerous students of IIUC, including myself, by providing them with invaluable knowledge and skills in programming and competitive programming. Right from the beginning, the club's trainers and mentors, especially Jamil As-ad Sir, took me under their wing and offered comprehensive guidance and support. IIUCCPS played a pivotal role in introducing competitive programming to computer science students who were new to the field or interested in it.With regular coding contests, practice sessions, and classes, the club cultivated a sense of healthy competition among its members. IIUCCPS has truly opened the doors to the world of competitive programming for countless students, including myself. Its efforts have not only enhanced the programming skills of individuals but have also established our university as a formidable presence in the competitive programming domain."
    },
    {
        id: 4,
        name: "Durjoy Barua",
        sem: "6th Semester, CSE, IIUC",
        img:
          "./images/test1.jpg",
        text:
          "I wanted to take a moment to share my experience and express my gratitude for the incredible opportunity to participate in the university bootcamp. Having completed both the Beginner and Intermediate levels, I can confidently say that this program has had a profound impact on my problem-solving abilities and overall growth. I would highly recommend the university bootcamp to anyone seeking to improve their problem-solving abilities. The program's well-structured curriculum, led by knowledgeable senior students and supervised by a dedicated teacher, ensures a comprehensive learning experience. The skills, knowledge, and relationships I gained from this bootcamp have been invaluable, and I am confident they will positively impact my future endeavors."
      },
      {
        id: 5,
        name: "Asik Iftekhar Hamim",
        sem: "3rd Semester, CSE, IIUC",
        img:
        "./images/c221012.jpg",
        text:
        "I wanted to express my sincere gratitude and enthusiasm for the university competitive programming bootcamp that I had the privilege of attending. Participating in this program has been a transformative experience that has significantly impacted my growth as a computer science student and aspiring programmer. From the moment I entered the bootcamp, I was captivated by the energy and passion that surrounded me. The instructors and mentors from out university, who were experts in the field of competitive programming, created an environment that fostered learning, collaboration, senior-junior bonding and personal development. Their dedication and commitment to our success were evident in every aspect of the bootcamp."
      },
      {
        id: 6,
        name: "Mir Tarhimul Quader",
        sem: "3rd Semester, CSE, IIUC",
        img:
        "./images/c221017.jpg",
        text:
        "IIUCCPS (IIUC Competitive Programming Society) is a great club for students who love coding at IIUC. They have fun competitions and helpful workshops. The club members and mentors are really nice and always ready to help. It's a cool place to learn and get better at programming. I really like IIUCCPS!"
      },
  ];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const sem = document.getElementById('sem');
const testimonial_body = document.getElementById('testimonial_body');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    sem.textContent = item.sem;
    testimonial_body.textContent =item.text;
  });
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    sem.textContent = item.sem;
    testimonial_body.textContent =item.text;
  };
  
  nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length -1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length -1;
    }
    showPerson(currentItem);
  });
  