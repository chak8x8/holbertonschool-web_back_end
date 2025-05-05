Python - Variable Annotations
======================

-   By: Emmanuel Turlay, Staff Software Engineer at Cruise
-   Weight: 1
-   Your score will be updated as you progress.

Concepts
--------

*For this project, we expect you to look at this concept:*

![](https://i.redd.it/y9y25tefi5401.png)

Resources
---------

**Read or watch**:

-   [Python 3 typing documentation](https://docs.python.org/3/library/typing.html)
-   [MyPy cheat sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/4mHp8pZKm5sjL4-TEJEKeg "explain to anyone"), **without the help of Google**:

### General

-   Type annotations in Python 3
-   How to use type annotations to specify function signatures and variable types
-   Duck typing
-   How to validate code with mypy

Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`
-   All files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
-   All files should end with a new line
-   The first line of all files should be exactly `#!/usr/bin/env python3`
-   A `README.md` file, at the root of the folder of the project, is required
-   Code should use the `pycodestyle` style (version 2.5.*)
-   All files must be executable
-   File length will be tested using `wc`
-   All modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
-   All classes should have documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
-   All functions (inside and outside a class) should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
-   Documentation should be a real sentence explaining the purpose of the module, class, or method (length will be verified)

Tasks
-----

### 0. Basic annotations - add

Write a type-annotated function `add` that takes a float `a` and a float `b` as arguments and returns their sum as a float.

```bash
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)

bob@dylan:~$ ./0-main.py
True
{'a': <class 'float'>, 'b': <class 'float'>, 'return': <class 'float'>}
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `0-add.py`

### 1. Basic annotations - concat

Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string.

```bash
bob@dylan:~$ cat 1-main.py
#!/usr/bin/env python3
concat = __import__('1-concat').concat

str1 = "egg"
str2 = "shell"

print(concat(str1, str2) == "{}{}".format(str1, str2))
print(concat.__annotations__)

bob@dylan:~$ ./1-main.py
True
{'str1': <class 'str'>, 'str2': <class 'str'>, 'return': <class 'str'>}
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `1-concat.py`

### 2. Basic annotations - floor

Write a type-annotated function `floor` which takes a float `n` as argument and returns the floor of the float.

```bash
bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3

import math

floor = __import__('2-floor').floor

ans = floor(3.14)

print(ans == math.floor(3.14))
print(floor.__annotations__)
print("floor(3.14) returns {}, which is a {}".format(ans, type(ans)))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `2-floor.py`

### 3. Basic annotations - to string

Write a type-annotated function `to_str` that takes a float `n` as argument and returns the string representation of the float.

```bash
bob@dylan:~$ cat 3-main.py
#!/usr/bin/env python3
to_str = __import__('3-to_str').to_str

pi_str = to_str(3.14)
print(pi_str == str(3.14))
print(to_str.__annotations__)
print("to_str(3.14) returns {} which is a {}".format(pi_str, type(pi_str)))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `3-to_str.py`

### 4. Define variables

Define and annotate the following variables with the specified values:

-   `a`, an integer with a value of 1
-   `pi`, a float with a value of 3.14
-   `i_understand_annotations`, a boolean with a value of `True`
-   `school`, a string with a value of “Holberton”

```bash
bob@dylan:~$ cat 4-main.py
#!/usr/bin/env python3

a = __import__('4-define_variables').a
pi = __import__('4-define_variables').pi
i_understand_annotations = __import__('4-define_variables').i_understand_annotations
school = __import__('4-define_variables').school

print("a is a {} with a value of {}".format(type(a), a))
print("pi is a {} with a value of {}".format(type(pi), pi))
print("i_understand_annotations is a {} with a value of {}".format(type(i_understand_annotations), i_understand_annotations))
print("school is a {} with a value of {}".format(type(school), school))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `4-define_variables.py`

### 5. Complex types - list of floats

Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float.

```bash
bob@dylan:~$ cat 5-main.py
#!/usr/bin/env python3

sum_list = __import__('5-sum_list').sum_list

floats = [3.14, 1.11, 2.22]
floats_sum = sum_list(floats)
print(floats_sum == sum(floats))
print(sum_list.__annotations__)
print("sum_list(floats) returns {} which is a {}".format(floats_sum, type(floats_sum)))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `5-sum_list.py`

### 6. Complex types - mixed list

Write a type-annotated function `sum_mixed_list` which takes a list `mxd_lst` of integers and floats and returns their sum as a float.

```bash
bob@dylan:~$ cat 6-main.py
#!/usr/bin/env python3

sum_mixed_list = __import__('6-sum_mixed_list').sum_mixed_list

print(sum_mixed_list.__annotations__)
mixed = [5, 4, 3.14, 666, 0.99]
ans = sum_mixed_list(mixed)
print(ans == sum(mixed))
print("sum_mixed_list(mixed) returns {} which is a {}".format(ans, type(ans)))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `6-sum_mixed_list.py`

### 7. Complex types - string and int/float to tuple

Write a type-annotated function `to_kv` that takes a string `k` and an int OR float `v` as arguments and returns a tuple. The first element of the tuple is the string `k`. The second element is the square of the int/float `v` and should be annotated as a float.

```bash
bob@dylan:~$ cat 7-main.py
#!/usr/bin/env python3

to_kv = __import__('7-to_kv').to_kv

print(to_kv.__annotations__)
print(to_kv("eggs", 3))
print(to_kv("school", 0.02))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `7-to_kv.py`

### 8. Complex types - functions

Write a type-annotated function `make_multiplier` that takes a float `multiplier` as argument and returns a function that multiplies a float by `multiplier`.

```bash
bob@dylan:~$ cat 8-main.py
#!/usr/bin/env python3

make_multiplier = __import__('8-make_multiplier').make_multiplier
print(make_multiplier.__annotations__)
fun = make_multiplier(2.22)
print("{}".format(fun(2.22)))
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `8-make_multiplier.py`

### 9. Let's duck type an iterable object

Annotate the below function’s parameters and return values with the appropriate types.

```python
def element_length(lst):
    return [(i, len(i)) for i in lst]
```

```bash
bob@dylan:~$ cat 9-main.py 
#!/usr/bin/env python3

element_length = __import__('9-element_length').element_length

print(element_length.__annotations__)
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `python_variable_annotations`
-   File: `9-element_length.py`
