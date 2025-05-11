Pagination
==========

-   By Emmanuel Turlay, Staff Software Engineer at Cruise
-   Weight: 1
-   Your score will be updated as you progress.

Concepts
--------

*For this project, students are expected to look at these concepts:*

-   [REST API Design: Pagination](https://alx-intranet.hbtn.io/rltoken/REST_API_Pagination)
-   [HATEOAS](https://alx-intranet.hbtn.io/rltoken/HATEOAS)

Background Context
------------------

Paginate a dataset of popular baby names using Python.


![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/3646eb02de6527ca5d83.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250511%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250511T073238Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8bd5f42fd38d638bfd451f700601258ba69b75c32a818b174ff7ec22e00e746c)
![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/746187b76bea1f46030e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250511%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250511T073238Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7a544a99fc39338d67c1909f715def179db27ba9a5c1e6614c450a993782a02a)
![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/665ce871c2ecc66a8e71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250511%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250511T073238Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=be2c358cfd018af4fe2c550a8ef68bcc51097c1e1ea9b9da62cbb9825b54e077)

Resources
---------

**Read or watch**:

-   [REST API Design: Pagination](https://alx-intranet.hbtn.io/rltoken/REST_API_Pagination)
-   [HATEOAS](https://alx-intranet.hbtn.io/rltoken/HATEOAS)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/explain), **without the help of Google**:

### General

-   How to paginate a dataset with simple page and page_size parameters
-   How to paginate a dataset with hypermedia metadata
-   How to paginate in a deletion-resilient manner

Requirements
------------

### General

-   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/usr/bin/env python3`
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `pycodestyle` style (version 2.5.*)
-   The length of your files will be tested using `wc`
-   All your modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
-   All your functions should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`)
-   Documentation is a real sentence explaining the purpose of the module, class, or method
-   All your functions and coroutines must be type-annotated

### Setup

-   Use `Popular_Baby_Names.csv` for your project

Tasks
-----

### 0. Simple helper function

Write a function named `index_range` that takes two integer arguments `page` and `page_size`.

The function should return a tuple of size two containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters.

Page numbers are 1-indexed, i.e., the first page is page 1.

**Example:**

```python
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)
```

**Output:**

```
<class 'tuple'>
(0, 7)
<class 'tuple'>
(30, 45)
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `pagination`
-   File: `0-simple_helper_function.py`

### 1. Simple pagination

Copy `index_range` from the previous task and the following class into your code:

```python
import csv
import math
from typing import List

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        pass
```

Implement a method named `get_page` that takes two integer arguments `page` with default value 1 and `page_size` with default value 10.

-   Use `Popular_Baby_Names.csv`
-   Use `assert` to verify that both arguments are integers greater than 0
-   Use `index_range` to find the correct indexes to paginate the dataset
-   Return the appropriate page of the dataset
-   Return an empty list if input arguments are out of range

**Example:**

```python
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('1-simple_pagination').Server

server = Server()

try:
    should_err = server.get_page(-10, 2)
except AssertionError:
    print("AssertionError raised with negative values")

try:
    should_err = server.get_page(0, 0)
except AssertionError:
    print("AssertionError raised with 0")

try:
    should_err = server.get_page(2, 'Bob')
except AssertionError:
    print("AssertionError raised when page and/or page_size are not ints")

print(server.get_page(1, 3))
print(server.get_page(3, 2))
print(server.get_page(3000, 100))
```

**Output:**

```
AssertionError raised with negative values
AssertionError raised with 0
AssertionError raised when page and/or page_size are not ints
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3']]
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']]
[]
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `pagination`
-   File: `1-simple_pagination.py`

### 2. Hypermedia pagination

Replicate code from the previous task.

Implement a `get_hyper` method that takes the same arguments (and defaults) as `get_page` and returns a dictionary with:

-   `page_size`: length of the returned dataset page
-   `page`: current page number
-   `data`: dataset page
-   `next_page`: number of the next page, `None` if no next page
-   `prev_page`: number of the previous page, `None` if no previous page
-   `total_pages`: total number of pages in the dataset as an integer

Reuse `get_page` in your implementation.

**Example:**

```python
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('2-hypermedia_pagination').Server

server = Server()

print(server.get_hyper(1, 2))
print("---")
print(server.get_hyper(2, 2))
print("---")
print(server.get_hyper(100, 3))
print("---")
print(server.get_hyper(3000, 100))
```

**Output:**

```
{'page_size': 2, 'page': 1, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2']], 'next_page': 2, 'prev_page': None, 'total_pages': 9709}
---
{'page_size': 2, 'page': 2, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4']], 'next_page': 3, 'prev_page': 1, 'total_pages': 9709}
---
{'page_size': 3, 'page': 100, 'data': [['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Londyn', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Amirah', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'McKenzie', '14', '39']], 'next_page': 101, 'prev_page': 99, 'total_pages': 6473}
---
{'page_size': 0, 'page': 3000, 'data': [], 'next_page': None, 'prev_page': 2999, 'total_pages': 195}
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `pagination`
-   File: `2-hypermedia_pagination.py`

### 3. Deletion-resilient hypermedia pagination

Start `3-hypermedia_del_pagination.py` with:

```python
#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        pass
```

Implement a `get_hyper_index` method with two integer arguments: `index` with a `None` default value and `page_size` with default value of 10.

The method should return a dictionary with:

-   `index`: current start index of the return page
-   `next_index`: next index to query with
-   `page_size`: current page size
-   `data`: actual page of the dataset

**Requirements/Behavior:**

-   Use `assert` to verify `index` is in a valid range
-   If `index` is 0, `page_size` 10, return rows 0 to 9
-   If next `index` (10) with `page_size` 10 is requested, but rows 3, 6, 7 were deleted, return rows 10 to 19

**Example:**

```python
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('3-hypermedia_del_pagination').Server

server = Server()

server.indexed_dataset()

try:
    server.get_hyper_index(300000, 100)
except AssertionError:
    print("AssertionError raised when out of range")

index = 3
page_size = 2

print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 1- request first index
res = server.get_hyper_index(index, page_size)
print(res)

# 2- request next index
print(server.get_hyper_index(res.get('next_index'), page_size))

# 3- remove the first index
del server._Server__indexed_dataset[res.get('index')]
print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 4- request again the initial index
print(server.get_hyper_index(index, page_size))

# 5- request again initial next index
print(server.get_hyper_index(res.get('next_index'), page_size))
```

** GROWING OUTPUT:**

```
AssertionError raised when out of range
Nb items: 19418
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4']], 'page_size': 2, 'next_index': 5}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
Nb items: 19417
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']], 'page_size': 2, 'next_index': 6}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `pagination`
-   File: `3-hypermedia_del_pagination.py`