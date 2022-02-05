"""
Custom data class for the Live Green Toronto Membership Card program
dataset.

Copyright and Usage Information
==================================================

This file is released under the MIT license.
"""
from typing import Optional
from dataclasses import dataclass


@dataclass
class Business:
    """A class that refers to a business from the
    Live Green Toronto Membership Card program.
    """
    name: str
    description: str
    green_commitment: str
    street: str
    phone: str
    email: str
    website: str
    hours: dict[str]
    category: Optional[str] = None
