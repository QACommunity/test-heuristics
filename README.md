# Test Heuristics

> A collection of test heuristics

## Data Types

### Strings

- Minimun and maximum length `-1`, `0`, `255+1`, `65535+1`
- Non american (ascii) characters (ÀÁÂÃ, ǼḂČÇƊ, ⱮǸÑ...)
- Invisible characters (space, tab, break, etc.)
- Delimiters (`“ ‘ \| / \ , ; : & < > ^ * ? Tab`)
- Special characters (`~!@#$%^&*+-=`)
- Emojis 😄🎉🎁✨
- Empty, null
- HTML tags
- JS code
- SQL injection (`' OR '1'='1'; drop table users;`)
- Non text (numbers, binary, blobs)

### Numbers

- Minimun and maximum values
- Scientific notation (`1E-16`)
- Floating point (decimals) (`0.0001`)
- Seprators (comma, dot, space, semicolon)
- Non number (text, symbols)

### Time and date

- Date/time in the future
- Date/time in the past
- Time difference between machines
- Crossing time zones
- Daylight savings changes
- Leap days
- Invalid days (Feb 30, Sept 31)
- Feb 29 in non-leap years
- Different formats (June 5, 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34)
- Internationalisation (dd.mm.yyyy, mm/dd/yyyy)
- Hour format AM/PM and 24 hours
- Reset clock backward or forward

## Web

### Navigation

- Back/Forward button (watch for ‘Expired’ messages and double-posted transactions)
- Refresh
- Bookmark the URL
- Select bookmark when logged Out
- Change/remove URL parameters
- Access from multiple devices at the same time
- Gestures (swipe, Tap, pinch, drag)

### Syntax

- HTML syntax validation 
- CSS syntax validation

### Devices management

- Javascript Off
- Cookies Off
- Security high
- Resize browser window
- Change font size
- Change zoom value
- Activate ad/tracker blocker
- Orientation
- Performance
- Network speed
- Energy consumption
- Log off
- Shut down
- Reboot
- Kill process
- Disconnect
- Hibernate
- Timeout
- Cancel

### Accessibility (A11y)

- Document structure
- Keyboard navigation
- Valid links URL
- Alt-text
- Form input labels
- Language
- No all-capitals text
- Contrast
- Text labels for feedback massages (not just colors)
- Acronyms explained

## API heuristics

### CRUD

- C: Create
- R: Read
- U: Update
- D: Delete

### BINMEN

- B: Boundary
- I: Invalid Entries
- N: NULL
- M: Method
- E: Empty
- N: Negative

### POISED

- P: Parameters
- O: Output
- I: Interop
- S: Security
- E: Errors
- D: Data

### VADER

- V: Verbs
- A: Authorisation/Authentication
- D: Data
- E: Errors
- R: Responsiveness

