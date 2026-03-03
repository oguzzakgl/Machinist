import pymysql

try:
    connection = pymysql.connect(
        host='127.0.0.1',
        user='root',
        password='1907'
    )
    with connection.cursor() as cursor:
        cursor.execute("CREATE DATABASE IF NOT EXISTS machinist CHARACTER SET utf8 COLLATE utf8_general_ci;")
    connection.commit()
    print("Database machinist created successfully.")
except Exception as e:
    print(f"Error: {e}")
finally:
    if 'connection' in locals() and connection.open:
        connection.close()
