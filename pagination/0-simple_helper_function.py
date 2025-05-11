#!/usr/bin/env python3
"""
Module for pagination helper function.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple containing start and end indices for pagination.
    
    Args:
        page: Page number (1-indexed)
        page_size: Number of items per page
    
    Returns:
        Tuple of (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
 