#!/usr/bin/python3
"""
0.Get all states
"""


import MySQLdb
import sys


def States():
    """"
    script that lists all states from the
    database hbtn_0e_0_usa
    """
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    db = MySQLdb.connect(host="localhost", port=3306, user=username,
                         passwd=password, db=database)

    cur = db.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")
    rows = cur.fetchall()
    for i in rows:
        print(i)
    cur.close()
    db.close()


if __name__ == "__main__":
    States()
