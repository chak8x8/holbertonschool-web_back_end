#!/usr/bin/env python3
"""
Module for collecting random numbers using async comprehension.
"""

from typing import List


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers
    from async_generator using async comprehension.

    Returns:
        List[float]: List of 10 random numbers.
    """
    async_generator = __import__('0-async_generator').async_generator
    result = [x async for x in async_generator()]
    return result
