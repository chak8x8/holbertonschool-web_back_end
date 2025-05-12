#!/usr/bin/env python3
"""Module to find schools by topic in a MongoDB collection"""


def schools_by_topic(mongo_collection, topic):
    """Returns the list of schools having a specific topic.
    
    Args:
        mongo_collection: PyMongo collection object
        topic: Topic to search for
    
    Returns:
        List of documents with the specified topic
    """
    return list(mongo_collection.find({"topics": topic}))
