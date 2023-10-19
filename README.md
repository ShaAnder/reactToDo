Building a react based to do list

User stories

1/ I want to be able to add a task to the list. I should be able to add details, a time to complete it if I want to and the option to complete or delete the task

2/ I want to be able to see the task details as i click on them

3/ I want to be able to scroll through my tasks for the day and not just work down the list

4/ I want to be able to sort and search through my tasks

5/ I want to be able to see what tasks I have remaining.

6/ I want to be able to clear my current task list

IMPLEMENT THE STORIES

1/
We need a button that allows the user to add a task to the list.

This button should open a small window (modal window?) that contains form fields for the task,
description, completion time and button submission.

Upon submission the user should be then exited from the modal window and the new task should be saved for the user to see

2/

When clicking on the task window we should get a popup that should show the details of the task including the name, desc, ect

3/

we need to have a scrolling system in our app to continuously scroll through the tasks while hiding the scroll bar
for #5 we also want to make the header / footer sticky so that they can stay on screen for ui experience

4/

In the form component next to the form button itself we need to implement a select option that allows us to search
via alphabetical order or by added (later look at by name)

5/

In the footer we want a dynamic piece of text that details the number of tasks remaining in the current session

6/

A clear button to clear all tasks with a popup confirmation to confirm
