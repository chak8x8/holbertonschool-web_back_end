#!/usr/bin/env python3
import asyncio
import random
"""
Module for basic async coroutine.
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    Waits for a random delay between 0 and max_delay seconds and returns it.
    
    Args:
        max_delay (int): Maximum delay in seconds (default 10).
    
    Returns:
        float: The random delay.
    """
    wait_random: float = random.uniform(0, max_delay)
    await asyncio.sleep(wait_random)
    return wait_random
