#!/usr/bin/env python3
"""Script to provide stats about Nginx logs in MongoDB"""


from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # Count total documents
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Count documents for each method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count documents with method=GET and path=/status
    status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_count} status check")
