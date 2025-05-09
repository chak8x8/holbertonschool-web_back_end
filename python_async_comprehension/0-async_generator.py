#!/usr/bin/env python3
"""
Module for generating asynchronous random numbers.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that yields 10 random numbers between 0 and 10, 
    each after a 1-second delay.

    Yields:
        float: Random number between 0 and 10.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
