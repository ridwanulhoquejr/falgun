<h3> <b>Dictionary in Python</b></h3> 
<br>
<br>

Python is a high-level programming language, with applications in numerous areas, including web programming, scripting, scientific computing, and artificial intelligence!

- Equals: a == b <br> - Not Equals: a != b <br> - Less than: a < b<br> - Less than or equal to: a <= b<br> - Greater than: a > b<br> - Greater than or equal to: a >= b<br><br>
  These conditions can be used in several ways, most commonly in "if statements" and loops.<br><br>

An <b>"if statement"</b> is written by using the if keyword.<br><br>

---

Python allows for user input.
That means we are able to ask the user for input.<br><br>

Python uses the input() method to take input from Users.<br>

The following example asks for the username, and when you entered the username, it gets printed on the screen:
<br>
<b>Syntax</b><br>
<i>lambda arguments : expression</i><br><br>
The expression is executed and the result is returned<br><br>

<b>Why Use Lambda Functions?</b><br><br>
The power of lambda is better shown when you use them as an anonymous function inside another function.<br>

Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number. <br>
<br><br>

<b>Else</b><br>
The <b>else</b> keyword catches anything which isn't caught by the preceding conditions.<br><br>

-Python can be used alongside software to create workflows.<br>
-Python can connect to database systems. It can also read and modify files.<br>
-Python can be used to handle big data and perform complex mathematics.<br>
-Python can be used for rapid prototyping, or for production-ready software development. <br>
<br>
<br>
Dictionary items are ordered, changeable, and does not allow duplicates.
<br>
Dictionary items are presented in key:value pairs, and can be referred to by using the key name.
<br>

<br>
There are various data types in Python. Some of the important types are listed below.

<br>
<br>

<h3>Assign Multiple Values</h3> <br>

Python allows you to assign values to multiple variables in one line

<br>
<br>

<h3>Python Indentation</h3> <br>

Most of the programming languages like C, C++, and Java use braces { } to define a block of code. Python, however, uses indentation. <br>

A code block (body of a function, loop, etc.) starts with indentation and ends with the first unindented line. The amount of indentation is up to you, but it must be consistent throughout that block. <br>

Generally, four whitespaces are used for indentation and are preferred over tabs.
<br>
<br>

<h3>Python Comments</h3> <br>
Comments are very important while writing a program. They describe what is going on inside a program, so that a person looking at the source code does not have a hard time figuring it out. <br>

You might forget the key details of the program you just wrote in a month's time. So taking the time to explain these concepts in the form of comments is always fruitful.<br>
<br>

In Python, we use the hash (#) symbol to start writing a comment.<br>

It extends up to the newline character. Comments are for programmers to better understand a program. Python Interpreter ignores comments.
<br>
<br>

Another way of doing this is to use triple quotes, either ''' or """.
<br>

These triple quotes are generally used for multi-line strings. But they can be used as a multi-line comment as well. Unless they are not docstrings, they do not generate any extra code.

---

<b>Add 10 to argument a, and return the result:</b>
<br>
x = lambda a : a + 10 <br>
print(x(5))<br>
<br>
<b>Lambda in function:</b> <br>

def myfunc(n): <br>
return lambda a : a \* n <br><br>

---

my_function()<br>
<br>
<b>Passing Arguments in a function</b> <br>
def add(x, y):<br>
print(x+y)<br>
<br>
add(10, 20)<br>

<br>
<br>
<b>Exit the loop when i is 3: </b>
<br>
<br>
i = 1 <br>
while i < 6:<br>
  print(i) <br>
  if i == 3:<br>
    break<br>
  i += 1<br>

<br>
<br>
<b>Continue to the next iteration if i is 3: </b>
<br>
<br>
i = 1 <br>
while i < 6:<br>
  if i == 3:<br>
    continue<br>
  print(i)<br>

<br>
<br>

<b>Elif </b>
<br>
<br>
a = 33 <br>
b = 200 <br>
if b > a:<br>
print("b is greater than a")<br>
elif a == b:<br>
print("a and b are equal")<br>
<br>
<br>
<b>Else </b>
<br>
<br>
a = 33 <br>
b = 200 <br>
if b > a:<br>
print("b is greater than a")<br>
elif a == b:<br>
print("a and b are equal")<br>
else:<br>
print("a is greater than b")<br>
<br>
<br>

<br><br>

<b> we can print a specific value of the dictionary</b> <br><br>
thisdict = { <br>
"brand": "Ford",<br>
"model": "Mustang",<br>
"year": 1964<br>
}<br>
print(thisdict["brand"])
