"""
Processes the Toronto Open Data and creates a list of the business data types.

Copyright and Usage Information
==================================================

This file is released under the MIT license.
"""

import data_processing_classes
import csv


def csv_to_datafile(line: list[str]) -> data_processing_classes.Business:
    """Returns the custom Python dataclass for a business,
    from a line of the csv file.
    """
    name = line[1]
    description = line[2]
    green_commitment = line[3]
    category = line[4]
    street = line[9]
    phone = line[14]
    email = line[15]
    website = line[16]
    hours = {
        'monday': line[17],
        'tuesday': line[18],
        'wednesday': line[19],
        'thursday': line[20],
        'friday': line[21],
        'saturday': line[22],
        'sunday': line[23]
    }
    business = data_processing_classes.Business(name=name, description=description,
                                                green_commitment=green_commitment,
                                                street=street, phone=phone, email=email,
                                                website=website, hours=hours, category=category)
    return business


def read_csv_file(filename: str) -> list[data_processing_classes.Business]:
    """Reads a CSV file and converts it into a list of
    businesses."""
    businesses = []
    with open(filename, newline='', encoding='utf8') as csvfile:
        csv_reader = csv.reader(csvfile, delimiter=',')
        for line in csv_reader:
            businesses.append(csv_to_datafile(line))
    return businesses
