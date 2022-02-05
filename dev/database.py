"""
Connects to Google Cloud API and puts all data into a database.

Copyright and Usage Information
==================================================

This file is released under the MIT license.
"""

import mysql.connector

mydb = mysql.connector.connect(
  host="[redacted]",
  user="[redacted]",
  password="[redacted]",
  database="[redacted]"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Businesses")

# mycursor.execute("INSERT INTO Businesses (Name, Street) VALUES ('Bruh', '123 Test');")

# mycursor.execute("CREATE TABLE Businesses (\
#                   Name varchar(255), \
#                   Description varchar(255),\
#                   GreenCommitment varchar(255),\
#                   Street varchar(255),\
#                   Phone varchar(13),\
#                   Email varchar(255),\
#                   Website varchar(255),\
#                   Category varchar(255),\
#                   Monday varchar(255),\
#                   Tuesday varchar(255),\
#                   Wednesday varchar(255),\
#                   Thursday varchar(255),\
#                   Friday varchar(255),\
#                   Saturday varchar(255),\
#                   Sunday varchar(255)\
#                   );")

# mydb.commit()

myresult = mycursor.fetchall()

for x in myresult:
  print(x)
