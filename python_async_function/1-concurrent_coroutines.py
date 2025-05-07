#!/usr/bin/env python3
"""
Module for running multiple coroutines concurrently.
"""

import asyncio
from typing import List
import importlib


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Maximum delay in seconds.

    Returns:
        List[float]: List of delays in ascending order.
    """
    wait_random = importlib.import_module('0-basic_async_syntax').wait_random
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    sorted_delays = []

    for delay in delays:
        for i in range(len(sorted_delays)):
            if delay < sorted_delays[i]:
                sorted_delays.insert(i, delay)
                break
        else:
            sorted_delays.append(delay)

    return sorted_delays
