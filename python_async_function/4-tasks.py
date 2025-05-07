#!/usr/bin/env python3
"""
Module for running multiple tasks concurrently.
"""

import asyncio
from typing import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay and returns
    a list of delays in ascending order.

    Args:
        n (int): Number of times to spawn task_wait_random.
        max_delay (int): Maximum delay for task_wait_random.

    Returns:
        List[float]: List of delays in ascending order.
    """
    task_wait_random = __import__('3-tasks').task_wait_random
    tasks = [task_wait_random(max_delay) for _ in range(n)]
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
