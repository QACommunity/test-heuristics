# Test Heuristics

> A collection of test heuristics

## Input values

### ๐งต Strings

- [ ] Minimun and maximum length `0`, `255+1`, `65535+1`
- [ ] Non ASCII (american) characters (`วผแธฤรฦ`, `่ฑกๅฝขๅญ`, `ุงูููุนูุฑูุจููููุฉู`...)
- [ ] Invisible characters (space, tab, break, etc.)
- [ ] Delimiters (`< > [ ] ( ) { } " ' | / \ , : ; & ^ * ? Tab`)
- [ ] Special characters (`~!@#$%^&*+-=`)
- [ ] Emojis (๐๐๐โจ)
- [ ] Empty, null
- [ ] HTML tags
- [ ] JS code
- [ ] SQL injection (`' OR '1'='1'; drop table users;`)
- [ ] Non text (numbers, binary, blobs)

### ๐ฐ Numbers

- [ ] Minimun and maximum values `-1`, `0`, `255+1`, `65535+1`
- [ ] Types (`decimal`, `binary`, `hexadecimal`, `octal`)
- [ ] Scientific notation (`1E-9`, `10-9`)
- [ ] Separators (comma, dot, space, semicolon)
- [ ] Operations (devide by zero, sum negative numbers, etc.)
- [ ] Non number (text, symbols)

### ๐ Time and date

- [ ] Date/time in the future
- [ ] Date/time in the past
- [ ] Time difference between machines
- [ ] Crossing time zones
- [ ] Daylight savings changes
- [ ] Leap days
- [ ] Invalid days (`Feb 30`, `Sept 31`)
- [ ] Feb 29 in non-leap years
- [ ] Internationalization (`mmmm dd, yyyy`, `yyyy/mm/dd`, `dd.mm.yyyy`, `mm/dd/yyyy`)
- [ ] Delimiters (comma, dot, slash, dash, colon)
- [ ] Clock format (AM/PM, 24 hours)
- [ ] Reset clock backward or forward

## Web

### ๐น Navigation

- [ ] Back/Forward button (watch for expired messages and double-posted transactions)
- [ ] Refresh
- [ ] Bookmark the URL
- [ ] Select bookmark when logged Out
- [ ] Modify URL parameters
- [ ] Access from multiple devices simultaneously
- [ ] Gestures (swipe, tap, pinch, hold, drag)

### ๐ฑ Device management

- [ ] Javascript Off
- [ ] Cookies Off
- [ ] Security high
- [ ] Resize browser window
- [ ] Change font size
- [ ] Change zoom value
- [ ] Activate ad/tracker blocker
- [ ] Orientation
- [ ] Performance
- [ ] Network speed
- [ ] Energy consumption
- [ ] Log off
- [ ] Shut down
- [ ] Reboot
- [ ] Kill process
- [ ] Disconnect
- [ ] Hibernate
- [ ] Timeout
- [ ] Cancel

### โฟ๏ธ Accessibility (A11y)

- [ ] Document structure
- [ ] Keyboard navigation
- [ ] Valid links URL
- [ ] Image alt text
- [ ] Form input labels
- [ ] Language definition
- [ ] No all-capitals text
- [ ] Color contrast
- [ ] Error messages have human-readable description
- [ ] Abbreviations have human-readable description

## API transactions

### ๐ค CRUD

- [ ] `C`: Create
- [ ] `R`: Read
- [ ] `U`: Update
- [ ] `D`: Delete

### ๐ค BINMEN

- [ ] `B`: Boundary
- [ ] `I`: Invalid Entries
- [ ] `N`: NULL
- [ ] `M`: Method
- [ ] `E`: Empty
- [ ] `N`: Negative

### ๐ค POISED

- [ ] `P`: Parameters
- [ ] `O`: Output
- [ ] `I`: Interoperability
- [ ] `S`: Security
- [ ] `E`: Errors
- [ ] `D`: Data

### ๐ค VADER

- [ ] `V`: Verbs
- [ ] `A`: Authentication/Authorization
- [ ] `D`: Data
- [ ] `E`: Errors
- [ ] `R`: Responsiveness