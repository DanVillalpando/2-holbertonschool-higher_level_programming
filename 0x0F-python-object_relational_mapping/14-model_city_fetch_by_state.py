#!/usr/bin/python3
"""
Script that lists all State objects from the
hbtn_0e_6_usa database
"""

from sys import argv
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from model_city import City

if __name__ == "__main__":

    user = argv[1]
    password = argv[2]
    database = argv[3]

    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format
                           (user, password, database), pool_pre_ping=True)
    Base.metadata.create_all(engine)

    session = Session(engine)
    all_c = session.query(City, State).filter(City.state.id == State.id)\
        .order_by(City.id.asc()).all()

    for city, state in all_c:
        print("{}: ({}) {}".format(state.name, city.id, city.name))

    session.close()
