/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  'unallocated-cases': [{
    'name': 'Dereck Smith',
    'specialism': '',
    'type': 'Renewal',
    'date': '28 June 2018 - 13:23'
  }, {
    'name': 'Maximillia Erdman',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 14:23'
  }, {
    'name': 'Sonya Corkery',
    'specialism': '',
    'type': 'Renewal',
    'date': '28 June 2018 - 15:23'
  }, {
    'name': 'Adaline Mann',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 16:23'
  }, {
    'name': 'Arlo Spinka',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 17:23'
  }, {
    'name': 'Norma Heller',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 18:23'
  }, {
    'name': 'Lavonne Smitham',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 19:23'
  }, {
    'name': 'Royce Ryan',
    'specialism': '',
    'type': 'Renewal',
    'date': '28 June 2018 - 20:23'
  }, {
    'name': 'Vernice Trantow',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 21:23'
  }, {
    'name': 'Thomas King',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 22:23'
  }],

  'your-cases': [{
    'name': 'Oliver Reed',
    'specialism': 'Pan disability',
    'type': 'New application',
    'date': '28 June 2018 - 12:23'
  }],

  'advisers': [
    'John Goldsmith',
    'Sarah Andrews',
    'Martin Armitage',
    'Clémence Fabre',
    'Elisse Farcens',
    'Christoph Fernandez',
    'Julie Guichard',
    'Colin Julien',
    'Théo Langlois',
    'Capucine Michel',
    'Sarah Micheals',
    'Celise Mutton',
    'Richard Oulton',
    'Ed Oxley',
    'Colin Partinigton',
    'Brigit Pardeux',
    'Lionel Phelps',
    'Anne Pinkton',
    'Lisa Punchton',
    'Paul Rice'
  ],

  'specialisms': [
    'Self-employed',
    'Hidden impairments',
    'Large employer',
    'Deaf',
    'Visually impaired',
    'Pan disability'
  ]
}
