# -CS499-MathTutorLabManager
## Milestone 2
Live prototype: https://hurbgh.github.io/-CS499-MathTutorLabManager/

CSS for website written with help from AI

Install instructions:
1. npm install
2. npm run dev
3. visit localhost link

Tests:
If you want to verify the site works, look at the admin dashboard first. Note that there is no recent data in it.

To test student sign in:
1. jd123 for email id, and John Doe for name
2. Select any course.
3. Confirm
4. See admin dashboard for new data

To test Tutor Clock in:
1. Type tutor emai id, ab995
2. Clock in
3. See admin dashboard tutor section, it should now show a tutor is present

To test Admin Dashboard simply search up a student email id or a course id.

### Component Overview
- Navbar:
Allows the user to select where they want to go from a home menu, either student,tutor, or admin. Or back to home.
- Home
Welcome screen to fall back to. I added it back because I realized it better and easier to have a test screen that welcomes users and from which I can attach or add things to if need be easily and makes navigation easier.
- Student Sign In
It has three stages. First stage is to verify student email id and full name. Once it is verified, it then goes to the next stages where it takes in the class they are here for, then it gives them the done screen which is the third and final stage. This gets added to the record of student sessions.
- Tutor Sign In
This is quite simple. A tutor simply inputs their email id, and then selects the button confirming they want to clock in. They get added to the records of tutors currently available today.
- Admin Dashboard
I do not know how to implement the username and password. So for now I just have the basic goal it is meant to do, see records. When selected the user can view records, and filter student records by student email id, or class id. They can also see tutoring record of tutors that came today.
- Mock Data
The data comes from my prvious database course. This is the data in the database I had for the course. I decided to use some of it for the mock data to test it out and get this prototype. It has 4 arrays: students, tutors, classes, and session attendance. Students is records of students, same with tutors, and courses. Session attendance on the other hand is a record of sessions in which students came and left on what time in what specifc dates to tutoring to get help with a specific course from which specific tutor. 
## Title: Math TutorLab Manager
The application I plan on building is a tutoring service manager that manages and records tutoring services for mathematics. In which math tutors help students struggling with mathematics, and professors can see if a student does go to tutoring or not for help, and math tutors can have their sessions of tutoring tracked so that they can get paid. The application works as a record keeper, makes sure students coming for tutoring can sign in, tutors can have the evidence they came signed, and professors can easily access this website by secure log in and see if tutors are tutoring or not, and if students in their class who struggle came in or not. It solves the problem of making record keeping digitized and clear of spelling errors and writing errors, preventing tutors from forgetting to sign and from signing the name of a friend who was not there, and allows professors to easily know who came or not without needing to pass around a sheet of paper which can easily become lost.

People would use this because it will be far more convenient and error resistant. The first problem is solves is preventing errors. People's hand writing can be terrible even if they remember to write to record their arrival. Also remembering course name and course number can be hard, so a feature to select it from searching it up can help. For tutors, it can help them easily sign up by typing their name, and ID. It makes it easy, also the computer running the website will occasionally send a ping sound to remind them to sign up. For professors it is more convenient to search up a student they are concerned about by their name or ID to see if they have been coming to turoing or not, instead of getting the several tutoring sheets and trying to read people's handwriting. As for what users will be able to do with it. The tutors can sign in to record their presence using name and ID. The students can have their presence recorded by clicking student sign in and then inputting their name and ID until it matches, then selecting a course name and its id that they came for hlp for by searching, and specifying whether or not they are an athlete. The professors using the admin login feature can see whther tutors and students are coming, and search up a student or tutor by their name or id to see their records and modify search to specific dates.

## Target Users
My target users are three types of users. One of them are mathematics tutors. They are students who are so good at mathematics the math department hired them to tutor students struggling with math. They want to easily and seemlessly get their presence recorded, and get paid with ease. Another are students. People struggling with mathematics who came to math tutoring to get help. They just want to easily get that they came and which course they came to get help with recorded easily. Lastly, the final user is professors, they want to see whether tutors are coming or not to get paid, and whether students they are concerned about are coming or not.

## Core Features
- Error detection when signing in and prevention: Both tutors and students, when signing in, can have errors detected if they type their name or ID wrong. It will list whether they meant this student full name with this ID. Making it clear which person they are.
- Course search up: When students sign in, instead of having to remember the exact course number, they can search up the course by its name. The student can also select a + button to let the application know they are coming not just for one course but for more than one.
- Reminder to sign in: Every approximately 30 minutes. The application will send out a sound, a bell sound. Not too distracting. With a pop up saying remember to sign in if you are a student to let professors know you go to tutoring, and tutors to get your work hours recorded.
- Easy search for professors: If professors want to know if a student is going to tutoring or not they can search up a student. Select them and see all records of them coming to tutoring. If they want to only see the records related to the student coming in a specific semester for their course, they can select search filters to filter it to what they are specifically looking for. 
- Doing data analysis: The data is stored in a database. Data analysis can be done with the data accumulated of students signing in.

## Project scope
Because I literally made this exac project! But in python! That is why the project is in scope. I am just fixing the user interface and making it have an actual GUI for once! The functionality I consider essential is signing in for tutors and students, and being able to verify that students and tutors came to turoing as a professor by being the only user able to access the records as an admin. The bell feature and the data analysis feature are optional, because the concern is error prevention by making it easier to search up the course and the student you are by name and selecting the one with the right name or id, and digitizing the records. I anticipate making sure the login and search feature works, and it is reliaby able to detect if a tutor or student mistyped their id or name, it will be able to pull up a screen fincing matches and asking to select the correct one. Making that work will be difficult, I anticipate that. But the best news is I did this already. In a previous course! In my databases course I made this exact thing but as a command line interface instead of a proper graphical user interface. All I need to do is translate it to react with the same database, make some additional enhancements, and im done.

## Basic sketch
![Main Menu screen](viber_image_2026-10-18_21-38-08-486.jpg)
![Tutor login Screen](viber_image_2026-10-18_21-38-08-512.jpg)
![Tutor Login Error Correction](viber_image_2026-10-18_21-38-08-507.jpg)
![Student login personal info](viber_image_2026-10-18_21-38-08-503.jpg)
![Student Login course info](viber_image_2026-10-18_21-38-08-496.jpg)
![Student login Course Error Correction](viber_image_2026-10-18_21-38-08-491.jpg)
## Initial Data Requirements
- Date
- Time
- Student names of both tutors and students coming for tutoring
- Student IDs
- Course names
- Course IDs
- Athlete status of students
- Professor username
- Professor password

## Current Goals (For Personal Use):
1. Review my previous tutorlab code made in python and cli interface. Understand exactly how it works. Made in database course.
2. Review my previous postgresql database for the tutorlab in database course. 
3. Plan out and understand how it all works together, and how I can make a react website interact with the same exact database but better.
4. Execute the plan, making it and testing it.
5. code review and fix bugs and errors I missed.
6. Done!