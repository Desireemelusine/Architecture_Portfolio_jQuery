//----------------------------------- Model -------------------------------------------------


  var bio = {
    "name": "Unum est sine dolore esse, alterum cum voluptate.",
    "role": "images/arql4.png",
    "contacts": {
      "mobile": "351 935563581",
      "email": "info@archi.com",
      "location": "Lisboa",
      "facebook": "https://facebook.com",
      "linkedin": "https://www.linkedin.com"
    },
    "skills": ["FORTASSE IEIUNIUS", "MINIME VERO", "CONSUMPTUM", "TERTIUM AUTEM", "PHILOSOPHIAM", "VOLUPTATEM", "SAPIENTIA"]
  }

var work = {
  "jobs": [
    {
      "employer": "LOREM IPSUM DOLOR SIT AMET",
      "title": "Praesent eget nibh vehicula, fermentum mauris quis, mattis libero",
      "location": "Lisboa",
      "dates":"2017-2018",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies cursus tortor. Etiam sed lorem vel dolor malesuada tristique eu nec arcu. Etiam blandit neque non nisi tincidunt sagittis. Etiam tincidunt posuere erat luctus mattis. Aliquam tincidunt faucibus ipsum sed sodales. Vivamus gravida tristique sem. Ut vestibulum nibh non dictum gravida. Cras ac semper tellus.",
      "image": "images/arq5.png"
    },
    {
      "employer": "DUO REGES: CONSTRUCTIO INTERRETE NON QUAM NOSTRAM QUIDEM",
      "title": "Suspendisse at eros nec risus tristique condimentum",
      "location": "Roma",
      "dates":"2012-2017",
      "description":"Nam bibendum arcu eu lacus hendrerit luctus. In porttitor nulla eu neque rutrum, nec mollis risus tempor. Nunc viverra sem at purus varius condimentum. Morbi eget ante at orci euismod fringilla. Phasellus sit amet dolor finibus mauris bibendum pretium ut ut velit. Pellentesque rutrum nibh id elementum molestie. Nunc sem dui, malesuada at commodo a, vestibulum ut nisl.",
      "image": "images/arq2.jpg"
    },
    {
      "employer": "SED EUM QUI AUDIEBANT QUOAD POTERANT DEFENDEBANT ",
      "title": "Sed consequat felis at ante imperdiet, elementum egestas est iaculis",
      "location": "Paris",
      "dates":"2012-2017",
      "description": "Donec feugiat sem vitae imperdiet suscipit. In non velit id elit suscipit cursus sit amet in ligula. Mauris egestas convallis nulla ut ultrices. Duis eu turpis in nibh luctus maximus. Sed efficitur turpis commodo libero tincidunt, id elementum tellus facilisis.",
      "image": "images/arq6.png"
    },
    {
      "employer": "IS ITA VIVEBAT UT NULLA TAM EXQUISITA POSSET INVENIRI VOLUPTAS",
      "title": "Praesent eget nibh vehicula, fermentum mauris quis, mattis libero",
      "location": "Barcelona",
      "dates":"2002-2011",
      "description": "Proin faucibus hendrerit pretium. Curabitur pulvinar sem in nisi tempus, sed blandit quam ornare. Sed venenatis pharetra mi sit amet elementum. Maecenas venenatis hendrerit odio non faucibus. Curabitur in ante ligula.",
      "image": "images/arq10.jpg"
    }
  ]
}


//----------------------------------- ViewModel -------------------------------------------------

//bio
bio.display = function(){
  var formatted_name = HTMLheaderName.replace("%data%", bio.name);
  var formatted_role = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formatted_name).prepend(formatted_role);
  var formatted_contacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
  var formatted_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formatted_email = HTMLemail.replace("%data%", bio.contacts.email);
  var formatted_location = HTMLlocation.replace("%data%", bio.contacts.location);
  var formatted_linkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formatted_facebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
  $("#footerContacts").append(formatted_mobile).append(formatted_email).append(formatted_location).append(formatted_linkedin).append(formatted_facebook);

  if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formatted_skills);
  }
}
bio.display();

// work
work.display = function(){
  work.jobs.forEach(function(indexjob){
    $("#workExperience").append(HTMLworkStart);
    var formatted_workEmployer = HTMLworkEmployer.replace("%data%", indexjob.employer);
    var formatted_workTitle = HTMLworkTitle.replace("%data%", indexjob.title);
    var formatted_employerTitle =  formatted_workEmployer + formatted_workTitle;
    $(".work-entry:last").append(formatted_employerTitle);
    var formatted_workDate =  HTMLworkDates.replace("%data%",indexjob.dates);
    $(".work-entry:last").append(formatted_workDate);
    var formatted_workLocation = HTMLworkLocation.replace("%data%", indexjob.location);
    $(".work-entry:last").append(formatted_workLocation);
    var formatted_workDescription = HTMLworkDescription.replace("%data%", indexjob.description);
    $(".work-entry:last").append(formatted_workDescription);
    var formatted_workImage = HTMLworkImage.replace("%data%", indexjob.image);
    $(".work-entry:last").append(formatted_workImage);
    })
}
work.display();


$("#mapDiv").append(googleMap);
