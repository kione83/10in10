import requests
from bs4 import BeautifulSoup
import pandas as pd

# import latest openpyxl version
import openpyxl
from openpyxl import load_workbook
# Define the website URL
url = 'https://dfwveteranschamber.org/membership-directory/'

# Scrape the website and create a Pandas DataFrame with the results
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
listings = soup.find_all('div', {'class': 'atbd_listing_director_info'})
data = []
for listing in listings:
    name = listing.find('h4', {'class': 'atbd_listing_title'}).text.strip()
    phone = listing.find(
        'span', {'class': 'atbd_listing_phone_number'}).text.strip()
    email = listing.find('a', {'class': 'atbd_listing_email'}).text.strip()
    website = listing.find('a', {'class': 'atbd_listing_website'}).text.strip()
    data.append([name, phone, email, website])
df = pd.DataFrame(data, columns=['Name', 'Phone', 'Email', 'Website'])

# Save the data to an Excel file
file_path = 'members.xlsx'
df.to_excel(file_path, index=False)
