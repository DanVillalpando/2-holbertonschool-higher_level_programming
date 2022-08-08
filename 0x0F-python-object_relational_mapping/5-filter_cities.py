#!/usr/bin/python3
"""
5. All cities by state
"""


import MySQLdb
import sys


def filter_Cities():
    """"
    script that lists all cities from the database hbtn_0e_4_usa
    """
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    db = MySQLdb.connect(host="localhost", port=3306, user=username,
                         passwd=password, db=database)

    cur = db.cursor()
    cur.execute("SELECT cities.id, cities.name, states.name\
                FROM cities INNER JOIN states\
                ON cities.state_id = states.id\
                WHERE states.name=%s\
                ORDER BY id ASC", (state_name))
    rows = cur.fetchall()
    for i in rows:
        cities.append(i[1])
    print(', '.join(cities))
    cur.close()
    db.close()


if __name__ == "__main__":
    filter_Cities()
