# Project _Pineapple_

This project allows developer candidates to display their ability to deliver clean
and usable code using Angular in a timely manner. Candidates will receive feedback on their coding
style, substance, and completeness following the exercise.

_We've included all of the Angular Material framework in the project for your ease. Feel free to use it
at your discretion._

## Preparation

- [ ] Make sure you have [Node](https://nodejs.org/en/download) installed on your
development machine
- [ ] Fork this project into your personal GitHub repository
- [ ] Review the project's file structure to prepare for tackling deliverables
- [ ] From the command line, traverse into the project's root folder and run `npm install`
- [ ] After installation completes, run `npm run start` and [open a browser window to view the
project](localhost:4200)

## Deliverables

- [ ] Add a search filter for the table of device data. The user should be able to type a string of
text and see the collection of devices update in real time.
- [ ] All tests should pass when executing the `npm run test` command in root.
- [ ] After you've completed your work, send us a link to your remote repository along with a _brief_ overview of your solution.

## Bonus Deliverable

Feel free to use your creativity to provide any additional functionality and we would happily review that as well.

<br>

![May the Force be with you](https://media.giphy.com/media/JDnaQ8qn0Myuk/giphy.gif)

## Tasks Completed
1. Search Filter - as user type on the filter input, the table would dynamically update and show the results that contains user'input
2. Selector - user could select the type of device category, and the table would present all the results that match user's selection
3. Sort - when user click on the respective headers of table, the data would be sorted and presented accordingly.
4. Pagenation - adding pagenation to table, allowing user to customize the number of rows per page, better readability
5. Toaster Service - as user type on filter / select the device category, a toaster would pop up indicate how many results are found.
6. Empty Template - when no results are found, a template would appear and indicate such message.
7. Logo - an lovely new pineapple logo is added

### Under the hood,
1. Use Angular Material Modules to achieve sorting and pagenation.
2. Update the table with material table, input, and selector
3. Use Goponents's style and global variables as color standard.
4. Use GoToaster to achieve Toaster service
5. Use Bootstrap for Grid and visual tweaks
