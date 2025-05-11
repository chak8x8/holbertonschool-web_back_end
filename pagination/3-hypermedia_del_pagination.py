#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i]\
                                      for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns a dictionary with deletion-resilient pagination metadata.

        Args:
            index: Starting index (default None, starts at 0)
            page_size: Number of items per page (default 10)

        Returns:
            Dictionary with index, next_index, page_size, data
        """

        assert isinstance(page_size, int) and page_size > 0,\
             "page_size must be a positive integer"
        indexed_dataset = self.indexed_dataset()
        dataset_len = len(self.dataset())

        current_index = 0 if index is None else index
        assert isinstance(current_index, int)\
            and 0 <= current_index < dataset_len,\
             "index must be a valid integer"

        data = []
        next_index = current_index
        items_collected = 0

        while items_collected < page_size and next_index < dataset_len:
            if next_index in indexed_dataset:
                data.append(indexed_dataset[next_index])
                items_collected += 1
            next_index += 1

        result = {
            'index': current_index,
            'next_index': next_index if next_index < dataset_len else None,
            'page_size': page_size,
            'data': data
        }
        return result
