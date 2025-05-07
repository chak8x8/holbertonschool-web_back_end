#!/usr/bin/env python3
"""
Module for running multiple coroutines concurrently.
"""


import asyncio
from typing import List
from 0-basic_async_syntax import wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
   tasks = [wait_random(max_delay) for i in range(n)]
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