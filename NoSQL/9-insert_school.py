#!/usr/bin/env python3
"""Module to insert a document in a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs.
    
    Args:
        mongo_collection: PyMongo collection object
        **kwargs: Key-value pairs for the document
    
    Returns:
        The new _id of the inserted document
    """
    return mongo_collection.insert_one(kwargs).inserted_id
