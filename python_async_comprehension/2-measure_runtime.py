#!/usr/bin/env python3
"""
Module for measuring runtime of parallel async comprehensions.
"""

import asyncio
import time
from typing import List


async def measure_runtime() -> float:
    """
    Coroutine that measures the runtime of running async_comprehension 
    four times in parallel.

    Returns:
        float: Total runtime in seconds.
    """
    async_comprehension = __import__('1-async_comprehension').async_comprehension

    start = time.perf_counter()

    await asyncio.gather(*[
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    ])

    elapsed = time.perf_counter() - start
    return elapsed
