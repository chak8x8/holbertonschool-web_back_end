#!/usr/bin/env python3
"""Script to provide stats about Nginx logs in MongoDB"""


from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # Count total documents
    collection.count_documents({})

    # Count documents for each method: GET, POST, PUT, PATCH, DELETE
    collection.count_documents({"method": "GET"})
    collection.count_documents({"method": "POST"})
    collection.count_documents({"method": "PUT"})
    collection.count_documents({"method": "PATCH"})
    collection.count_documents({"method": "DELETE"})

    # Count documents with method=GET and path=/status
    collection.count_documents({"method": "GET", "path": "/status"})
