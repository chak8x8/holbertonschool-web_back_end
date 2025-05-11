#!/usr/bin/env python3
"""
Module for simple pagination.
"""

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
        """
        Returns a page of the dataset based on page and page_size.

        Args:
            page: Page number (1-indexed, default 1)
            page_size: Number of items per page (default 10)

        Returns:
            List of rows for the requested page, or empty list if out of range
        """
        index_range = __import__('0-simple_helper_function').index_range

        assert isinstance(page, int) and isinstance(page_size, int), "Page and page_size must be integers"
        assert page > 0 and page_size > 0, "Page and page_size must be positive"

        start_index, end_index = index_range(page, page_size)

        dataset = self.dataset()

        if start_index >= len(dataset):
            return [] 

        return (dataset[start_index:end_index])
