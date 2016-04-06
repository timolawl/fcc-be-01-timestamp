# Timestamp Microservice

Check out the working app here: [https://timolawl-timestamp.herokuapp.com](https://timolawl-timestamp.herokuapp.com "Timestamp Microservice").

### Overview:
A full-stack JavaScript application as part of the [Free Code Camp](https://freecodecamp.com "Free Code Camp") curriculum. API Basejump #1 - Timestamp Microservice.

#### User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a Unix timestamp or a natural language date (e.g., January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

##### Example usage:
* Natural language form: [https://timolawl-timestamp.herokuapp.com/January 1, 2016](https://timolawl-timestamp.herokuapp.com/January 1, 2016)
* Unix timestamp: [https://timolawl-timestamp.herokuapp.com/1451635200](https://timolawl-timestamp.herokuapp.com/1451635200)

##### Example output:
* { "unix": 1451635200, "natural": "January 1, 2016" }
