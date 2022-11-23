# Test Heuristics

> A collection of test heuristics

## Data Type Attacks

### Strings

- Long (255, 256, 257, 1000, 1024, 2000, 2048 or more characters)
- Accented Chars (àáâãäåçèéêëìíîðñòôõöö)
- Asian charcters
- Common Delimiters and Special Characters ( “ ‘ \` | / \ , ; : & < > ^ * ? Tab )
- Leave Blank
- Single Space
- Multiple Spaces
- Leading Spaces
- End-of-Line Characters (^M)
- SQL Injection ( ‘select * from customer )
- With All Actions (Entering, Searching, Updating, etc.)
- Emojis

### Numbers

- 0
- 32768 (215)
- 32769 (215 + 1)
- 65536 (216)
- 65537 (216 + 1)
- 2147483648 (231)
- 2147483649 (231 + 1)
- 4294967296 (232)
- 4294967297 (232 + 1)
- Scientific notation (1E-16)
- Negative
- Floating point (decimals) (0.0001)
- Comma separator (1,234,567)
- Dot separator (1.234.567,89)
- Space separator (1 234 567.89)

### Time and date

- Timeouts
- Time Difference between Machines
- Crossing Time Zones
- Leap Days
- Always Invalid Days (Feb 30, Sept 31)
- Feb 29 in Non-Leap Years
- Different Formats (June 5, 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34)
- Internationalisation dd.mm.yyyy, mm/dd/yyyy 
- am/pm, 24 hours
- Daylight Savings Changeover
- Reset Clock Backward or Forward

### Files

- Long name (>255 characters)
- Special characters (symbols, spaces, etc.)
- Non-existent
- Already exists
- No space
- Minimal space
- WriteProtected
- Unavailable
- Locked
- On remote machine
- Corrupted

## Web

### Navigation

- Back (watch for ‘Expired’ messages and double-posted transactions)
- Refresh
- Bookmark the URL
- Select Bookmark when Logged Out
- Hack the URL (change/remove parameters; see also Data Type Attacks)
- Multiple Browser Instances Open
- Swipe/Tap/Pinch

### Input

- See also "Data types"
- HTML/JavaScript Injection (allowing the user to enter arbitrary HTML tags and JavaScript commands can lead to security vulnerabilities)
- Check Max Length Defined on Text Inputs
- \> 5000 Chars in TextAreas

### Syntax

- HTML syntax checker 
- CSS syntax checker

### Configuration (preferences)

- Javascript Off
- Cookies Off
- Security High
- Resize Browser Window
- Change Font Size

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

## API

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

## Mobile / Tablet / Other

### Mobile

- Mobile Device
- Orientation
- Mobile Browsers
- Interrupts
- Look
- Energy Consumption
- Automation
- Performance
- Personas
- Time & Date
- Ergonomics
- Security
- Tracking
- Inputs
- Network
- Platform Guidelines

## Heuristics

### Interruptions

- Log Off
- Shut Down
- Reboot
- Kill Process
- Disconnect
- Hibernate
- Timeout
- Cancel

