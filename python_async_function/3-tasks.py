#!/usr/bin/env python3
"""
Module for creating an asyncio Task.
"""

import asyncio


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates an asyncio Task for wait_random with the specified max_delay.

    Args:
        max_delay (int): Maximum delay for wait_random.

    Returns:
        asyncio.Task: Task for wait_random coroutine.
    """
    wait_random = __import__('0-basic_async_syntax').wait_random
    return asyncio.create_task(wait_random(max_delay))
