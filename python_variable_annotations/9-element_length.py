#!/usr/bin/env python3
"""Module to process an iterable of sequences."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with each sequence and its length."""
    return [(i, len(i)) for i in lst]
