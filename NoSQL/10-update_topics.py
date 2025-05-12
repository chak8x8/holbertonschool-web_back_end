#!/usr/bin/env python3
"""Module to update topics in a MongoDB collection"""

def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on name.
    
    Args:
        mongo_collection: PyMongo collection object
        name: School name to update
        topics: List of topics to set
    
    Returns:
        None
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
