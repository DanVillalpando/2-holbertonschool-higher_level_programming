#!/usr/bin/python3
"""
4. Cities by states
"""


import MySQLdb
import sys


def filter_States():
    """"
    script that lists all cities from the database hbtn_0e_4_usa
    """
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    db = MySQLdb.connect(host="localhost", port=3306, user=username,
                         passwd=password, db=database)

    cur = db.cursor()
    cur.execute("SELECT cities.id, cities.name, states.name\
                FROM cities INNER JOIN states\
                ON cities.state_id = states.id\
                ORDER BY id ASC")
    rows = cur.fetchall()
    for i in rows:
        print(i)
    cur.close()
    db.close()


if __name__ == "__main__":
    filter_States()
