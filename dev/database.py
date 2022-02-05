"""
Connects to Google Cloud API and puts all data into a database.

Copyright and Usage Information
==================================================

This file is released under the MIT license.
"""

import mysql.connector
# import data_processing

mydb = mysql.connector.connect(
  host="[redacted]",
  user="[redacted]",
  password="[redacted]",
  database="[redacted]"
)

mycursor = mydb.cursor()

# data = data_processing.read_csv_file('Data/green-toronto-member-businesses.csv')
# for business in data:
#     query = """INSERT INTO Businesses (Name, Description,
#             GreenCommitment, Street, Phone, Email,
#             Website, Category, Monday, Tuesday,
#             Wednesday, Thursday, Friday, Saturday,
#             Sunday) VALUES (%s, %s, %s, %s, %s, %s,
#             %s, %s, %s, %s, %s, %s, %s, %s, %s);"""
#     mycursor.execute(query, (business.name, business.description, business.green_commitment,
#                              business.street, business.phone, business.email, business.website,
#                              business.category, business.hours['monday'], business.hours['tuesday'],
#                              business.hours['wednesday'], business.hours['thursday'],
#                              business.hours['friday'], business.hours['saturday'], business.hours['sunday']))

mycursor.execute("SELECT * FROM Businesses WHERE Category = 'Pets'")

# mycursor.execute("DROP TABLE Businesses")

# mycursor.execute("DELETE FROM Businesses WHERE Name = 'Bruh'")

# mycursor.execute("INSERT INTO Businesses (Name, Street) VALUES ('Bruh', '123 Test');")

# mycursor.execute("CREATE TABLE Businesses (\
#                   Name varchar(255), \
#                   Description mediumtext,\
#                   GreenCommitment mediumtext,\
#                   Street varchar(255),\
#                   Phone varchar(50),\
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
