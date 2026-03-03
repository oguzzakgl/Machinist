import pymysql

pymysql.install_as_MySQLdb()

import MySQLdb

MySQLdb.version_info = (2, 2, 3, "final", 0)
