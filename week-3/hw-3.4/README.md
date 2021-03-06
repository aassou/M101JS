## Homework: 3.4

In completing this exercise, you will find the "Logical Operators" lesson from Chapter 2 of this course helpful as a refresher on the $or operator.

This application depends on the companies.json dataset distributed as a handout with the "find() and Cursors in the Node.js Driver" lesson. You must first import that collection. Please ensure you are working with an unmodified version of the collection before beginning this exercise.

To import a fresh version of the companies.json data, please type the following:

    mongoimport -d crunchbase -c companies companies.json

If you have already mongoimported this data you will first need to drop the crunchbase database in the Mongo shell. Do that by typing the following two commands, one at a time, in the Mongo shell:

    use crunchbase
    db.dropDatabase()

The code attached is complete with the exception of the queryDocument() function. As in the lessons, the queryDocument() function builds an object that will be passed to find() to match a set of documents from the crunchbase.companies collection.

For this assignment, please complete the queryDocument() function as described in the TODO comments you will find in that function.

Once complete, run this application by typing:

    node overviewOrTags.js
    
When you are convinced you have completed the application correctly, please enter the average number of employees per company reported in the output. Enter only the number reported. It should be two numeric digits.

As a check that you have completed the exercise correctly, the total number of unique companies reported by the application should equal 194.
