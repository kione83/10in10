require 'nokogiri'
require 'open-uri'
require 'roo'
require 'write_xlsx'

# Define the website URL
url = 'https://dfwveteranschamber.org/membership-directory/'

# Scrape the website and create a 2D array with the results
doc = Nokogiri::HTML(URI.open(url))
listings = doc.css('.atbd_listing_director_info')
data = [['Name', 'Phone', 'Email', 'Website']]
listings.each do |listing|
  name = listing.css('.atbd_listing_title').text.strip
  phone = listing.css('.atbd_listing_phone_number').text.strip
  email = listing.css('.atbd_listing_email').text.strip
  website = listing.css('.atbd_listing_website').text.strip
  data << [name, phone, email, website]
end

# Save the data to an Excel file
file_path = 'python/scrape.xlsx'
workbook = WriteXLSX.new(file_path)
worksheet = workbook.add_worksheet
data.each_with_index do |row, row_index|
  row.each_with_index do |value, col_index|
    worksheet.write(row_index, col_index, value)
  end
end
workbook.close

puts "Done! Data saved to #{file_path}"