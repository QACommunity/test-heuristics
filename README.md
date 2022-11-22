# Test Heuristics

A collection of test heuristics

## Data Type Attacks

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
