# How To Use break, continue, and pass Statements in Python - DigitalOcean

Source URL: https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3

How To Use break, continue, and pass Statements in Python | DigitalOcean
DigitalOcean Evaluations now generally available
https://www.digitalocean.com/blog/now-available-evaluations
Server-Side Tools Are Now Available for DigitalOcean Inference Engine
https://www.digitalocean.com/blog/server-side-tools-public-preview
Now Available: NVIDIA Nemotron 3 Ultra
https://www.digitalocean.com/blog/whats-new-on-inference-engine#week-of-june-1
Inside the Architecture of DigitalOcean's Inference Router
https://www.digitalocean.com/blog/inference-router-architecture
Blog
https://www.digitalocean.com/blog
Docs
https://docs.digitalocean.com/products
Careers
https://www.digitalocean.com/careers
Get Support
https://www.digitalocean.com/support
Contact Sales
https://www.digitalocean.com/company/contact/sales?referrer=tophat
DigitalOcean
https://www.digitalocean.com/
Products Featured AI Products Compute Build, deploy, and scale cloud compute resources Containers and Images Safely store and manage containers and backups Managed Databases Fully managed resources running popular database engines Management and Dev Tools Control infrastructure and gather insights Networking Secure and control traffic to apps Security Help protect your account and resources with these security features Storage Store and access any amount of data reliably in the cloud 
Browse all products
https://www.digitalocean.com/products
Solutions AI/ML CMS Data and IoT Developer Tools Gaming and Media Hosting Security and Networking Startups and SMBs Web and App Platforms 
See all solutions
https://www.digitalocean.com/solutions
Developers Community Documentation Developer Tools Get Involved Utilities and Help
Partners Become a Partner Marketplace
Pricing
https://www.digitalocean.com/pricing
Log in
Log in to:
Community
https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=login
DigitalOcean
https://cloud.digitalocean.com/login
Sign up
Sign up for:
Community
https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=register
DigitalOcean
https://cloud.digitalocean.com/registrations/new
Log in
Log in to:
Community
https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=login
DigitalOcean
https://cloud.digitalocean.com/login
Sign up
Sign up for:
Community
https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=register
DigitalOcean
https://cloud.digitalocean.com/registrations/new
Tutorials
https://www.digitalocean.com/community/tutorials
Questions
https://www.digitalocean.com/community/questions
Product Docs
https://docs.digitalocean.com/
Search Community
Report this
What is the reason for this report?
 
[-] spam
This undefined is spam
 
[-] offensive
This undefined is offensive
 
[-] off-topic
This undefined is off-topic
 
[-] other
This undefined is other
Submit
Table of contents
Introduction
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#introduction
Key Takeaways
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#key-takeaways
Prerequisites
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#prerequisites
Break Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#break-statement
Continue Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#continue-statement
Pass Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#pass-statement
Performance Implications Exceptions vs Flags vs Functions
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#performance-implications-exceptions-vs-flags-vs-functions
Using the else Clause with Loops for Cleaner Exits
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-the-else-clause-with-loops-for-cleaner-exits
RealWorld Scenarios for MultiLevel Loop Breaks
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#real-world-scenarios-for-multi-level-loop-breaks
FAQs
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#faqs
Conclusion
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#conclusion
Tutorial Series
https://www.digitalocean.com/community/tutorials?type=tutorial_series&subtype=tutorial_series
How To Code in Python
Tutorial
https://www.digitalocean.com/community/tutorials?subtype=tutorial
How To Use break, continue, and pass Statements in Python
Updated on April 24, 2026 

https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&text=&via=digitalocean
 

https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&t=
 

https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&title=
 

https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&t=
Python
https://www.digitalocean.com/community/tags/python
Development
https://www.digitalocean.com/community/tags/development
By 
Lisa Tagliaferri
https://www.digitalocean.com/community/users/ltagliaferri
, 
Anish Singh Walia
https://www.digitalocean.com/community/users/asinghwalia
, 
Manikandan Kurup
https://www.digitalocean.com/community/users/mkurup
 and 
Vinayak Baranwal
https://www.digitalocean.com/community/users/vinayakbaranwal
Language
English
 
Table of contents
Popular topics
Introduction
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#introduction
Using 
for loops
https://www.digitalocean.com/community/tutorials/python-for-loop-example
 and 
while loops
https://www.digitalocean.com/community/tutorials/how-to-construct-while-loops-in-python-3
 in Python allows you to automate and efficiently repeat tasks. These loops are fundamental constructs in Python that enable you to iterate over sequences, such as lists, tuples, and strings, or to execute a block of code repeatedly based on a condition.
However, there are scenarios where you need more control over the flow of your loops. For instance, you might encounter a situation where you need to exit a loop prematurely, skip the current iteration, or simply have a placeholder for future code. 
Python
https://www.digitalocean.com/community/tutorials/python-tutorial
 provides three powerful statements to handle these cases: 
break
 , 
continue
 , and 
pass
 .
The 
break
 statement allows you to exit a loop entirely when a specific condition is met, effectively stopping the loop execution.
The 
continue
 statement lets you skip the rest of the code inside the loop for the current iteration and move on to the next iteration.
The 
pass
 statement is a null operation; it is used as a placeholder in loops, functions, classes, or conditionals where code is syntactically required but you have nothing to execute.
Understanding and utilizing these statements can significantly enhance your ability to manage loop control flow, making your code more efficient and easier to read. This article provides a comprehensive guide to using Python's 
break
 , 
continue
 , and 
pass
 statements within loops to control flow effectively. It explains the purpose and behavior of each statement with practical code examples and output demonstrations. The article also explores advanced loop control techniques, including methods for multi-level loop exits, and introduces the lesser-known 
else
 clause with loops for cleaner post-loop logic. Real-world scenarios such as data parsing, file scanning, and matrix traversal are included to show how these concepts apply in practical Python programming.
Need to deploy a Python project and have it live quickly? Check out 
DigitalOcean App Platform
https://www.digitalocean.com/products/app-platform
 and deploy a Python project directly from GitHub in minutes.
Key Takeaways
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#key-takeaways
The 
break
 statement in Python allows you to exit a loop immediately when a specific condition is met, which is especially useful for terminating early during search or validation operations.
The 
continue
 statement skips the rest of the current iteration and moves to the next cycle of the loop, helping avoid deeply nested conditionals and improve loop clarity.
The 
pass
 statement is a syntactic placeholder that performs no action, commonly used when a block of code is syntactically required but the logic is yet to be implemented.
Since Python lacks native support for breaking out of multiple nested loops, using a flag variable to track the condition and control outer loop behavior is a practical workaround.
Encapsulating loop logic in a function and using 
return
https://www.digitalocean.com/community/tutorials/python-return-statement
 allows you to exit multiple levels of iteration cleanly and improves code modularity and maintainability.
Although exceptions can be used to exit nested loops, they should be reserved for truly exceptional conditions and not relied on for regular loop control due to performance and readability concerns.
The 
else clause
https://www.digitalocean.com/community/tutorials/if-else-statements-in-python
 on 
for
 and 
while
 loops executes only when the loop completes normally without hitting a 
break
 , making it ideal for implementing clear and concise “not found” logic.
Prerequisites
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#prerequisites
You should have Python 3 installed and a programming environment on your computer or server. If you don't have a programming environment set up, you can refer to the installation and setup guides for setting up a 
local Python programming environment on your server
https://www.digitalocean.com/community/tutorial-collections/how-to-install-python-3-and-set-up-a-programming-environment
 appropriate for your operating system ( 
Ubuntu
https://ubuntu.com/
, 
CentOS
https://www.centos.org/
, 
Debian
https://www.debian.org/
, etc.)
Break Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#break-statement
In Python, the 
break
 statement allows you to exit out of a loop when an external condition is triggered. You'll put the 
break
 statement within the code block under your loop statement, usually after a conditional 
if
 statement.
Info:
 To follow along with the example code in this tutorial, open a Python interactive shell on your local system by running the 
python3
 command. Then you can copy, paste, or edit the examples by adding them after the 
>>>
 prompt.
Let's look at an example that uses the 
break
 statement in a 
for
 loop:
number = 0

for number in range(10):
    if number == 5:
        break    # break here

    print('Number is ' + str(number))

print('Out of loop')


Copy
The variable 
number
 is initialized at 0 in this small program. Then, a 
for
 loop is constructed to iterate through the numbers 0 through 9, as defined by 
range(10)
 .
Note
: Although 
number
 is initially set to 0, this value is immediately overwritten by the 
for
 loop, which assigns new values from the 
range()
 on each iteration.
Within the 
for
 loop, an 
if
 statement presents the condition that 
if
 the variable 
number
 is equivalent to the integer 5, 
then
 the loop will break. You can refer to this tutorial on 
Using for() loop in Python
https://www.digitalocean.com/community/tutorials/python-for-loop-example
 to learn more about using the 
for
 loop.
Note:
 You can also refer to this tutorial on 
How to construct while loops in Python
https://www.digitalocean.com/community/tutorials/how-to-construct-while-loops-in-python-3
 to learn more about looping in Python.
Within the loop is also a 
print() statement
https://www.digitalocean.com/community/tutorials/python-print
 that will execute with each iteration of the 
for
 loop until the loop breaks, since it is after the 
break
 statement.
Let's place a final 
print()
 statement outside of the 
for
 loop to know when you are out of the loop.
When you run this code, you will get the following output:
Number is 0
Number is 1
Number is 2
Number is 3
Number is 4
Out of loop


This shows that once the integer 
number
 is evaluated as equivalent to 5, the loop breaks, as the program is told to do so with the 
break
 statement.
The 
break
 statement causes a program to break out of a loop.
Continue Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#continue-statement
The 
continue
 statement allows you to skip over the part of a loop where an external condition is triggered, but to go on to complete the rest of the loop. The current iteration of the loop will be disrupted, but the program will return to the top of the loop.
The 
continue
 statement will be within the code block under the loop statement, usually after a conditional 
if
 statement.
Using the same 
for
 loop program as in the 
break
 statement section above, we'll use a 
continue
 statement rather than a 
break
 statement:
number = 0

for number in range(10):
    if number == 5:
        continue    # continue here

    print('Number is ' + str(number))

print('Out of loop')


Copy
The difference in using the 
continue
 statement rather than a 
break
 statement is that our code will continue despite the disruption when the variable 
number
 is evaluated as equivalent to 5. Let's review our output:
Number is 0
Number is 1
Number is 2
Number is 3
Number is 4
Number is 6
Number is 7
Number is 8
Number is 9
Out of loop


Here, 
Number is 5
 never occurs in the output, but the loop continues after that point to print lines for the numbers 6–9 before leaving the loop.
You can use the 
continue
 statement to avoid deeply nested conditional code or optimize a loop by eliminating frequently occurring cases you would like to reject.
The 
continue
 statement causes a program to skip certain factors that come up within a loop but then continue through the rest of the loop.
Pass Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#pass-statement
When an external condition is triggered, the 
pass
 statement allows you to satisfy Python's syntactical requirement for a code block without performing any operation; all of the code will continue to be read unless a 
break
 or other statement occurs.
As with the other statements, the 
pass
 statement will be within the code block under the loop statement, typically after a conditional 
if
 statement.
Using the same code block as above, let's replace the 
break
 or 
continue
 statement with a 
pass
 statement:
number = 0

for number in range(10):
    if number == 5:
        pass    # pass here

    print('Number is ' + str(number))

print('Out of loop')


Copy
After the 
if
 conditional statement, the 
pass
 statement tells the program to continue running the loop and ignore that the variable 
number
 evaluates as equivalent to 5 during one of its iterations.
You'll run the program and get the following output:
Number is 0
Number is 1
Number is 2
Number is 3
Number is 4
Number is 5
Number is 6
Number is 7
Number is 8
Number is 9
Out of loop


By using the 
pass
 statement in this program, you notice that the program runs exactly as it would if there were no conditional statements in the program. The 
pass
 statement tells the program to disregard that condition and continue to run the program as usual.
The 
pass
 statement can create minimal classes, or act as a placeholder when working on new code and thinking on an algorithmic level before hammering out details.
Performance Implications: Exceptions vs Flags vs Functions
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#performance-implications-exceptions-vs-flags-vs-functions
When controlling the flow of loops in Python, you may find yourself deciding between using 
exceptions
, 
flags
, or 
functions with return
 to exit a loop early, especially in the case of nested loops or complex logic conditions. Each method has different performance and readability implications depending on how it's used.
Let's explore each approach with examples and discuss when it is best to use one over the other.
Using Exceptions to Exit Loops
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-exceptions-to-exit-loops
In Python, exceptions can be raised intentionally to break out of deeply nested loops. While this method works, it is 
not the most efficient
 for regular control flow.
class ExitLoop(Exception):
    pass

try:
    for i in range(5):
        for j in range(5):
            if i == 2 and j == 3:
                raise ExitLoop()
            print(f"i={i}, j={j}")
except ExitLoop:
    print("Exited nested loops using an exception.")


Copy
i=0, j=0
i=0, j=1
i=0, j=2
i=0, j=3
i=0, j=4
i=1, j=0
i=1, j=1
i=1, j=2
i=1, j=3
i=1, j=4
i=2, j=0
i=2, j=1
i=2, j=2
Exited nested loops using an exception.


Note:
 Raising and catching exceptions is relatively slow in Python because it requires stack unwinding and object creation. Exceptions are ideal for truly exceptional conditions, not for regular control logic.
Using Flags to Exit Nested Loops
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-flags-to-exit-nested-loops
Flags are a simple and readable way to exit nested loops. They work by setting a variable (usually a Boolean) when a condition is met, then checking that flag in the outer loop.
found = False

for i in range(5):
    for j in range(5):
        if i == 2 and j == 3:
            found = True
            break
        print(f"i={i}, j={j}")
    if found:
        break

print("Exited nested loops using a flag.")


Copy
i=0, j=0
i=0, j=1
i=0, j=2
i=0, j=3
i=0, j=4
i=1, j=0
i=1, j=1
i=1, j=2
i=1, j=3
i=1, j=4
i=2, j=0
i=2, j=1
i=2, j=2
Exited nested loops using a flag.


Flags are more efficient than exceptions for loop control and are a good choice when:
You need to break from multiple loops.
You want clean, readable code.
You don't want to introduce additional function or class definitions.
Using Functions with return to Exit Early
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-functions-with-return-to-exit-early
Wrapping your loop logic in a function and using 
return
 to exit is a Pythonic and efficient method to stop execution when a condition is met.
def search():
    for i in range(5):
        for j in range(5):
            if i == 2 and j == 3:
                print("Condition met. Exiting function.")
                return
            print(f"i={i}, j={j}")

search()


Copy
i=0, j=0
i=0, j=1
i=0, j=2
i=0, j=3
i=0, j=4
i=1, j=0
i=1, j=1
i=1, j=2
i=1, j=3
i=1, j=4
i=2, j=0
i=2, j=1
i=2, j=2
Condition met. Exiting function.


Using a function makes the logic modular and avoids cluttering outer scopes with flags or exception classes. It's a great approach when:
You can encapsulate the loop inside a function.
You want clean exits with fewer side effects.
You plan to reuse the logic or test it independently.
The following table compares the readability, performance, and ideal use cases for each method of exiting loops in Python, helping you choose the most effective approach for your scenario.
Method
Readability
Performance
Use Case Recommendation
Exception
Low
Slow
Avoid for loop control; use for true exceptions
Flag
Medium
Fast
Good for nested loops; easy to follow
Function
High
Fast
Best for modular and testable loop logic
For most situations where you need to exit nested loops or complex conditions, functions or flags are the preferred methods due to their clarity and performance. 
Avoid using exceptions
 unless handling actual errors or unexpected conditions.
Using the else Clause with Loops for Cleaner Exits
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-the-else-clause-with-loops-for-cleaner-exits
Python allows an 
else
 clause to be used with both 
for
 and 
while
 loops. While this feature may seem unusual at first, it can lead to cleaner and more readable code, especially when combined with control flow statements like 
break
 .
Understanding Loop else Behavior
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#understanding-loop-else-behavior
The 
else
 block associated with a loop is executed only if the loop completes without encountering a 
break
 statement. This is particularly useful for searching operations, where you're iterating over a sequence and performing an action if a condition is met or taking alternative action if it's not.
This feature is often underused, but when applied correctly, it helps avoid unnecessary state variables (like flags) and keeps related logic within the scope of the loop construct.
Example: Searching for a Value in a List
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#example-searching-for-a-value-in-a-list
Let's consider a simple use case: searching for an item in a list.
items = ["apple", "banana", "cherry", "date"]

for item in items:
    if item == "cherry":
        print("Found cherry!")
        break
else:
    print("Cherry not found.")


Copy
How it works:
The 
for
 loop iterates over the list.
If 
"cherry"
 is found, the 
break
 statement stops the loop immediately.
If the loop completes without encountering a 
break
 , the 
else
 block runs.
Output:
Found cherry!


Copy
If we change the search term to something that's not in the list:
for item in items:
    if item == "fig":
        print("Found fig!")
        break
else:
    print("Fig not found.")


Copy
Output:
Fig not found.


Copy
This approach eliminates the need for an external flag variable to determine whether the item was found.
Why Use else with Loops?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#why-use-else-with-loops
Without the 
else
 clause, you would typically manage the same logic using a flag which may unnecessarily complicate the control flow:
found = False

for item in items:
    if item == "cherry":
        print("Found cherry!")
        found = True
        break

if not found:
    print("Cherry not found.")


Copy
While this works, it requires introducing and managing an additional variable ( 
found
 ). Using the 
else
 clause helps encapsulate the logic entirely within the loop construct, leading to simpler and more focused code, particularly in short searches or conditional iteration.
Practical Use Case: Scanning a File for a Keyword
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#practical-use-case-scanning-a-file-for-a-keyword
Suppose you are reading a file line by line and want to check whether it contains a specific keyword. Using a 
for-else
 structure allows you to handle both outcomes cleanly:
with open("example.txt") as f:
    for line in f:
        if "error" in line:
            print("Error found in file.")
            break
    else:
        print("No errors detected.")


Copy
Here:
The loop scans each line.
If the keyword 
"error"
 is found, it prints a message and exits the loop early.
If no such line exists, the 
else
 clause executes after the loop finishes.
This pattern can be particularly useful in file scanning, log analysis, or any search-through-sequence scenario.
Using else with while Loops
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-else-with-while-loops
The 
else
 clause works with 
while
 loops in the same way. It runs only if the loop condition becomes false without encountering a 
break
 .
count = 0

while count < 5:
    if count == 3:
        print("Condition met. Exiting early.")
        break
    count += 1
else:
    print("Loop completed without meeting condition.")


Copy
In this example:
If 
count
 reaches 3, the loop exits via 
break
 , and the 
else
 clause is skipped.
If the loop runs fully without triggering 
break
 , the 
else
 block executes.
This can be helpful when you want to detect whether the loop completed its full range of iterations or ended prematurely due to a specific condition.
The following table summarizes when the else clause attached to a loop will execute, depending on how the loop is exited.
Scenario
Is 
else
 executed?
Loop completes all iterations
Yes
Loop exits with a 
break
No
Loop exits due to an exception
No (unless handled)
Loop runs zero times
Yes
The 
else
 clause with loops is not a replacement for conditionals or exceptions, but it is a clean and Pythonic way to handle 
“not found”
 cases or post-iteration logic without external state management.
Real-World Scenarios for Multi-Level Loop Breaks
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#real-world-scenarios-for-multi-level-loop-breaks
In many real-world programming situations, you may work with nested loops, especially when handling structured data, processing files, or searching through grids. Sometimes, you need to exit multiple levels of loops at once when a certain condition is met, such as finding a match or encountering invalid data.
Python doesn't have a built-in 
break outer
 like some languages, so you'll often use techniques like flags, functions with 
return
 , or exceptions to exit nested loops cleanly.
Let's walk through several practical examples to understand when and how to use multi-level loop breaks effectively.
Parsing Structured Data (e.g., CSV or JSON)
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#parsing-structured-data-e-g-csv-or-json
Suppose you're parsing tabular data (such as a list of rows from a CSV file), and you want to find a specific value. Once you find it, there's no need to continue scanning.
Here's a 2D list that mimics rows and columns of a simple dataset:
data = [
    ["id", "name", "status"],
    ["001", "Alice", "active"],
    ["002", "Bob", "inactive"],
    ["003", "Carol", "active"]
]


Copy
Let's say you want to find whether 
"Bob"
 exists in the dataset:
target = "Bob"
found = False

for row in data:
    for item in row:
        if item == target:
            print(f"Found target '{target}' in row: {row}")
            found = True
            break  # Exit inner loop
    if found:
        break  # Exit outer loop


Copy
Found target 'Bob' in row: ['002', 'Bob', 'inactive']


Why it works:
The inner loop checks each item.
When it finds the target, it sets the 
found
 flag to 
True
 and breaks out of the inner loop.
The outer loop checks the flag and breaks as well.
This technique avoids scanning more data than necessary, improving performance for large datasets.
Searching Files in Nested Directories
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#searching-files-in-nested-directories
When working on real-world applications like log analysis, content search, or security audits, you might need to search through hundreds of text files spread across multiple nested directories. The goal is often to find a specific keyword, such as an API key, a password, or a user ID. Once the keyword is found in any file, the search should terminate immediately to save time and resources.
Python provides a built-in function called 
os.walk()
 that allows you to iterate over all files and folders within a root directory recursively, meaning it will go into subdirectories as well.
Let's see an example. You need to recursively scan all 
.txt
 files in a directory, search each line for a keyword, and immediately stop and report the file name when the keyword is found.
import os

def search_file(root_dir, keyword):
    for folder, subfolders, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".txt"):
                with open(os.path.join(folder, file)) as f:
                    for line in f:
                        if keyword in line:
                            print(f"Found '{keyword}' in {file}")
                            return  # Exit all loops by returning from the function
    print("Keyword not found.")


Copy
You can call the function like this:
search_file("./documents", "password123")


Copy
Why use a function here:
return
 exits the function immediately, which is useful when nested loops are involved.
Cleaner than using flags across multiple levels of code.
Ideal when the logic can be modularized.
Grid or Matrix Search (e.g., in Games or Pathfinding)
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#grid-or-matrix-search-e-g-in-games-or-pathfinding
Imagine working with a 2D grid (list of lists), such as a game map or seating chart, and needing to find the first obstacle or occupied seat. You want to stop scanning the grid as soon as the first obstacle is found, instead of checking every remaining cell unnecessarily.
Let's define the grid where 
0
 represents an empty space, 
1
 represents an obstacle:
grid = [
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
]


Copy
Let's say your task is to find the first obstacle ( 
1
 ) and then stop.
found = False

for row_index, row in enumerate(grid):
    for col_index, cell in enumerate(row):
        if cell == 1:
            print(f"Obstacle found at ({row_index}, {col_index})")
            found = True
            break  # Exit inner loop
    if found:
        break  # Exit outer loop


Copy
Obstacle found at (0, 3)


What's happening:
Each cell is checked using nested 
for
 loops.
The first 
1
 found triggers a break from both loops using the 
found
 flag.
This type of search is common in maze-solving, matrix scanning, or games like Minesweeper.
Validating Nested Data Fields
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#validating-nested-data-fields
In real-world applications, especially in form handling, API processing, or user management systems, you often deal with lists of dictionaries, each dictionary representing a record with multiple fields.
You may want to scan these records to verify that all required fields are filled out. If any field is empty, your application should immediately stop processing and alert the user or log the error.
Let's look at an example. We have a list of users where each user must have a 
name
 and an 
email
 ; our goal is to scan all users, check each of their fields, and immediately stop processing as soon as any field is missing, reporting exactly which field is missing and for which user.
Consider the following sample input:
users = [
    {"name": "Alice", "email": "alice@example.com"},
    {"name": "Bob", "email": ""},
    {"name": "Carol", "email": "carol@example.com"},
]


Copy
Here, Bob's email field is empty. We want to catch that.
invalid = False

for user in users:
    for key, value in user.items():
        if not value:
            print(f"Invalid entry: Missing {key} for user {user['name']}")
            invalid = True
            break
    if invalid:
        break


Copy
Invalid entry: Missing email for user Bob


The program correctly identifies that Bob's email is missing and stops further checking; Carol is never evaluated, because we exited the loop early.
Why this pattern is useful:
You prevent unnecessary checks once an error is detected.
Helps enforce 
fail-fast behavior
, where the system stops early if something is wrong.
When Should You Use Multi-Level Breaks?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#when-should-you-use-multi-level-breaks
Use multi-level breaks when:
Continuing to loop would waste time or resources.
You've already found what you're looking for.
Early exits make the logic easier to understand and maintain.
Choose your method wisely:
Method
Best When…
Flag
You're inside a loop but don't want to exit the function.
Function
Your logic is modular and can return early from a routine.
Exception
You have deeply nested logic and a true “exceptional” case.
FAQs
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#faqs
1. How to use pass , continue , and break in Python?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#1-how-to-use-pass-continue-and-break-in-python
pass
 : The 
pass
 statement does nothing; it is used as a placeholder when a statement is syntactically required but no action is needed. For example:
for i in range(5):
    if i == 3:
        pass  # Placeholder for future code
    print(i)


Copy
continue
 : The 
continue
 statement skips the rest of the code in the current iteration and moves to the next iteration of the loop. Example:
for i in range(5):
    if i == 3:
        continue  # Skip the current iteration when i == 3
    print(i)


Copy
break
 : The 
break
 statement exits the loop immediately, regardless of the iteration condition. Example:
for i in range(5):
    if i == 3:
        break  # Exit the loop when i == 3
    print(i)


Copy
2. How can you use break and continue statements in a for loop?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#2-how-can-you-use-break-and-continue-statements-in-a-for-loop
The 
break
 statement can be used inside a 
for
 loop to terminate it early when a specific condition is met. Example:
for i in range(10):
    if i == 5:
        break  # Exit the loop when i == 5
    print(i)


Copy
The 
continue
 statement skips the rest of the current iteration and moves to the next iteration. Example:
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)  # Only prints odd numbers


Copy
3. Can you resume a loop after a break ?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#3-can-you-resume-a-loop-after-a-break
Once a 
break
 statement is executed, the loop terminates, and the code after the loop is executed. If you want to “continue” a loop after breaking, you need to reinitialize the loop.
For Example:
for i in range(3):  # First loop
    if i == 1:
        break  # Break out of the loop when i == 1
    print(f"First loop iteration: {i}")

# Restarting the loop
for i in range(3, 6):  # Second loop
    print(f"Second loop iteration: {i}")


Copy
4. How can I use a break statement in my Python for loops?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#4-how-can-i-use-a-break-statement-in-my-python-for-loops
The 
break
 statement is straightforward to use in a for loop to terminate it when a specific condition is met:
for i in range(5):
    print(f"Checking value: {i}")
    if i == 2:
        print("Condition met. Breaking out of the loop.")
        break  # Exit the loop immediately
print("Loop ended.")


Copy
5. How to code a loop in Python ?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#5-how-to-code-a-loop-in-python
In Python, loops can be written using 
for
 or 
while
 . Examples:
Using a 
for
 loop:
for i in range(5):
    print(i)  # Prints numbers from 0 to 4


Copy
Using a 
while
 loop:
count = 0
while count < 5:
    print(count)  # Prints numbers from 0 to 4
    count += 1


Copy
To learn more about using 
for
 loop and 
while
 loop in python, you can refer to the tutorials below:
Using for Loop in Python
https://www.digitalocean.com/community/tutorials/python-for-loop-example
Using While loop in Python
https://www.digitalocean.com/community/tutorials/how-to-construct-while-loops-in-python-3
6. What does pass do in a Python for loop?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#6-what-does-pass-do-in-a-python-for-loop
The 
pass
 statement acts as a placeholder and performs no action. It's often used when a block of code is syntactically required but hasn't been implemented yet:
for i in range(5):
    if i == 3:
        pass  # Placeholder
    print(i)


Copy
0
1
2
3
4


7. Does Python break exit all loops ?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#7-does-python-break-exit-all-loops
No, the 
break
 statement only exits the innermost loop where it is executed. To exit nested loops, you can use additional control mechanisms, such as flags or functions. Example:
for i in range(3):
    for j in range(3):
        if i == 1 and j == 1:
            break  # Exits the inner loop
        print(f"i={i}, j={j}")


Copy
i=0, j=0
i=0, j=1
i=0, j=2
i=1, j=0
i=2, j=0
i=2, j=1
i=2, j=2


To exit all loops, you can use a flag or wrap the loops in a function and use 
return
 :
# Using a flag
flag = False
for i in range(3):
    for j in range(3):
        if i == 1 and j == 1:
            flag = True
            break
        print(f"i={i}, j={j}")
    if flag:
        break

# Using a function
def nested_loops():
    for i in range(3):
        for j in range(3):
            if i == 1 and j == 1:
                return  # Exit all loops
            print(f"i={i}, j={j}")

nested_loops()


Copy
8. How to break from multiple nested loops in Python?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#8-how-to-break-from-multiple-nested-loops-in-python
Python does not support a built-in syntax like 
break 2
 to exit multiple nested loops at once. Instead, you can break out of nested loops using one of the following methods:
Use a flag variable:
found = False

for i in range(3):
    for j in range(3):
        if some_condition(i, j):
            found = True
            break  # Break inner loop
    if found:
        break  # Break outer loop


Copy
 
2. 
Wrap the loops in a function and use return :
def search():
    for i in range(3):
        for j in range(3):
            if some_condition(i, j):
                print("Condition met.")
                return  # Exits both loops

search()


Copy
This function-based approach is often preferred for readability and modularity.
9. Is there a break level parameter in Python loops?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#9-is-there-a-break-level-parameter-in-python-loops
No, Python does not have a 
break
 level or label-based loop control like some other languages (such as Java or PHP). The 
break
 statement in Python always exits only the innermost loop in which it is used.
To exit from multiple levels of nesting, you need to use:
A 
flag
 to signal the outer loop.
A 
function
 with 
return
 .
An 
exception
, though that should be used carefully and only when appropriate.
10. How to exit an outer loop from inside an inner loop?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#10-how-to-exit-an-outer-loop-from-inside-an-inner-loop
To exit an outer loop from inside an inner loop, you can either:
Use a flag variable that gets set inside the inner loop and checked in the outer loop:
exit_outer = False

for i in range(5):
    for j in range(5):
        if i == 2 and j == 3:
            exit_outer = True
            break
    if exit_outer:
        break


Copy
 
2. Encapsulate the loop in a function and use 
return
 for a cleaner and more Pythonic approach:
def process():
    for i in range(5):
        for j in range(5):
            if i == 2 and j == 3:
                print("Exiting from nested loop.")
                return

process()


Copy
11. Is using exceptions for loop breaking a good practice?
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#11-is-using-exceptions-for-loop-breaking-a-good-practice
Using exceptions to break out of loops is technically possible but not considered good practice for normal control flow.
class BreakOut(Exception):
    pass

try:
    for i in range(3):
        for j in range(3):
            if i == 1 and j == 1:
                raise BreakOut()
except BreakOut:
    print("Exited nested loops using exception.")


Copy
While this works, exceptions are meant for unexpected or exceptional conditions, not standard loop control. Using exceptions this way can make your code harder to read, maintain, and debug. Prefer flags or function-based exits unless you're dealing with a truly exceptional case.
Conclusion
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#conclusion
You explored the core loop control statements in Python: 
break
 , 
continue
 , and 
pass
 , explaining their behavior with clear examples and practical use cases. We also explored more advanced control flow techniques, such as breaking out of nested loops using flags and function returns, and discussed the use of exceptions for loop termination along with their trade-offs.
Additionally, we introduced the 
else
 clause on loops, highlighting how it can simplify certain search patterns by eliminating the need for extra flags. Real-world examples such as data parsing, file scanning, grid searches, and input validation were used to show how these techniques apply in practice. Together, these concepts help you write more structured, readable, and efficient loop logic in Python.
To further build your understanding of Python loops and core programming concepts, check out these helpful tutorials:
Python for loop
https://www.digitalocean.com/community/tutorials/python-for-loop-example
A Practical Python Tutorial for Beginners
https://www.digitalocean.com/community/tutorials/python-tutorial
6 Ways to Concatenate Lists in Python
https://www.digitalocean.com/community/tutorials/concatenate-lists-python
How To Construct While Loops in Python 3
https://www.digitalocean.com/community/tutorials/how-to-construct-while-loops-in-python-3
How To Create a Twitterbot with Python 3 and the Tweepy Library
https://www.digitalocean.com/community/tutorials/how-to-create-a-twitterbot-with-python-3-and-the-tweepy-library
.
Thanks for learning with the DigitalOcean Community. Check out our offerings for compute, storage, networking, and managed databases.
Learn more about our products
https://www.digitalocean.com/products
Tutorial Series: How To Code in Python
Python is a flexible and versatile programming language that can be leveraged for many use cases, with strengths in scripting, automation, data analysis, machine learning, and back-end development. It is a great tool for both new learners and experienced developers alike.
Python
https://www.digitalocean.com/community/tags/python
Development
https://www.digitalocean.com/community/tags/development
Visit series page
https://www.digitalocean.com/community/tutorial-series/how-to-code-in-python-3
Browse Series: 36 tutorials
1/36 - 
How To Write Your First Python 3 Program
https://www.digitalocean.com/community/tutorials/how-to-write-your-first-python-3-program
2/36 - 
How To Work with the Python Interactive Console
https://www.digitalocean.com/community/tutorials/how-to-work-with-the-python-interactive-console
3/36 - 
How To Write Comments in Python 3
https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-python-3
Expand to view all
About the author(s)
Lisa Tagliaferri
https://www.digitalocean.com/community/users/ltagliaferri
 
Anish Singh Walia
https://www.digitalocean.com/community/users/asinghwalia
 
Manikandan Kurup
https://www.digitalocean.com/community/users/mkurup
 
Vinayak Baranwal
https://www.digitalocean.com/community/users/vinayakbaranwal
Category:
Tutorial
https://www.digitalocean.com/community/tutorials?subtype=tutorial
Tags:
Python
https://www.digitalocean.com/community/tags/python
Development
https://www.digitalocean.com/community/tags/development
 

https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&text=&via=digitalocean
 

https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&t=
 

https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&title=
 

https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&t=
Still looking for an answer?
Ask a question
https://www.digitalocean.com/community/questions
 
Search for more help
https://www.digitalocean.com/community
Was this helpful?
Yes No
Comments(4) Follow-up questions(0) 

https://www.digitalocean.com/community/markdown
Leave a comment...
This textbox defaults to using Markdown to format your answer.
You can type !ref in this text area to quickly search our full set of tutorials, documentation & marketplace offerings and insert the link!
Sign in/up to comment
https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=register
 
Topspap
https://www.digitalocean.com/community/users/topspap
December 1, 2018
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3?comment=75502
Show less
Well done, Fully understood. Thanks for clarification. Have a nice day
Reply
 
c12940
https://www.digitalocean.com/community/users/c12940
August 29, 2019
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3?comment=82027
Show less
exaplined quite simple, that's nice; but you have a major error in your code: you modify the counter within the loop. Thr for with range automatically visits all values in the range. If you then increase the counter you will end up having only even numbers printed ;-)
Reply
 
Tasisat Home
https://www.digitalocean.com/community/users/tasisathome
January 7, 2024
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3?comment=201675
Show less
is writing pass necessary? and what if we don't write it?
Reply
(1) replies
 
Owen McGonagle
https://www.digitalocean.com/community/users/owenmcgonagle
April 14, 2024
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3?comment=203758
Show less
Typo in example - blank line between break and print should not be there.
for number in range(10):
    if number == 5:
        break    # break here
    print('Number is ' + str(number))


Reply
(1) replies
This work is licensed under a Creative Commons Attribution-NonCommercial- ShareAlike 4.0 International License.
Deploy on DigitalOcean
Click below to sign up for DigitalOcean's virtual machines, Databases, and AIML products.
Sign up
https://cloud.digitalocean.com/registrations/new?refcode=f6fcd01aaffb
Popular Topics
AI/ML
https://www.digitalocean.com/community/tags/ai-ml
Ubuntu
https://www.digitalocean.com/community/tags/ubuntu
Linux Basics
https://www.digitalocean.com/community/tags/linux-basics
JavaScript
https://www.digitalocean.com/community/tags/javascript
Python
https://www.digitalocean.com/community/tags/python
MySQL
https://www.digitalocean.com/community/tags/mysql
Docker
https://www.digitalocean.com/community/tags/docker
Kubernetes
https://www.digitalocean.com/community/tags/kubernetes
All tutorials
https://www.digitalocean.com/community/tutorials
Talk to an expert
https://www.digitalocean.com/company/contact/sales?referrer=tutorials
Connect on Discord
Join the conversation in our Discord to connect with fellow developers
Visit Discord
https://discord.gg/digitalocean
Featured tutorials
SOLID Design Principles Explained: Building Better Software Architecture
https://www.digitalocean.com/community/tutorials/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
How To Remove Docker Images, Containers, and Volumes
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
How to Create a MySQL User and Grant Privileges (Step-by-Step)
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
All tutorials
https://www.digitalocean.com/community/tutorials
All topic tags
https://www.digitalocean.com/community/tags
Join the Tech Talk
Success!
 Thank you! Please check your email for further details.
Please complete your information!
 
Sign up
Table of contents
Introduction
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#introduction
Key Takeaways
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#key-takeaways
Prerequisites
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#prerequisites
Break Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#break-statement
Continue Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#continue-statement
Pass Statement
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#pass-statement
Performance Implications: Exceptions vs Flags vs Functions
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#performance-implications-exceptions-vs-flags-vs-functions
Using the else Clause with Loops for Cleaner Exits
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#using-the-else-clause-with-loops-for-cleaner-exits
Real-World Scenarios for Multi-Level Loop Breaks
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#real-world-scenarios-for-multi-level-loop-breaks
FAQs
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#faqs
Conclusion
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3#conclusion
Deploy on DigitalOcean
Click below to sign up for DigitalOcean's virtual machines, Databases, and AIML products. 
Sign up
https://cloud.digitalocean.com/registrations/new?refcode=f6fcd01aaffb
Popular Topics
1. [AI/ML](https://www.digitalocean.com/community/tags/ai-ml)
2. [Ubuntu](https://www.digitalocean.com/community/tags/ubuntu)
3. [Linux Basics](https://www.digitalocean.com/community/tags/linux-basics)
4. [JavaScript](https://www.digitalocean.com/community/tags/javascript)
5. [Python](https://www.digitalocean.com/community/tags/python)
6. [MySQL](https://www.digitalocean.com/community/tags/mysql)
7. [Docker](https://www.digitalocean.com/community/tags/docker)
8. [Kubernetes](https://www.digitalocean.com/community/tags/kubernetes)
9. [All tutorials](https://www.digitalocean.com/community/tutorials)
10. [Talk to an expert](https://www.digitalocean.com/company/contact/sales?referrer=tutorials)


Connect on Discord
Join the conversation in our Discord to connect with fellow developers 
Visit Discord
https://discord.gg/digitalocean
Featured tutorials
1. [SOLID Design Principles Explained: Building Better Software Architecture](https://www.digitalocean.com/community/tutorials/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
2. [How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
3. [How to Create a MySQL User and Grant Privileges (Step-by-Step)](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql)


All tutorials
https://www.digitalocean.com/community/tutorials
All topic tags
https://www.digitalocean.com/community/tags
 
Become a contributor for community
Get paid to write technical tutorials and select a tech-focused charity to receive a matching donation.
Sign Up
https://www.digitalocean.com/community/pages/write-for-digitalocean
 
DigitalOcean Documentation
Full documentation for every DigitalOcean product.
Learn more
https://docs.digitalocean.com/
 
Resources for startups and AI-native businesses
The Wave has everything you need to know about building a business, from raising funding to marketing your product.
Learn more
https://www.digitalocean.com/resources
Stay up to date, sign up for our newsletter
Email*
Submit
The developer cloud
Scale up as you grow — whether you're running one virtual machine or ten thousand.
View all products
https://www.digitalocean.com/products
 
Start building today
From GPU-powered inference and Kubernetes to managed databases and storage, get everything you need to build, scale, and deploy intelligent applications.
Sign up
https://cloud.digitalocean.com/registrations/new
 
Company
About
https://www.digitalocean.com/about
Leadership
https://www.digitalocean.com/leadership/executive-management
Blog
https://www.digitalocean.com/blog
Careers
https://www.digitalocean.com/careers
Customers
https://www.digitalocean.com/customers
Partners
https://www.digitalocean.com/partners
Referral Program
https://www.digitalocean.com/referral-program
Affiliate Program
https://www.digitalocean.com/affiliates
Press
https://www.digitalocean.com/press
Legal
https://www.digitalocean.com/legal
Privacy Policy
https://www.digitalocean.com/legal/privacy-policy
Security
https://www.digitalocean.com/security
Investor Relations
https://investors.digitalocean.com/
Products
GPU Droplets
https://www.digitalocean.com/products/gpu-droplets
Bare Metal GPUs
https://www.digitalocean.com/products/bare-metal-gpus
Inference Engine
https://www.digitalocean.com/products/inference-engine
Data & Learning
https://www.digitalocean.com/data-learning
Evaluations
https://www.digitalocean.com/products/inference-engine/evaluations
Model Library
https://www.digitalocean.com/products/model-library
Droplets
https://www.digitalocean.com/products/droplets
Kubernetes
https://www.digitalocean.com/products/kubernetes
Functions
https://www.digitalocean.com/products/functions
App Platform
https://www.digitalocean.com/products/app-platform
Load Balancers
https://www.digitalocean.com/products/load-balancers
Managed Databases
https://www.digitalocean.com/products/managed-databases
Spaces
https://www.digitalocean.com/products/spaces
Block Storage
https://www.digitalocean.com/products/block-storage
Network File Storage
https://www.digitalocean.com/products/storage/network-file-storage
API
https://docs.digitalocean.com/reference/api
Uptime
https://www.digitalocean.com/products/uptime-monitoring
Cloud Security Posture Management (CSPM)
https://www.digitalocean.com/products/cloud-security-posture-management
Identity and Access Management (IAM)
https://www.digitalocean.com/products/identity-access-management
Cloudways
https://www.digitalocean.com/products/cloudways
View all Products
https://www.digitalocean.com/products
Resources
Community Tutorials
https://www.digitalocean.com/community/tutorials
Community Q&A
https://www.digitalocean.com/community/questions
CSS-Tricks
https://css-tricks.com/
Write for DOnations
https://www.digitalocean.com/community/pages/write-for-digitalocean
Currents Research
https://www.digitalocean.com/currents
DigitalOcean Startups
https://www.digitalocean.com/startups
Wavemakers Program
https://www.digitalocean.com/wavemakers
Compass Council
https://www.digitalocean.com/research
Open Source
https://www.digitalocean.com/open-source
Newsletter Signup
https://www.digitalocean.com/community#iaan
Marketplace
https://www.digitalocean.com/products/marketplace
Pricing
https://www.digitalocean.com/pricing
Pricing Calculator
https://www.digitalocean.com/pricing/calculator
Documentation
https://docs.digitalocean.com/
Release Notes
https://docs.digitalocean.com/release-notes
Code of Conduct
https://www.digitalocean.com/community/pages/code-of-conduct
Shop Swag
https://store.digitalocean.com/
Solutions
AI Training GPU
https://www.digitalocean.com/solutions/ai-training-gpu
GPU Inference
https://www.digitalocean.com/solutions/gpu-inference
VPS Hosting
https://www.digitalocean.com/solutions/vps-hosting
Website Hosting
https://www.digitalocean.com/solutions/website-hosting
VPN
https://www.digitalocean.com/solutions/vpn
Docker Hosting
https://www.digitalocean.com/solutions/docker-hosting
Node.js Hosting
https://www.digitalocean.com/solutions/nodejs-hosting
Web Mobile Apps
https://www.digitalocean.com/solutions/web-mobile-apps
WordPress Hosting
https://www.digitalocean.com/solutions/wordpress-hosting
Virtual Machines
https://www.digitalocean.com/solutions/virtual-machines
View all Solutions
https://www.digitalocean.com/solutions
Contact
Support
https://www.digitalocean.com/support
Sales
https://www.digitalocean.com/company/contact/sales?referrer=footer
Report Abuse
https://www.digitalocean.com/company/contact/abuse
System Status
https://status.digitalocean.com/
Share your ideas
https://ideas.digitalocean.com/
Company
About
https://www.digitalocean.com/about
Leadership
https://www.digitalocean.com/leadership/executive-management
Blog
https://www.digitalocean.com/blog
Careers
https://www.digitalocean.com/careers
Customers
https://www.digitalocean.com/customers
Partners
https://www.digitalocean.com/partners
Referral Program
https://www.digitalocean.com/referral-program
Affiliate Program
https://www.digitalocean.com/affiliates
Press
https://www.digitalocean.com/press
Legal
https://www.digitalocean.com/legal
Privacy Policy
https://www.digitalocean.com/legal/privacy-policy
Security
https://www.digitalocean.com/security
Investor Relations
https://investors.digitalocean.com/
Products
GPU Droplets
https://www.digitalocean.com/products/gpu-droplets
Bare Metal GPUs
https://www.digitalocean.com/products/bare-metal-gpus
Inference Engine
https://www.digitalocean.com/products/inference-engine
Data & Learning
https://www.digitalocean.com/data-learning
Evaluations
https://www.digitalocean.com/products/inference-engine/evaluations
Model Library
https://www.digitalocean.com/products/model-library
Droplets
https://www.digitalocean.com/products/droplets
Kubernetes
https://www.digitalocean.com/products/kubernetes
Functions
https://www.digitalocean.com/products/functions
App Platform
https://www.digitalocean.com/products/app-platform
Load Balancers
https://www.digitalocean.com/products/load-balancers
Managed Databases
https://www.digitalocean.com/products/managed-databases
Spaces
https://www.digitalocean.com/products/spaces
Block Storage
https://www.digitalocean.com/products/block-storage
Network File Storage
https://www.digitalocean.com/products/storage/network-file-storage
API
https://docs.digitalocean.com/reference/api
Uptime
https://www.digitalocean.com/products/uptime-monitoring
Cloud Security Posture Management (CSPM)
https://www.digitalocean.com/products/cloud-security-posture-management
Identity and Access Management (IAM)
https://www.digitalocean.com/products/identity-access-management
Cloudways
https://www.digitalocean.com/products/cloudways
View all Products
https://www.digitalocean.com/products
Resources
Community Tutorials
https://www.digitalocean.com/community/tutorials
Community Q&A
https://www.digitalocean.com/community/questions
CSS-Tricks
https://css-tricks.com/
Write for DOnations
https://www.digitalocean.com/community/pages/write-for-digitalocean
Currents Research
https://www.digitalocean.com/currents
DigitalOcean Startups
https://www.digitalocean.com/startups
Wavemakers Program
https://www.digitalocean.com/wavemakers
Compass Council
https://www.digitalocean.com/research
Open Source
https://www.digitalocean.com/open-source
Newsletter Signup
https://www.digitalocean.com/community#iaan
Marketplace
https://www.digitalocean.com/products/marketplace
Pricing
https://www.digitalocean.com/pricing
Pricing Calculator
https://www.digitalocean.com/pricing/calculator
Documentation
https://docs.digitalocean.com/
Release Notes
https://docs.digitalocean.com/release-notes
Code of Conduct
https://www.digitalocean.com/community/pages/code-of-conduct
Shop Swag
https://store.digitalocean.com/
Solutions
AI Training GPU
https://www.digitalocean.com/solutions/ai-training-gpu
GPU Inference
https://www.digitalocean.com/solutions/gpu-inference
VPS Hosting
https://www.digitalocean.com/solutions/vps-hosting
Website Hosting
https://www.digitalocean.com/solutions/website-hosting
VPN
https://www.digitalocean.com/solutions/vpn
Docker Hosting
https://www.digitalocean.com/solutions/docker-hosting
Node.js Hosting
https://www.digitalocean.com/solutions/nodejs-hosting
Web Mobile Apps
https://www.digitalocean.com/solutions/web-mobile-apps
WordPress Hosting
https://www.digitalocean.com/solutions/wordpress-hosting
Virtual Machines
https://www.digitalocean.com/solutions/virtual-machines
View all Solutions
https://www.digitalocean.com/solutions
Contact
Support
https://www.digitalocean.com/support
Sales
https://www.digitalocean.com/company/contact/sales?referrer=footer
Report Abuse
https://www.digitalocean.com/company/contact/abuse
System Status
https://status.digitalocean.com/
Share your ideas
https://ideas.digitalocean.com/
© 2026 DigitalOcean, LLC. 
Sitemap
https://www.digitalocean.com/sitemap
. 
Cookie Preferences
https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3
This site uses cookies and related technologies, as described in our 
privacy policy
https://www.digitalocean.com/legal/privacy-policy/
, for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our 
cookie policy
https://www.digitalocean.com/legal/cookie-policy
 for more information.
Agree & Proceed Decline All Manage Choices
Loading...
Community
Product Docs
Marketplace
DigitalOcean Blog
navigate go exit