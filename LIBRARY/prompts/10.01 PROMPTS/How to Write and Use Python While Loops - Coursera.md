# How to Write and Use Python While Loops - Coursera

Source URL: https://www.coursera.org/tutorials/python-while-loop

How to Write and Use Python While Loops | Coursera
For Individuals
https://www.coursera.org/
For Businesses
https://www.coursera.org/business?utm_content=corp-to-home-for-enterprise&utm_campaign=website&utm_medium=coursera&utm_source=header&utm_term=b-out
For Universities
https://www.coursera.org/campus?utm_content=corp-to-landing-for-campus&utm_campaign=website&utm_medium=coursera&utm_source=header&utm_term=b-out
For Governments
https://www.coursera.org/government?utm_content=corp-to-landing-for-government&utm_campaign=website&utm_medium=coursera&utm_source=header&utm_term=b-out
 

https://www.coursera.org/
Explore
Degrees
https://www.coursera.org/degrees
Log In
https://www.coursera.org/tutorials/python-while-loop#authMode=login
Join for Free
https://www.coursera.org/tutorials/python-while-loop#authMode=signup
 

https://www.coursera.org/
Join for Free
How to Write and Use Python While Loops
https://www.coursera.org/tutorials/python-while-loop
How to Write and Use Python While Loops
Written by Coursera • Updated on Feb 24, 2023
Share
https://www.coursera.org/tutorials/python-while-loop
By the end of this tutorial you will be able to efficiently use Python while loops and emulate do while loops.
 
On this page
How to use while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-use-while-loop-in-python
How while loop works in python
https://www.coursera.org/tutorials/python-while-loop#how-while-loop-works-in-python
Try it yourself
https://www.coursera.org/tutorials/python-while-loop#try-it-yourself
How to write a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-write-a-while-loop-in-python
How to end a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-end-a-while-loop-in-python
1. Break
https://www.coursera.org/tutorials/python-while-loop#1-break
2. Continue
https://www.coursera.org/tutorials/python-while-loop#2-continue
3. Pass
https://www.coursera.org/tutorials/python-while-loop#3-pass
Try it yourself
https://www.coursera.org/tutorials/python-while-loop#try-it-yourself-1
Does Python have do while loops?
https://www.coursera.org/tutorials/python-while-loop#does-python-have-do-while-loops
How to emulate do while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-emulate-do-while-loop-in-python
Key takeaways
https://www.coursera.org/tutorials/python-while-loop#key-takeaways
Resources
https://www.coursera.org/tutorials/python-while-loop#resources
Keep improving your Python skills with Coursera.
https://www.coursera.org/tutorials/python-while-loop#keep-improving-your-python-skills-with-coursera
Materials Required:
 Latest version of Python ( 
Python 3
https://www.python.org/downloads/
), an integrated development environment (IDE) of your choice (or terminal), stable internet connection
Prerequisites/helpful expertise:
 Basic knowledge of Python and programming concepts
While loops are control flow tools. Like for loops, they are used to iterate over a block of code. Unlike for loops, they will repeat that block of code for an unknown number of times until a specific condition is met. You'll use while loops when you're not sure how many times you need your code to repeat. You'll use do while loops when you need it to repeat at least once.
Term
Definition
While loop
Used to iterate over code when the condition is true. This loop type is typically used when the number of times you'll need to repeat is unknown.
For loop
An iterating function used to execute statements repeatedly.
Control flow
Control flow or program flow, is the order of execution in a program's code.
Control statements
In Python, continue, break, and pass are control statements that change the order of a program's execution.
Loop statements
Loop statements execute code repeatedly as determined by the user.
Iterate
In programming, iteration is the repetition of a code or a process over and over until a specific condition is met.
Indentation
Indentation is the space at the beginning of each line of code. In Python, indentation indicates a new line of code. In other programming languages, it is used only for readability.
Boolean expression
A boolean expression is a logical statement. They are either 
True
 or 
False
 .
if
if
 is a common conditional statement. It dictates whether a statement should be executed or not by checking for a given condition. If the condition is true, the 
if
 block of code will be executed.
else
The 
else
 statement contains the block of code that will execute if the condition from the 
if
 statement is false or resolves to zero.
break
The 
break
 command terminates the loop that contains it and redirects the program flow to the following statement.
How to use while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-use-while-loop-in-python
While loops continuously execute code for as long as the given condition or, boolean expression, is true. They are most useful when you don't know how many times you'll need the code to execute. For example, you may want to run a piece of code as long as a given number is between 1 and 5. In that case, the loop will run 
while
 the number remains between 1 and 5. When the user chooses a 6 or any other number that isn't between 1-5, the control flow will exit the while loop body.
How while loop works in python
First, the Python interpreter checks the test expression or, while condition. If the test expression evaluates to 
true
 , the body of the while loop will be entered. This process repeats until the test expression evaluates to 
false
 .
 
Try it yourself
PYTHON
numbers = [2, 4, 6, 8, 10] total = 0 for num in numbers: total += num print("The total is:", total)
1
2
3
4
5
numbers = [2, 4, 6, 8, 10]
total = 0
for num in numbers:
    total += num
print("The total is:", total)


What will the interpreter display at the end of the fourth loop?
Solution 1 Expand to view solution
After the fourth loop, the interpreter will print 
The total is:8
 .
How to write a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-write-a-while-loop-in-python
Remember that indentation is crucial in Python. Indentation tells Python where the loop body starts and ends. The while loop begins with indentation and ends at the first unindented line. First, let's examine the syntax and structure of a Python while loop:
PYTHON
while count < 5: # condition to check if the loop should continue print(count) # body of the loop, will execute as long as the condition is true
1
2
while count < 5:    # condition to check if the loop should continue
    print(count)    # body of the loop, will execute as long as the condition is true


A note on non-zero values
Python will interpret all non-zero values as 
true
 while 
none
 and 
0
 are 
false
 .
Now, let's look at an example:
 
In this example, the loop will print out the even numbers from 0 to 8, because we start at 0 and add 2 to the number for each iteration. Once 
num
 reaches 10, the condition 
num < 10
 is no longer true, and the loop terminates.
Tip
Be careful not to create an infinite loop. If the condition never resolves to a 
false
 value, infinite iteration occurs.
How to end a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-end-a-while-loop-in-python
As mentioned above, the first unindented line of code marks the end of a while loop. However, you may need to end a loop early or terminate the current loop iteration. In that case, you can use one of three loop control statements:
1. Break
The 
break
 keyword is used to exit a loop early. It terminates the loop that contains it and redirects the program flow to the following statement.
Example:
 
In this example, we're using a 
while
 loop to print the numbers from 1 to 10. However, we're also using an 
if
 statement to check if the loop has reached the halfway point, which is when 
i
 is equal to 
5
 . If we've reached the halfway point, we print a message to the console saying "We've reached the halfway point, stopping loop." and then immediately exit the loop using the 
break
 statement.
Learn more:
 
How to Use Python Break: In For Loops, While Loops, and If Statements
https://www.coursera.org/tutorials/python-break
2. Continue
continue
 is a Python keyword that you can use to end a for loop's current iteration. The control flow will continue on to the next iteration. The 
continue
 statement is useful when you want to skip over certain iterations of a loop based on some condition, without exiting the loop entirely.
Example:
 
In this example, the 
while
 loop iterates over the numbers 1 through 10. The 
if
 statement checks whether the current value of 
i
 is even. If it is, the 
continue
 statement is executed, causing the loop to skip the current iteration and move on to the next one without executing the rest of the loop body. If 
i
 is odd, the 
print
 statement is executed, outputting the value of 
i
 .
3. Pass
The 
pass
 statement in Python intentionally does nothing. It can be used as a placeholder for future code or when a statement is required by syntax but you don't want anything to happen. In a 
while
 loop, you can use it to ignore a certain condition during an iteration.
Example:
 
In this example, the 
while
 loop iterates over the numbers 1 through 5. The 
if
 statement checks whether the current value of 
i
 is equal to 
3
 . The 
pass
 statement indicates that there is no specific action to be taken when 
i
 is equal to 
3
 , but the program should continue executing the rest of the loop body.
Try it yourself
Write a program that repeatedly prompts the user to enter a number between 1 and 10, until the user enters a valid number. For each invalid input, the program should print an error message and prompt the user to try again. If the user enters a valid number, the program should print a message indicating that the number is valid and exit the loop.
Use a 
continue
 statement to skip over any input that is not a valid number between 1 and 10.
Solution Expand to view solution
Here's one possible solution to the exercise:
PYTHON
while True: num_str = input("Enter a number between 1 and 10: ") if not num_str.isdigit(): print("Error: input must be a number.") continue num = int(num_str) if num < 1 or num > 10: print("Error: number must be between 1 and 10.") continue print("You entered a valid number:", num) break
1
2
3
4
5
6
7
8
9
10
11
while True:
  num_str = input("Enter a number between 1 and 10: ")
  if not num_str.isdigit():
      print("Error: input must be a number.")
      continue
  num = int(num_str)
  if num < 1 or num > 10:
      print("Error: number must be between 1 and 10.")
      continue
  print("You entered a valid number:", num)
  break


In this example, a for loop iterates through each character in the string string from beginning to end. For each character, it concatenates that character to the beginning of the variable reversed_string. By the end of the loop, reversed_string will contain the original string in reverse order.
Need help?
How do you end a nested 
while
 loop? If the 
while
 loop is nested, make sure to place a 
break
 statement in the outer loop. Otherwise, only the inner loop is exited.
Does Python have do while loops?
https://www.coursera.org/tutorials/python-while-loop#does-python-have-do-while-loops
A 
do while
 loop is a variant of the 
while
 loop that checks the condition at the 
end
 of the loop rather than the beginning. Even if the condition is never true, the statements inside the loop body will be executed 
at least
 once. 
do while
 loops are useful when you need your code to run at least once. Python does not have a built-in 
do while
 loop like other programming languages. However, you can modify a regular Python 
while
 loop to accomplish the same functionality.
How to emulate do while loop in Python
A Python 
while
 loop only runs when the condition is met. Since it checks that condition at the beginning, it may never run at all. To modify a 
while
 loop into a 
do while
 loop, add 
true
 after the keyword 
while
 so that the condition is always true to begin with. Then, you can add 
if
 statements to check the inside condition and break statements to control the flow of the loop based on your terms.
Here's an example:
 
This loop will print the numbers 1 to 5, which is equivalent to the behavior of a 
do while
 loop that iterates from 1 to 5. We use a 
break
 statement to exit the loop once we have printed all the numbers, since the 
while
 condition is always 
True
 and would otherwise result in an infinite loop.
Key takeaways
https://www.coursera.org/tutorials/python-while-loop#key-takeaways
while
 loops continuously execute code for as long as the given condition is true.
There is no 
do while
 loop in Python, but you can modify a 
while
 loop to achieve the same functionality.
There are three control statements you can use to break out of a while loop in Python: 
break
 , 
continue
 , and 
pass
 .
Indentation tells Python which statements are inside or outside of the loop.
Resources
https://www.coursera.org/tutorials/python-while-loop#resources
Being a Python Developer: What They Can Do, Earn, and More
https://www.coursera.org/articles/python-developer
Python control flow tools documentation
https://docs.python.org/3/tutorial/controlflow.html
Python Loops Cheat Sheet
https://www.coursera.org/tutorials/python-loops-cheat-sheet
How to Use Python Break
https://www.coursera.org/tutorials/python-break
Keep improving your Python skills with Coursera.
https://www.coursera.org/tutorials/python-while-loop#keep-improving-your-python-skills-with-coursera
You can practice working with while loops with a Guided Project like 
Concepts in Python: Loops, Functions, and Returns
https://www.coursera.org/projects/python-loops-functions-returns
. Or, take the next step in mastering the Python language and earn a certificate from the University of Michigan in 
Python 3 Programming
https://www.coursera.org/specializations/python-3-programming
.
Written by Coursera • Updated on Feb 24, 2023
Share
https://www.coursera.org/tutorials/python-while-loop
This content has been made available for informational purposes only. Learners are advised to conduct additional research to ensure that courses and other credentials pursued meet their personal, professional, and financial goals.
On this page
How to use while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-use-while-loop-in-python
How while loop works in python
https://www.coursera.org/tutorials/python-while-loop#how-while-loop-works-in-python
Try it yourself
https://www.coursera.org/tutorials/python-while-loop#try-it-yourself
How to write a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-write-a-while-loop-in-python
How to end a while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-end-a-while-loop-in-python
1. Break
https://www.coursera.org/tutorials/python-while-loop#1-break
2. Continue
https://www.coursera.org/tutorials/python-while-loop#2-continue
3. Pass
https://www.coursera.org/tutorials/python-while-loop#3-pass
Try it yourself
https://www.coursera.org/tutorials/python-while-loop#try-it-yourself-1
Does Python have do while loops?
https://www.coursera.org/tutorials/python-while-loop#does-python-have-do-while-loops
How to emulate do while loop in Python
https://www.coursera.org/tutorials/python-while-loop#how-to-emulate-do-while-loop-in-python
Key takeaways
https://www.coursera.org/tutorials/python-while-loop#key-takeaways
Resources
https://www.coursera.org/tutorials/python-while-loop#resources
Keep improving your Python skills with Coursera.
https://www.coursera.org/tutorials/python-while-loop#keep-improving-your-python-skills-with-coursera
Learn without limits
Join for Free
Coursera Footer
Skills
Accounting
https://www.coursera.org/courses?query=accounting
Artificial Intelligence (AI)
https://www.coursera.org/courses?query=artificial%20intelligence
Cybersecurity
https://www.coursera.org/courses?query=cybersecurity
Data Analytics
https://www.coursera.org/courses?query=data%20analytics
Digital Marketing
https://www.coursera.org/courses?query=digital%20marketing
Human Resources (HR)
https://www.coursera.org/courses?query=hr
Microsoft Excel
https://www.coursera.org/courses?query=microsoft%20excel
Project Management
https://www.coursera.org/courses?query=project%20management
Python
https://www.coursera.org/courses?query=python
SQL
https://www.coursera.org/courses?query=sql
Professional Certificates
Google AI Certificate
https://www.coursera.org/professional-certificates/google-ai
Google Cybersecurity Certificate
https://www.coursera.org/professional-certificates/google-cybersecurity
Google Data Analytics Certificate
https://www.coursera.org/professional-certificates/google-data-analytics
Google IT Support Certificate
https://www.coursera.org/professional-certificates/google-it-support
Google Project Management Certificate
https://www.coursera.org/professional-certificates/google-project-management
Google UX Design Certificate
https://www.coursera.org/professional-certificates/google-ux-design
IBM AI Engineering Certificate
https://www.coursera.org/professional-certificates/ai-engineer
IBM AI Product Manager Certificate
https://www.coursera.org/professional-certificates/ibm-ai-product-manager
IBM Data Science Certificate
https://www.coursera.org/professional-certificates/ibm-data-science
Intuit Academy Bookkeeping Certificate
https://www.coursera.org/professional-certificates/intuit-bookkeeping
Courses & Specializations
AI Essentials Specialization
https://www.coursera.org/specializations/ai-essentials-google
AI For Business Specialization
https://www.coursera.org/specializations/ai-for-business-wharton
AI For Everyone Course
https://www.coursera.org/learn/ai-for-everyone
AI in Healthcare Specialization
https://www.coursera.org/specializations/ai-healthcare
Deep Learning Specialization
https://www.coursera.org/specializations/deep-learning
Excel Skills for Business Specialization
https://www.coursera.org/specializations/excel
Financial Markets Course
https://www.coursera.org/learn/financial-markets-global
Machine Learning Specialization
https://www.coursera.org/specializations/machine-learning-introduction
Prompt Engineering for ChatGPT Course
https://www.coursera.org/learn/prompt-engineering
Python for Everybody Specialization
https://www.coursera.org/specializations/python
Career Resources
Career Aptitude Test
https://www.coursera.org/resources/career-quiz
CAPM Certification Requirements
https://www.coursera.org/articles/capm-certification-guide
CompTIA A+ Certification Requirements
https://www.coursera.org/articles/what-is-the-comptia-a-certification-what-to-know
CompTIA Security+ Certification Requirements
https://www.coursera.org/articles/what-is-the-comptia-security-plus-certification
Essential IT Certifications
https://www.coursera.org/articles/essential-it-certifications-entry-level-and-beginner
High-Income Skills to Learn
https://www.coursera.org/articles/high-income-skills
How to Learn Artificial Intelligence
https://www.coursera.org/articles/how-to-learn-artificial-intelligence
PMP Certification Requirements
https://www.coursera.org/articles/the-pmp-certification-a-guide-to-getting-started
Popular Cybersecurity Certifications
https://www.coursera.org/articles/popular-cybersecurity-certifications
Share your Coursera learning story
https://airtable.com/appxSsG2Dz9CjSpF8/pagCDDP2Uinw59CNP/form?prefill_utm_source=product&prefill_utm_campaign=seo_footer&prefill_utm_medium=written
Coursera
About
https://www.coursera.org/about
What We Offer
https://www.coursera.org/about/how-coursera-works/
Leadership
https://www.coursera.org/about/leadership
Careers
https://careers.coursera.com/
Catalog
https://www.coursera.org/browse
Coursera Plus
https://www.coursera.org/courseraplus
Professional Certificates
https://www.coursera.org/professional-certificates
MasterTrack® Certificates
https://www.coursera.org/mastertrack
Degrees
https://www.coursera.org/degrees
For Enterprise
https://www.coursera.org/business?utm_campaign=website&utm_content=corp-to-home-footer-for-enterprise&utm_medium=coursera&utm_source=enterprise
For Government
https://www.coursera.org/government?utm_campaign=website&utm_content=corp-to-home-footer-for-government&utm_medium=coursera&utm_source=enterprise
For Campus
https://www.coursera.org/campus?utm_campaign=website&utm_content=corp-to-home-footer-for-campus&utm_medium=coursera&utm_source=enterprise
Become a Partner
https://partnerships.coursera.org/?utm_medium=coursera&utm_source=partnerships&utm_campaign=website&utm_content=corp-to-home-footer-become-a-partner
Social Impact
https://www.coursera.org/social-impact
Free Courses
https://www.coursera.org/courses?query=free
Udemy
https://www.udemy.com/
Community
Learners
https://www.coursera.community/
Partners
https://www.coursera.org/partners
Beta Testers
https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester
Blog
https://blog.coursera.org/
The Coursera Podcast
https://open.spotify.com/show/58M36bneU7REOofdPZxe6A
Tech Blog
https://medium.com/coursera-engineering
More
Press
https://www.coursera.org/about/press
Investors
https://investor.coursera.com/
Terms
https://www.coursera.org/about/terms
Privacy
https://www.coursera.org/about/privacy
Help
https://learner.coursera.help/hc
Accessibility
https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement
Contact
https://www.coursera.org/about/contact
Articles
https://www.coursera.org/articles
Directory
https://www.coursera.org/directory
Affiliates
https://www.coursera.org/about/affiliates
Modern Slavery Statement
https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(June%2C+2026).pdf
Do Not Sell/Share
https://www.coursera.org/about/cookies-manage
Learn Anywhere
 
© 2026 Coursera Inc. All rights reserved.
 
Opt-Out Request Honored
Cookies Preference Center
Cookies are small text files downloaded to your device via your web browser when you interact with the Site. Coursera and our approved third parties use cookies for the purposes described below under each of the category headings. For more information, please read our 
Cookies Policy
https://www.coursera.org/about/cookies
.
Allow
Manage Consent Preferences
Essential Cookies
Always Active
These cookies are necessary for the basic operation of the Site, including to authenticate users, prevent fraudulent use of user accounts, and offer Site features that are fundamental to the services. These cookies are automatically enabled and cannot be turned off because they are required for the Site to function properly.
Cookies Details
Marketing Cookies
[x]
Marketing Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
Cookies Details
Analytics Cookies
[x]
Analytics Cookies
These cookies allow us to understand how visitors use the Site to enhance the content, quality, and features of the Site and the services. For example, these cookies allow us to recognize and count the number of visitors and understand how visitors move around the Site when using it.
Cookies Details
Functional Cookies
[x]
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
Cookies Details
Cookie List
Clear
[-]
 
checkbox label label
Apply Cancel
Consent Leg.Interest
 
[-]
checkbox label label
 
[-]
checkbox label label
 
[-]
checkbox label label
Reject Confirm My Choices