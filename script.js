/* Smart AI Classroom — front-end demonstration.
   AI replies, engagement metrics and passive check-in are simulated sample data.
   Replace the demoAI() adapter with a secure backend endpoint to connect a real model. */
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const store = {
  get(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}},
  set(key,value){localStorage.setItem(key,JSON.stringify(value))}
};
const students = [
  {
    "id": "260200",
    "roll": 7101,
    "name": "ABHISHEK SINGH",
    "cls": "FE Computer Engineering · B",
    "attendance": 79.5,
    "practicalAttendance": 85.9,
    "theoryPresent": 116,
    "theoryTotal": 146,
    "practicalPresent": 55,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AS"
  },
  {
    "id": "260106",
    "roll": 7102,
    "name": "ABHIVANSH TOMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 93.8,
    "practicalAttendance": 92.2,
    "theoryPresent": 137,
    "theoryTotal": 146,
    "practicalPresent": 59,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AT"
  },
  {
    "id": "260177",
    "roll": 7103,
    "name": "Adesh Kumar Saini",
    "cls": "FE Computer Engineering · B",
    "attendance": 86.3,
    "practicalAttendance": 85.9,
    "theoryPresent": 126,
    "theoryTotal": 146,
    "practicalPresent": 55,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260279",
    "roll": 7104,
    "name": "ADITI KUMARI",
    "cls": "FE Computer Engineering · B",
    "attendance": 89.0,
    "practicalAttendance": 90.6,
    "theoryPresent": 130,
    "theoryTotal": 146,
    "practicalPresent": 58,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260186",
    "roll": 7105,
    "name": "Ajay Singh",
    "cls": "FE Computer Engineering · B",
    "attendance": 91.1,
    "practicalAttendance": 95.3,
    "theoryPresent": 133,
    "theoryTotal": 146,
    "practicalPresent": 61,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AS"
  },
  {
    "id": "260047",
    "roll": 7106,
    "name": "AMAN KUMAR SINGH",
    "cls": "FE Computer Engineering · B",
    "attendance": 83.6,
    "practicalAttendance": 82.8,
    "theoryPresent": 122,
    "theoryTotal": 146,
    "practicalPresent": 53,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260228",
    "roll": 7107,
    "name": "AMAN KUNDU",
    "cls": "FE Computer Engineering · B",
    "attendance": 93.2,
    "practicalAttendance": 92.2,
    "theoryPresent": 136,
    "theoryTotal": 146,
    "practicalPresent": 59,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260031",
    "roll": 7108,
    "name": "ANAY JAYESH PAWAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 79.5,
    "practicalAttendance": 93.8,
    "theoryPresent": 116,
    "theoryTotal": 146,
    "practicalPresent": 60,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AJ"
  },
  {
    "id": "260278",
    "roll": 7109,
    "name": "Anish Kumar Gupta",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.3,
    "practicalAttendance": 96.9,
    "theoryPresent": 142,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260257",
    "roll": 7110,
    "name": "Anuj",
    "cls": "FE Computer Engineering · B",
    "attendance": 84.9,
    "practicalAttendance": 96.9,
    "theoryPresent": 124,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "A"
  },
  {
    "id": "260055",
    "roll": 7111,
    "name": "ARVIND KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 75.3,
    "practicalAttendance": 45.3,
    "theoryPresent": 110,
    "theoryTotal": 146,
    "practicalPresent": 29,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260011",
    "roll": 7112,
    "name": "Aryan Singh Jadoun",
    "cls": "FE Computer Engineering · B",
    "attendance": 77.4,
    "practicalAttendance": 39.1,
    "theoryPresent": 113,
    "theoryTotal": 146,
    "practicalPresent": 25,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AS"
  },
  {
    "id": "260102",
    "roll": 7113,
    "name": "AYUSH KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.3,
    "practicalAttendance": 100.0,
    "theoryPresent": 142,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "AK"
  },
  {
    "id": "260139",
    "roll": 7114,
    "name": "BHAVISHYA",
    "cls": "FE Computer Engineering · B",
    "attendance": 98.6,
    "practicalAttendance": 100.0,
    "theoryPresent": 144,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "B"
  },
    {
    "id": "264005",
    "roll": 7115,
    "name": "Devbrat Singh Tomar",
    "cls": "FE Computer Engineering · B",
    "attendance": 87.7,
    "practicalAttendance": 90.6,
    "theoryPresent": 128,
    "theoryTotal": 146,
    "practicalPresent": 58,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "DS"
  },
  {
    "id": "260190",
    "roll": 7116,
    "name": "DINESH KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 93.8,
    "practicalAttendance": 100.0,
    "theoryPresent": 137,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "DK"
  },
  {
    "id": "260214",
    "roll": 7117,
    "name": "HADIYAL NEEL HARESH",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.2,
    "practicalAttendance": 96.9,
    "theoryPresent": 139,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "HN"
  },
  {
    "id": "260062",
    "roll": 7118,
    "name": "Harshit Sharma",
    "cls": "FE Computer Engineering · B",
    "attendance": 79.5,
    "practicalAttendance": 71.9,
    "theoryPresent": 116,
    "theoryTotal": 146,
    "practicalPresent": 46,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "HS"
  },
  {
    "id": "260136",
    "roll": 7119,
    "name": "Hasmukh Rani",
    "cls": "FE Computer Engineering · B",
    "attendance": 91.8,
    "practicalAttendance": 98.4,
    "theoryPresent": 134,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "HR"
  },
  {
    "id": "260111",
    "roll": 7120,
    "name": "Jatin Singh Bhatia",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.9,
    "practicalAttendance": 98.4,
    "theoryPresent": 140,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "JS"
  },
  {
    "id": "260189",
    "roll": 7121,
    "name": "JOVANPREET SINGH DEOL",
    "cls": "FE Computer Engineering · B",
    "attendance": 93.2,
    "practicalAttendance": 101.6,
    "theoryPresent": 136,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "JS"
  },
  {
    "id": "260217",
    "roll": 7122,
    "name": "Kapil",
    "cls": "FE Computer Engineering · B",
    "attendance": 80.1,
    "practicalAttendance": 82.8,
    "theoryPresent": 117,
    "theoryTotal": 146,
    "practicalPresent": 53,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "K"
  },
  {
    "id": "260275",
    "roll": 7123,
    "name": "KASHISH",
    "cls": "FE Computer Engineering · B",
    "attendance": 90.4,
    "practicalAttendance": 93.8,
    "theoryPresent": 132,
    "theoryTotal": 146,
    "practicalPresent": 60,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "K"
  },
  {
    "id": "260259",
    "roll": 7124,
    "name": "Krishnabhishek",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.2,
    "practicalAttendance": 98.4,
    "theoryPresent": 139,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "K"
  },
  {
    "id": "260045",
    "roll": 7125,
    "name": "KUNAL RAJ",
    "cls": "FE Computer Engineering · B",
    "attendance": 99.3,
    "practicalAttendance": 101.6,
    "theoryPresent": 145,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "KR"
  },
  {
    "id": "260229",
    "roll": 7126,
    "name": "LAKSHAY POONIA",
        "cls": "FE Computer Engineering · B",
    "attendance": 84.2,
    "practicalAttendance": 79.7,
    "theoryPresent": 123,
    "theoryTotal": 146,
    "practicalPresent": 51,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "LP"
  },
  {
    "id": "260113",
    "roll": 7128,
    "name": "MANDEEP KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 91.1,
    "practicalAttendance": 95.3,
    "theoryPresent": 133,
    "theoryTotal": 146,
    "practicalPresent": 61,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "MK"
  },
  {
    "id": "260244",
    "roll": 7129,
    "name": "MIHIR BHALOTHIA",
    "cls": "FE Computer Engineering · B",
    "attendance": 84.2,
    "practicalAttendance": 95.3,
    "theoryPresent": 123,
    "theoryTotal": 146,
    "practicalPresent": 61,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "MB"
  },
  {
    "id": "260152",
    "roll": 7130,
    "name": "Mohit Choudhary",
    "cls": "FE Computer Engineering · B",
    "attendance": 76.7,
    "practicalAttendance": 70.3,
    "theoryPresent": 112,
    "theoryTotal": 146,
    "practicalPresent": 45,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "MC"
  },
  {
    "id": "260252",
    "roll": 7131,
    "name": "NARENDRA SINGH",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.3,
    "practicalAttendance": 100.0,
    "theoryPresent": 142,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "NS"
  },
  {
    "id": "260262",
    "roll": 7132,
    "name": "Nirbhay Singh",
    "cls": "FE Computer Engineering · B",
    "attendance": 94.5,
    "practicalAttendance": 98.4,
    "theoryPresent": 138,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "NS"
  },
    {
    "id": "264009",
    "roll": 7133,
    "name": "NISHANT KUMAR RAI",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.9,
    "practicalAttendance": 96.9,
    "theoryPresent": 143,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "NK"
  },
  {
    "id": "260209",
    "roll": 7134,
    "name": "Om Tiwari",
    "cls": "FE Computer Engineering · B",
    "attendance": 78.8,
    "practicalAttendance": 87.5,
    "theoryPresent": 115,
    "theoryTotal": 146,
    "practicalPresent": 56,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "OT"
  },
  {
    "id": "260087",
    "roll": 7135,
    "name": "PRINCE",
    "cls": "FE Computer Engineering · B",
    "attendance": 98.6,
    "practicalAttendance": 100.0,
    "theoryPresent": 144,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "P"
  },
  {
    "id": "260126",
    "roll": 7136,
    "name": "RAHUL YADAV",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.9,
    "practicalAttendance": 98.4,
    "theoryPresent": 143,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "RY"
  },
  {
    "id": "260237",
    "roll": 7137,
    "name": "RAJ SINGH",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.9,
    "practicalAttendance": 100.0,
    "theoryPresent": 143,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "RS"
  },
  {
    "id": "260178",
    "roll": 7138,
    "name": "RAJENDR CHOUDHARY",
    "cls": "FE Computer Engineering · B",
    "attendance": 76.7,
    "practicalAttendance": 79.7,
    "theoryPresent": 112,
    "theoryTotal": 146,
    "practicalPresent": 51,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "RC"
  },  {
    "id": "260191",
    "roll": 7139,
    "name": "RAMA TIWARI",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.3,
    "practicalAttendance": 100.0,
    "theoryPresent": 142,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "RT"
  },
  {
    "id": "260224",
    "roll": 7140,
    "name": "RAVI KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 94.5,
    "practicalAttendance": 96.9,
    "theoryPresent": 138,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "RK"
  },
  {
    "id": "260120",
    "roll": 7142,
    "name": "Sachin",
    "cls": "FE Computer Engineering · B",
    "attendance": 98.6,
    "practicalAttendance": 101.6,
    "theoryPresent": 144,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "S"
  },  {
    "id": "260236",
    "roll": 7143,
    "name": "SAGAR SINGH",
    "cls": "FE Computer Engineering · B",
    "attendance": 85.6,
    "practicalAttendance": 78.1,
    "theoryPresent": 125,
    "theoryTotal": 146,
    "practicalPresent": 50,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SS"
  },
  {
    "id": "260273",
    "roll": 7144,
    "name": "SANYAM",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.9,
    "practicalAttendance": 101.6,
    "theoryPresent": 140,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "S"
  },
  {
    "id": "260276",
    "roll": 7145,
    "name": "satyam kumar",
    "cls": "FE Computer Engineering · B",
    "attendance": 89.0,
    "practicalAttendance": 101.6,
    "theoryPresent": 130,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SK"
  },
  {
    "id": "260094",
    "roll": 7146,
    "name": "SHISHANTH CHOUDHARY",
    "cls": "FE Computer Engineering · B",
    "attendance": 91.8,
    "practicalAttendance": 98.4,
    "theoryPresent": 134,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SC"
  },
  {
    "id": "260261",
    "roll": 7147,
    "name": "siddharth",
    "cls": "FE Computer Engineering · B",
    "attendance": 100.0,
    "practicalAttendance": 101.6,
    "theoryPresent": 146,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "S"
  },
  {
    "id": "260264",
    "roll": 7148,
    "name": "SMITA CHHETRI",
    "cls": "FE Computer Engineering · B",
    "attendance": 100.0,
    "practicalAttendance": 103.1,
    "theoryPresent": 146,
    "theoryTotal": 146,    "practicalPresent": 66,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SC"
  },
  {
    "id": "260167",
    "roll": 7149,
    "name": "Snehil Dudpuri",
    "cls": "FE Computer Engineering · B",
    "attendance": 97.9,
    "practicalAttendance": 103.1,
    "theoryPresent": 143,
    "theoryTotal": 146,
    "practicalPresent": 66,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SD"
  },
  {
    "id": "260147",
    "roll": 7151,
    "name": "Sourabh",
    "cls": "FE Computer Engineering · B",
    "attendance": 76.7,
    "practicalAttendance": 71.9,
    "theoryPresent": 112,
    "theoryTotal": 146,
    "practicalPresent": 46,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "S"
  },
  {
    "id": "260203",
    "roll": 7152,
    "name": "SUMIT",
    "cls": "FE Computer Engineering · B",
    "attendance": 92.5,
    "practicalAttendance": 98.4,
    "theoryPresent": 135,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "S"
  },
  {
    "id": "260173",
    "roll": 7153,
    "name": "Tanuj Kumar Rawat",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.2,
    "practicalAttendance": 96.9,    "theoryPresent": 139,
    "theoryTotal": 146,
    "practicalPresent": 62,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "TK"
  },
  {
    "id": "260143",
    "roll": 7154,
    "name": "VANA GANESH",
    "cls": "FE Computer Engineering · B",
    "attendance": 94.5,
    "practicalAttendance": 98.4,
    "theoryPresent": 138,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "VG"
  },
  {
    "id": "260132",
    "roll": 7156,
    "name": "VINAYAK KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 89.7,
    "practicalAttendance": 93.8,
    "theoryPresent": 131,
    "theoryTotal": 146,
    "practicalPresent": 60,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "VK"
  },
  {
    "id": "260199",
    "roll": 7157,
    "name": "Vipandeep Singh",
    "cls": "FE Computer Engineering · B",
    "attendance": 96.6,
    "practicalAttendance": 101.6,
    "theoryPresent": 141,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "VS"
  },
  {
    "id": "260201",
    "roll": 7158,
    "name": "YAJAS KUMAR",
    "cls": "FE Computer Engineering · B",
    "attendance": 93.8,
    "practicalAttendance": 101.6,
    "theoryPresent": 137,
    "theoryTotal": 146,
    "practicalPresent": 65,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "YK"
  },  {
    "id": "260079",
    "roll": 7159,
    "name": "Yash Shrikrishna Chavan",
    "cls": "FE Computer Engineering · B",
    "attendance": 95.9,
    "practicalAttendance": 98.4,
    "theoryPresent": 140,
    "theoryTotal": 146,
    "practicalPresent": 63,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "YS"
  },
  {
    "id": "260044",
    "roll": 7160,
    "name": "YUVANESH",
    "cls": "FE Computer Engineering · B",
    "attendance": 78.8,
    "practicalAttendance": 79.7,
    "theoryPresent": 115,
    "theoryTotal": 146,
    "practicalPresent": 51,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "Y"
  },
  {
    "id": "260290",
    "roll": 7161,
    "name": "surya pratap Singh",
    "cls": "FE Computer Engineering · B",
    "attendance": 91.8,
    "practicalAttendance": 100.0,
    "theoryPresent": 134,
    "theoryTotal": 146,
    "practicalPresent": 64,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "SP"
  },
  {
    "id": "265111",
    "roll": 7162,
    "name": "Keshav (J&K)",
    "cls": "FE Computer Engineering · B",
    "attendance": 69.9,
    "practicalAttendance": 78.1,
    "theoryPresent": 102,
    "theoryTotal": 146,
    "practicalPresent": 50,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "K("
  },
  {
    "id": "265112",
    "roll": 7163,
    "name": "Parth Sharma(J&K)",
    "cls": "FE Computer Engineering · B",
    "attendance": 66.4,
    "practicalAttendance": 73.4,
    "theoryPresent": 97,
    "theoryTotal": 146,
    "practicalPresent": 47,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "PS"
  },
  {
    "id": "260291",
    "roll": 7164,
    "name": "Harishankar P K",
    "cls": "FE Computer Engineering · B",
    "attendance": 65.8,
    "practicalAttendance": 76.6,
    "theoryPresent": 96,
    "theoryTotal": 146,
    "practicalPresent": 49,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "HP"
  },
  {
    "id": "260293",
    "roll": 7165,
    "name": "Omeshwar",
    "cls": "FE Computer Engineering · B",
    "attendance": 42.5,
    "practicalAttendance": 37.5,
    "theoryPresent": 62,
    "theoryTotal": 146,
    "practicalPresent": 24,
    "practicalTotal": 64,
    "score": null,
    "engagement": "Not assessed",
    "understanding": null,
    "topic": "—",
    "gap": "—",
    "initials": "O"
  }
];let attendance = store.get('sac_attendance', {}); if(!students.some(s=>Object.prototype.hasOwnProperty.call(attendance,s.id))) attendance=Object.fromEntries(students.map(s=>[s.id,'Not marked']));
let assignments = store.get('sac_assignments',[
 {id:1,title:'Problem Set 04 — Differential Calculus',subject:'Mathematics',due:'2026-11-20',difficulty:'Intermediate',submissions:24,total:32,status:'In progress'},
 {id:2,title:'Newton’s Laws: Concept Check',subject:'Physics',due:'2026-11-22',difficulty:'Beginner',submissions:29,total:32,status:'In progress'},
 {id:3,title:'Engineering Drawing — Orthographic Views',subject:'Engineering Graphics',due:'2026-11-25',difficulty:'Advanced',submissions:8,total:32,status:'Recently assigned'}
]);
let conversations = store.get('sac_chats',[]);
let currentChat = null, currentPage='overview', selectedAdaptive=students[1], activeRole=store.get('sac_role','teacher');
let charts = {};
const pageNames={overview:'Overview',live:'Live Classroom',students:'Students',adaptive:'Adaptive Learning',analytics:'Learning Analytics',assignments:'Assignments',copilot:'AI Co-Teacher',attendance:'Smart Attendance',timetable:'Class Timetable',admin:'Administration',settings:'Settings',studenthome:'My Learning'};
function toast(msg){const el=document.createElement('div');el.className='toast';el.textContent=msg;$('#toastRegion').append(el);setTimeout(()=>el.remove(),3000)}
function statusClass(v){return v==='Highly Engaged'||v==='Present'||v==='Completed'?'good':v==='Following'||v==='Pending'?'warn':v==='Needs Attention'||v==='Absent'?'bad':'info'}
function avatar(s){return `<div class="avatar avatar-${s.initials.charCodeAt(0)%2?'teal':'blue'}">${s.initials}</div>`}
function heading(title,sub,action=''){return `<div class="page-heading"><div><p class="eyebrow">SMART AI CLASSROOM</p><h1>${title}</h1><p>${sub}</p></div>${action}</div>`}
function stat(label,value,foot,icon,trend=''){return `<div class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon"><i class="fa-solid ${icon}"></i></span></div><div class="stat-value">${value}</div><div class="stat-foot ${trend}">${foot}</div></div>`}
function panelHead(title,sub='',action=''){return `<div class="panel-head"><div><h3 class="panel-title">${title}</h3>${sub?`<p class="panel-subtitle">${sub}</p>`:''}</div>${action}</div>`}
function studentTable(list=students){return `<div class="table-wrap"><table><thead><tr><th>Student / Roll No.</th><th>Theory attendance</th><th>Practical attendance</th><th>Learning data</th><th>Understanding</th><th></th></tr></thead><tbody>${list.map(s=>`<tr><td><div class="student-cell">${avatar(s)}<div><strong>${s.name}</strong><div style="font-size:9px;color:var(--faint)">Reg. ${s.id} · Roll ${s.roll}</div></div></div></td><td><strong>${s.attendance}%</strong><small style="display:block;color:var(--muted)">${s.theoryPresent}/${s.theoryTotal} lectures</small></td><td><strong>${s.practicalAttendance}%</strong><small style="display:block;color:var(--muted)">${s.practicalPresent}/${s.practicalTotal} practicals</small></td><td><span class="status info">Not assessed</span></td><td>—</td><td><button class="text-link" data-profile="${s.id}">View</button></td></tr>`).join('')}</tbody></table></div>`}
function overviewPage(){const avgT=(students.reduce((a,s)=>a+s.attendance,0)/students.length).toFixed(1),avgP=(students.reduce((a,s)=>a+s.practicalAttendance,0)/students.length).toFixed(1),low=students.filter(s=>s.attendance<75).length;return `${heading('FE Computer Engineering · Section B','Welcome to your classroom workspace. The roster and attendance figures below come from the supplied college records.',`<button class="btn btn-primary" data-page="timetable"><i class="fa-regular fa-calendar-days"></i> View timetable</button>`)}<div class="stats-grid">${stat('Enrolled students',students.length,'Official class roster','fa-users')}${stat('Theory attendance',avgT+'%','146 lectures · 27 Jul–27 Oct','fa-book-open')}${stat('Practical attendance',avgP+'%','64 practicals · 27 Jul–27 Oct','fa-flask')}${stat('Below 75% theory',low,'Based on uploaded attendance','fa-triangle-exclamation','warning-text')}</div><div class="content-grid"><div class="panel">${panelHead('Class information','Army Institute of Technology, Pune')}<div class="insight-list"><div class="insight-item"><div class="insight-icon"><i class="fa-solid fa-building-columns"></i></div><div><strong>Department of Computer Engineering</strong><p>First Year · Computer B · Academic Year 2026–27 · Semester I</p></div></div><div class="insight-item"><div class="insight-icon blue"><i class="fa-solid fa-chalkboard-user"></i></div><div><strong>Class teacher: Prof. MB Khandale</strong><p>Classroom: LH16 · Short break: 10:45–11:00 AM</p></div></div><div class="insight-item"><div class="insight-icon green"><i class="fa-regular fa-calendar"></i></div><div><strong>Attendance period</strong><p>27 July to 27 October 2026</p></div></div></div><button class="btn btn-sm" data-page="attendance">Open attendance records →</button></div><div class="panel">${panelHead('Quick access','Your class tools')}<div class="schedule-list"><div class="schedule-item"><div class="schedule-time"><i class="fa-solid fa-users"></i></div><div class="schedule-line"></div><div class="schedule-copy"><strong>Student directory</strong><small>61 student records with roll and registration numbers</small></div><button class="text-link" data-page="students">Open</button></div><div class="schedule-item"><div class="schedule-time"><i class="fa-regular fa-calendar-days"></i></div><div class="schedule-line"></div><div class="schedule-copy"><strong>Weekly timetable</strong><small>Monday to Friday · AY 2026–27</small></div><button class="text-link" data-page="timetable">Open</button></div><div class="schedule-item"><div class="schedule-time"><i class="fa-solid fa-chart-column"></i></div><div class="schedule-line"></div><div class="schedule-copy"><strong>Attendance history</strong><small>Theory and practical attendance</small></div><button class="text-link" data-page="attendance">Open</button></div></div></div></div><div class="panel">${panelHead('Student attendance snapshot','First students in the supplied class register',`<button class="text-link" data-page="students">View all 61 students →</button>`)}${studentTable(students.slice(0,6))}</div><div class="notice-card"><strong><i class="fa-solid fa-circle-info"></i> Data transparency</strong><br>Attendance and roster details are imported from your workbook. Quiz scores, engagement sensing and learning mastery are not present in the supplied files, so those fields are shown as not assessed rather than invented.</div>`}
function livePage(){return `${heading('Live classroom','A real-time view of participation and learning signals.',`<span class="status good">DEMO SESSION ACTIVE</span>`)}<div class="notice-card" style="margin-bottom:16px"><strong><i class="fa-solid fa-shield-halved"></i> Privacy-first engagement demo</strong><br>Engagement indicators below use simulated participation, quiz response and interaction data. No emotion recognition or camera analysis is running. A production camera feature would require explicit consent, a visible camera indicator and local-only processing.</div><div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">${stat('Class engagement','84%','+6% this week','fa-bolt','positive')}${stat('Active participants','28 / 32','4 currently inactive','fa-users')}${stat('Quiz response rate','91%','↑ 8% from last class','fa-square-poll-vertical','positive')}${stat('Need a check-in','3','Based on low interactions','fa-hand') }</div><div class="panel">${panelHead('Class engagement map','Simulated participation signals · FY B.Tech',`<button class="btn btn-sm" data-action="refresh-engagement"><i class="fa-solid fa-rotate"></i> Refresh demo data</button>`)}<div class="student-grid">${students.map(s=>`<button class="student-tile" data-profile="${s.id}"><div class="student-tile-top">${avatar(s)}<div><strong>${s.name}</strong><small>${s.id}</small></div></div><span class="status ${statusClass(s.engagement)}">${s.engagement}</span><div class="progress"><span style="width:${s.understanding}%"></span></div><small style="display:block;margin-top:6px">${s.understanding}% learning progress · ${s.score}% quiz avg.</small></button>`).join('')}</div></div><div class="panel">${panelHead('Interaction heatmap','Illustrative participation intensity by time block')}<div class="heatmap">${Array.from({length:40},(_,i)=>`<div class="heat-cell ${i%7===0?'low':i%4===0?'mid':'high'}" title="Interaction level ${i%7===0?'low':i%4===0?'moderate':'high'}"></div>`).join('')}</div><div class="heat-legend"><span><i class="legend-dot" style="background:#4d9c89"></i>High activity</span><span><i class="legend-dot" style="background:#a8cfc5"></i>Moderate activity</span><span><i class="legend-dot" style="background:#e8c58b"></i>Low activity</span></div></div>`}
function studentsPage(){return `${heading('Students','Browse the official FE Computer Engineering · Section B student roster and attendance.',`<button class="btn btn-primary" data-action="add-student"><i class="fa-solid fa-plus"></i> Add student</button>`)}<div class="panel"><div class="panel-head"><div><h3 class="panel-title">Student directory</h3><p class="panel-subtitle">61 enrolled · FE Computer Engineering, Section B</p></div><div class="toolbar"><input class="field" id="studentSearch" placeholder="Search name or ID..." /><select class="select-field filter-select" id="studentFilter"><option value="all">All students</option><option value="low">Below 75% theory</option><option value="ok">75% and above</option></select><select class="select-field filter-select" id="studentSort"><option value="name">Sort: Name</option><option value="practical">Sort: Practical attendance</option><option value="attendance">Sort: Attendance</option></select></div></div><div id="studentTable">${studentTable()}</div></div>`}
function adaptivePage(){let s=selectedAdaptive;return `${heading('Adaptive learning','Personalize learning pathways based on each student’s demonstrated understanding.')}<div class="adaptive-layout"><div class="panel">${panelHead('Learning profiles','Select a student')}<div class="student-selector">${students.map(st=>`<button class="selector-item ${st.id===s.id?'active':''}" data-adaptive="${st.id}">${avatar(st)}<div><strong>${st.name}</strong><small>${st.topic} · ${st.understanding}% understanding</small></div></button>`).join('')}</div></div><div><div class="panel">${panelHead(s.name+' · Learning profile',`Student ID ${s.id}`,`<span class="status ${s.understanding<60?'bad':s.understanding>85?'good':'warn'}">${s.understanding<60?'Needs support':s.understanding>85?'Advanced pathway':'On track'}</span>`)}<div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">${stat('Understanding',s.understanding+'%','Current topic','fa-brain')}${stat('Average score',s.score+'%','Recent assessments','fa-chart-simple')}${stat('Learning pace',s.score>85?'Accelerated':s.score<60?'Supported':'Steady','Recommended pace','fa-gauge')}</div><h4 style="font:700 12px Manrope;margin:18px 0 8px">Current learning focus: ${s.gap}</h4><p style="font-size:11px;color:var(--muted);line-height:1.6">${s.understanding<60?'The system has identified a foundational gap. Start with a short concept recap and scaffolded examples before returning to grade-level problems.':s.understanding>85?'The student demonstrates strong mastery. Offer extension problems and real-world applications to maintain challenge.':'The student is progressing steadily. Reinforce the current concept with targeted practice and a quick knowledge check.'}</p><div class="progress" style="height:9px"><span style="width:${s.understanding}%"></span></div><div style="display:flex;justify-content:space-between;font-size:9px;color:var(--muted);margin-top:6px"><span>Beginning</span><span>Mastery</span></div></div><div class="panel">${panelHead('Recommended learning pathway','Adaptive sequence generated from sample performance data')}<div class="learning-path">${(s.understanding<60?['Revisit foundations','Guided examples','Beginner practice','Progress check']:s.understanding>85?['Mastery review','Advanced problems','Real-world challenge','Peer explanation']:['Concept recap','Targeted examples','Intermediate practice','Knowledge check']).map((x,i)=>`<div class="path-step"><div class="step-no">${i+1}</div><strong>${x}</strong><small>${['Build prerequisite knowledge','Work through a scaffolded example','Apply the idea independently','Check readiness for next level'][i]}</small></div>`).join('')}</div><div style="display:flex;gap:8px;margin-top:16px"><button class="btn btn-primary" data-action="adaptive-practice"><i class="fa-solid fa-play"></i> Start recommended practice</button><button class="btn" data-page="copilot">Ask AI Co-Teacher</button></div></div></div></div>`}
function analyticsPage(){return `${heading('Learning analytics','Understand learning outcomes with clear, actionable classroom data.',`<div class="toolbar"><select class="select-field" id="analyticsPeriod"><option value="week">Last 7 days</option><option value="month">Last 30 days</option></select><select class="select-field" id="analyticsSubject"><option value="all">All subjects</option><option>Mathematics</option><option>Physics</option><option>Engineering Graphics</option></select></div>`)}<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">${stat('Average understanding','78%','+4.2% vs previous period','fa-book-open','positive')}${stat('Assessment average','76%','Across 6 assessments','fa-file-pen')}${stat('Assignment completion','82%','26 of 32 learners','fa-list-check')}${stat('Engagement trend','+6%','Compared with last week','fa-arrow-trend-up','positive')}</div><div class="content-grid equal"><div class="panel">${panelHead('Student performance over time','Average assessment score')}<div class="chart-wrap"><canvas id="performanceChart"></canvas></div></div><div class="panel">${panelHead('Subject-wise class performance','Average score by subject')}<div class="chart-wrap"><canvas id="subjectChart"></canvas></div></div></div><div class="content-grid equal"><div class="panel">${panelHead('Engagement trends','Daily class participation')}<div class="chart-wrap small"><canvas id="engagementChart"></canvas></div></div><div class="panel">${panelHead('Learning progress distribution','Learners by current mastery band')}<div class="chart-wrap small"><canvas id="distributionChart"></canvas></div></div></div>`}
function assignmentsPage(){return `${heading('Assignments & assessments','Create learning tasks, review submissions and track progress.',`<button class="btn btn-primary" data-action="new-assignment"><i class="fa-solid fa-plus"></i> Create assignment</button>`)}<div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">${stat('Active assignments',assignments.length,'Across current subjects','fa-clipboard-list')}${stat('Submissions received',assignments.reduce((a,b)=>a+b.submissions,0),'Out of '+assignments.reduce((a,b)=>a+b.total,0)+' expected','fa-inbox')}${stat('Average completion',Math.round(assignments.reduce((a,b)=>a+b.submissions/b.total,0)/assignments.length*100)+'%','Across active assignments','fa-chart-pie')}</div><div class="panel">${panelHead('Assignment library','Manage your classroom tasks')}<div class="table-wrap"><table><thead><tr><th>Assignment</th><th>Subject</th><th>Due date</th><th>Difficulty</th><th>Submissions</th><th>Status</th><th>Actions</th></tr></thead><tbody>${assignments.map(a=>`<tr><td><strong>${a.title}</strong></td><td>${a.subject}</td><td>${new Date(a.due+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'})}</td><td>${a.difficulty}</td><td>${a.submissions}/${a.total}</td><td><span class="status ${a.submissions/a.total>.8?'good':'warn'}">${a.status}</span></td><td><button class="text-link" data-assignment="${a.id}">Review</button></td></tr>`).join('')}</tbody></table></div></div><div class="panel">${panelHead('Quick assessment','Create a short multiple-choice quiz with the AI Co-Teacher',`<button class="btn btn-soft" data-page="copilot">Open AI Co-Teacher</button>`)}<p style="font-size:11px;color:var(--muted)">Generate a topic-specific quiz, review the answer key and use it as a formative check-in. Demo quiz results are calculated locally in this browser.</p><button class="btn" data-action="quick-quiz"><i class="fa-solid fa-circle-question"></i> Try a sample quiz</button></div>`}
function attendancePage(){const avgT=(students.reduce((a,s)=>a+s.attendance,0)/students.length).toFixed(1);const avgP=(students.reduce((a,s)=>a+s.practicalAttendance,0)/students.length).toFixed(1);return `${heading('Smart attendance','Official attendance data supplied for FE Computer Engineering · Section B.',`<button class="btn btn-primary" data-action="export-csv"><i class="fa-solid fa-download"></i> Export CSV</button>`)}<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">${stat('Enrolled students',students.length,'FE Computer Engineering · B','fa-users')}${stat('Theory average',avgT+'%','146 lectures recorded','fa-book-open')}${stat('Practical average',avgP+'%','64 practical sessions recorded','fa-flask')}${stat('Current session','Not marked','No live attendance supplied','fa-calendar-check')}</div><div class="panel">${panelHead('Attendance history','27 July – 27 October 2026',`<span class="status info">Source workbook</span>`)}<div class="table-wrap"><table><thead><tr><th>Student</th><th>Roll No.</th><th>Theory present</th><th>Theory %</th><th>Practical present</th><th>Practical %</th></tr></thead><tbody>${students.map(s=>`<tr><td><div class="student-cell">${avatar(s)}<strong>${s.name}</strong></div></td><td>${s.roll}</td><td>${s.theoryPresent}/${s.theoryTotal}</td><td><strong>${s.attendance}%</strong></td><td>${s.practicalPresent}/${s.practicalTotal}</td><td><strong>${s.practicalAttendance}%</strong></td></tr>`).join('')}</tbody></table></div></div><div class="notice-card"><strong><i class="fa-solid fa-circle-info"></i> Attendance data note</strong><br>Theory percentages and practical percentages are calculated from the uploaded workbook. The workbook does not provide a current-day attendance register, so today's status is left unmarked.</div>`}
function timetablePage(){const days=[['MON',[['08:45–09:45','PST','Intro to Linux & Unix'],['09:45–10:45','EM I','Vector Integration'],['11:00–12:00','ASC I','Infra-red Spectroscopy'],['12:00–13:00','Lunch break','12:00–12:45'],['13:00–13:45','BMEC','Intro to Computer Aided Design'],['13:45–14:45','Practical / Tutorial','ASC I Experiment 1 · CSHV Time Management · EM I Tutorial'],['14:45–15:45','Library hour',''],['15:45–16:45','—','—']]],['TUE',[['08:45–09:45','BMEC','CAD packages'],['09:45–10:45','ASC I','X-ray Diffraction'],['11:00–12:00','Practical / Tutorial','BMEC · PSTL · EM I experiments / research paper writing'],['12:00–13:00','Lunch break','13:00–13:45'],['13:00–13:45','ES','Activity'],['13:45–14:45','IKS','Unit III: Role of Ancient Indian Engineering'],['14:45–15:45','Library hour',''],['15:45–16:45','—','—']]],['WED',[['08:45–09:45','ASC I','Applications'],['09:45–10:45','BMEC','Drawing theme'],['11:00–12:00','Practical / Tutorial','DTI · BMEC · PSTL research paper writing'],['12:00–13:00','Lunch break','13:00–13:45'],['13:00–13:45','—','—'],['13:45–14:45','DTI','Idea sketching'],['14:45–15:45','Activity','Guest lecture'],['15:45–16:45','—','—']]],['THU',[['08:45–09:45','EM I','Green’s theorem'],['09:45–10:45','PST','File Handling & Pre-processors'],['11:00–12:00','Practical / Tutorial','PSTL · DTI · BMEC experiments / research paper writing'],['12:00–13:00','Lunch break','13:00–13:45'],['13:00–13:45','—','—'],['13:45–14:45','Practical / Tutorial','ASC I Experiment 1 · CSHV Time Management · EM I Tutorial'],['14:45–15:45','Counselling','Discussion'],['15:45–16:45','—','—']]],['FRI',[['08:45–09:45','IKS','Language: Prakrit, Sanskrit, Pali'],['09:45–10:45','EM I','Vector Integration Problems'],['11:00–12:00','PST','File Operations'],['12:00–13:00','Lunch break','12:00–12:45'],['13:00–13:45','CSHV','Unit V: Human Values'],['13:45–14:45','Practical / Tutorial','ASC I Experiment 1 · CSHV Time Management · EM I Tutorial'],['14:45–15:45','Guest lecture',''],['15:45–16:45','—','—']]]];return `${heading('Class timetable','Army Institute of Technology, Pune · Department of Computer Engineering · AY 2026–27 · FE Computer B',`<span class="status info">WTP: 26 to 30 Oct 2026</span>`)}<div class="notice-card" style="margin-bottom:16px"><strong>Class teacher: Prof. MB Khandale</strong><br>Classroom: LH16 · Short break: 10:45–11:00 AM</div><div class="panel">${panelHead('Weekly schedule','Times and subject labels transcribed from the timetable image')}<div class="table-wrap"><table><thead><tr><th>Day</th><th>08:45–09:45</th><th>09:45–10:45</th><th>11:00–12:00</th><th>12:00–13:00</th><th>13:00–13:45</th><th>13:45–14:45</th><th>14:45–15:45</th><th>15:45–16:45</th></tr></thead><tbody>${days.map(d=>`<tr><td><strong>${d[0]}</strong></td>${d[1].map(x=>`<td><strong>${x[1]}</strong>${x[2]?`<small style="display:block;color:var(--muted);margin-top:4px">${x[2]}</small>`:''}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div><div class="panel" style="margin-top:16px">${panelHead('Allocated staff, classrooms & laboratories','As listed in the supplied timetable')}<p style="font-size:11px;color:var(--muted);line-height:1.8">Engineering Mathematics I — Dr. GA Mundle · Applied Science for Computer Engineering — Dr. Seema Tiwari · Basic Mechanical Engineering and CAD — Prof. P Kattimani · Problem Solving Techniques — New Faculty · Design Thinking & Ideation — Prof. AG Gangashhy · Communication Skills & Human Values — Prof. MB Khandale · Indian Knowledge System — Prof. AC Suryawanshi.</p></div>`}
function adminPage(){return `${heading('Administration','A high-level view of institutional activity and classroom operations.')}<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">${stat('Total students','1,248','Across 38 active classes','fa-users')}${stat('Teachers','64','12 departments','fa-chalkboard-user')}${stat('Active classrooms','38','92% scheduled utilization','fa-school')}${stat('Overall attendance','91.4%','This academic month','fa-calendar-check','positive')}</div><div class="content-grid equal"><div class="panel">${panelHead('Platform performance','Academic overview')}<div class="chart-wrap"><canvas id="adminChart"></canvas></div></div><div class="panel">${panelHead('System activity','Recent administration events')}<div class="activity-list"><div class="activity-item"><span class="activity-dot"></span><p><strong>New classroom created</strong> · FY B.Tech Section C<small>Today, 9:42 AM</small></p></div><div class="activity-item"><span class="activity-dot"></span><p><strong>Teacher profile updated</strong> · Dr. N. Kulkarni<small>Yesterday, 4:18 PM</small></p></div><div class="activity-item"><span class="activity-dot"></span><p><strong>Monthly report generated</strong> · November 2026<small>Yesterday, 11:06 AM</small></p></div></div></div></div><div class="panel">${panelHead('Class management','Sample institutional classes')}<div class="table-wrap"><table><thead><tr><th>Class</th><th>Teacher</th><th>Students</th><th>Attendance</th><th>Status</th></tr></thead><tbody><tr><td><strong>FY B.Tech · Section A</strong></td><td>Aarav Mehta</td><td>32</td><td>87.5%</td><td><span class="status good">Active</span></td></tr><tr><td><strong>FY B.Tech · Section B</strong></td><td>Neha Kulkarni</td><td>34</td><td>92%</td><td><span class="status good">Active</span></td></tr><tr><td><strong>SY B.Tech · Section A</strong></td><td>R. Desai</td><td>31</td><td>89%</td><td><span class="status info">Scheduled</span></td></tr></tbody></table></div></div>`}
function settingsPage(){return `${heading('Settings','Manage your workspace preferences and account details.')}<div class="content-grid equal"><div class="panel">${panelHead('Appearance','Make Smart AI Classroom comfortable to use')}<div class="setting-row"><div><strong>Dark appearance</strong><small>Switch between light and dark themes.</small></div><button class="switch ${document.documentElement.dataset.theme==='dark'?'on':''}" data-action="theme-switch" aria-label="Toggle dark mode"></button></div><div class="setting-row"><div><strong>Compact data tables</strong><small>Reduce row spacing in dense views.</small></div><button class="switch" data-action="setting-toggle"></button></div></div><div class="panel">${panelHead('Profile information','Your teacher account')}<div class="form-grid"><div class="form-group"><label>Full name</label><input class="field" id="profileName" value="Aarav Mehta"></div><div class="form-group"><label>Role</label><input class="field" value="Faculty · Engineering" disabled></div><div class="form-group full"><label>Email address</label><input class="field" id="profileEmail" value="aarav.mehta@smartclass.demo"></div></div><button class="btn btn-primary" style="margin-top:14px" data-action="save-profile">Save profile</button></div></div><div class="panel">${panelHead('Notifications','Choose which classroom updates you receive')}<div class="setting-row"><div><strong>Assignment notifications</strong><small>New submissions and approaching due dates.</small></div><button class="switch on" data-action="setting-toggle"></button></div><div class="setting-row"><div><strong>Attendance notifications</strong><small>Alerts for unusual attendance patterns.</small></div><button class="switch on" data-action="setting-toggle"></button></div><div class="setting-row"><div><strong>Student performance alerts</strong><small>When a learner may need additional support.</small></div><button class="switch on" data-action="setting-toggle"></button></div></div><div class="panel">${panelHead('Classroom preferences','Default teaching workspace')}<div class="form-grid"><div class="form-group"><label>Default class</label><select class="select-field"><option>FY B.Tech · Section A</option><option>FY B.Tech · Section B</option></select></div><div class="form-group"><label>Primary subject</label><select class="select-field"><option>Engineering Mathematics</option><option>Applied Physics</option><option>Engineering Graphics</option></select></div></div></div>`}
function copilotPage(){return `${heading('AI Co-Teacher','Your teaching partner for explanations, lesson planning and classroom insights.',`<span class="status info">DEMO AI · LOCAL RESPONSES</span>`)}<div class="copilot-layout"><aside class="chat-history"><button class="btn btn-primary" id="newChat"><i class="fa-solid fa-plus"></i> New conversation</button><div class="history-label">RECENT</div><div id="historyList"></div><div class="history-label">SAVED</div><button class="history-item" data-prompt="Create a 30-minute lesson plan on Newton’s Laws.">Lesson plan · Newton’s Laws</button><button class="history-item" data-prompt="Generate 10 MCQs on Algebra.">Algebra quiz ideas</button></aside><section class="chat-main"><div class="chat-top"><div><strong><i class="fa-solid fa-wand-magic-sparkles" style="color:var(--accent);margin-right:6px"></i> Classroom Assistant</strong><div class="panel-subtitle">Teaching support · FY B.Tech</div></div><span class="ai-status"><i class="fa-solid fa-circle"></i> Ready</span></div><div class="chat-messages" id="chatMessages"></div><div class="chat-composer"><div class="composer-box"><textarea id="chatInput" rows="1" placeholder="Ask a question or describe what you’re preparing..."></textarea><button class="send-btn" id="sendChat" aria-label="Send message"><i class="fa-solid fa-arrow-up"></i></button></div><div class="composer-note">Demo mode uses sample responses. Verify academic content before classroom use.</div></div></section><aside class="chat-side"><h3>Teaching context</h3><div class="mini-insight"><strong>Current class</strong><p>FY B.Tech · Engineering Mathematics</p></div><div class="mini-insight"><strong>Class understanding</strong><p>78% average · 3 learners may need support</p></div><div class="mini-insight"><strong>Suggested actions</strong><p>• Review algebra foundations<br>• Run a 5-question check-in<br>• Share targeted practice</p></div><h3 style="margin-top:20px">Quick tools</h3><button class="btn btn-sm" style="width:100%;margin:4px 0" data-action="generate-quiz">Generate a quiz</button><button class="btn btn-sm" style="width:100%;margin:4px 0" data-action="generate-lesson">Lesson plan</button></aside></div>`}

function studentHome() {
    return overviewPage();
}

function render() {
    let page = activeRole === 'student' && currentPage === 'overview'
        ? 'studenthome'
        : currentPage;

    $('#topPageTitle').textContent = pageNames[page] || 'Overview';

    $$('.nav-item').forEach(button => {
        button.classList.toggle(
            'active',
            button.dataset.page === currentPage
        );
    });

    const renderers = {
        overview: overviewPage,
        live: livePage,
        students: studentsPage,
        adaptive: adaptivePage,
        analytics: analyticsPage,
        assignments: assignmentsPage,
        copilot: copilotPage,
        attendance: attendancePage,
        timetable: timetablePage,
        admin: adminPage,
        settings: settingsPage,
        studenthome: studentHome
    };

    $('#pageContent').innerHTML =
        (renderers[page] || overviewPage)();

    if (page === 'analytics' || page === 'admin') {
        setTimeout(() => drawCharts(page), 40);
    }

    if (page === 'copilot') {
        renderChat();
    }
}

function go(page) {
    currentPage = page;
    render();

    $('#sidebar').classList.remove('open');
    $('#mobileOverlay').classList.remove('show');
}

function renderChat(){if(!currentChat){currentChat={id:Date.now(),title:'New conversation',messages:[]};conversations.unshift(currentChat);saveChats()}const box=$('#chatMessages');if(!box)return;$('#historyList').innerHTML=conversations.slice(0,8).map(c=>`<button class="history-item ${c.id===currentChat.id?'active':''}" data-chat="${c.id}">${escapeHTML(c.title)}</button>`).join('');if(!currentChat.messages.length){box.innerHTML=`<div class="welcome-ai"><div class="ai-orb"><i class="fa-solid fa-wand-magic-sparkles"></i></div><h2>How can I help you teach today?</h2><p>Plan a lesson, explain a difficult concept, build a quiz or turn classroom data into practical next steps.</p><div class="prompt-grid">${['Explain Newton’s Laws in simple language.','Generate 10 MCQs on Algebra.','Create a revision worksheet for Class 10.','Summarize today’s classroom performance.'].map(p=>`<button class="prompt-chip" data-prompt="${p}"><i class="fa-regular fa-message" style="margin-right:5px"></i>${p}</button>`).join('')}</div></div>`}else{box.innerHTML=currentChat.messages.map((m,i)=>messageHTML(m,i)).join('');box.scrollTop=box.scrollHeight}}
function messageHTML(m,i){return `<div class="message ${m.role}"><div class="message-avatar"><i class="fa-solid ${m.role==='user'?'fa-user':'fa-wand-magic-sparkles'}"></i></div><div><div class="message-bubble">${escapeHTML(m.text)}</div>${m.role==='assistant'?`<div class="message-actions"><button data-copy="${i}"><i class="fa-regular fa-copy"></i> Copy</button></div>`:''}</div></div>`}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function saveChats(){store.set('sac_chats',conversations)}
function demoAI(prompt){const p=prompt.toLowerCase();if(p.includes('mcq')||p.includes('quiz'))return `Here is a short formative quiz you can use as a starting point:

1. Which expression is the derivative of x²?
A. x  B. 2x  C. x³  D. 2
Answer: B — Apply the power rule: d(xⁿ)/dx = nxⁿ⁻¹.

2. What is the factorisation of x² − 9?
A. (x−3)(x+3)  B. (x−9)(x+1)  C. (x−3)²  D. x(x−9)
Answer: A — This is a difference of two squares.

3. If 2x + 4 = 10, what is x?
A. 2  B. 3  C. 4  D. 7
Answer: B — Subtract 4, then divide by 2.

Teaching tip: Ask students to explain why each distractor is incorrect. This reveals misconceptions, not just correct answers.`;if(p.includes('newton'))return `Newton’s three laws describe how objects move:

1. First law — Inertia: An object stays at rest or keeps moving at a constant speed in a straight line unless an external force acts on it. Example: passengers move forward when a bus stops suddenly.

2. Second law — Force: The acceleration of an object depends on the net force and its mass. Formula: F = m × a. Example: an empty trolley is easier to accelerate than a loaded one.

3. Third law — Action and reaction: Every action force has an equal and opposite reaction force. Example: when you push the ground backward while walking, the ground pushes you forward.

Quick check: Ask learners to identify the action–reaction pair when a swimmer pushes water backward.`;if(p.includes('attendance')||p.includes('support')||p.includes('struggling'))return `Based on the available sample classroom data, the learners most likely to benefit from a check-in are:

• Kabir Deshmukh — 49% understanding; revisit factorisation basics with worked examples.
• Arjun Nair — 46% understanding; reinforce linear equations using visual steps.
• Rohan Patil — 64% understanding; provide targeted quadratic-equation practice.

Suggested next step: hold a short small-group recap, then use a 3-question exit ticket to check whether the learning gap has narrowed.

This is a recommendation from demo performance data, not a diagnosis of ability.`;if(p.includes('summar'))return `Classroom snapshot — FY B.Tech:

• Average understanding is 78%, with engagement at 84% in the current demo session.
• Participation has improved by 6% compared with the previous week.
• Three students show lower-than-target understanding in algebra foundations.
• The next useful teaching move is a brief recap of factorisation, followed by differentiated practice.

Suggested follow-up: compare exit-ticket results after the recap to see whether understanding improves.`;if(p.includes('lesson')||p.includes('plan'))return `Lesson outline · 30 minutes

1. Learning objective (3 min): Students will explain the relationship between force, mass and acceleration.
2. Retrieval warm-up (4 min): Two quick questions from the previous lesson.
3. Concept teaching (8 min): Introduce F = ma and unpack each variable with units.
4. Worked example (6 min): Calculate acceleration for a known force and mass.
5. Pair activity (5 min): Students solve a trolley problem and explain their reasoning.
6. Exit ticket (4 min): One conceptual question and one calculation.

Differentiation: provide a formula scaffold for learners who need support and a multi-step extension for confident learners.`;if(p.includes('worksheet')||p.includes('revision'))return `Revision worksheet — Suggested structure

Section A · Recall (3 questions): Define the key terms and state the main formula.
Section B · Guided practice (4 questions): Complete worked examples with one missing step.
Section C · Independent practice (4 questions): Apply the concept to unfamiliar values.
Section D · Challenge (2 questions): Explain a real-world application and justify your method.

Teacher note: include a self-check answer key and ask students to mark the step where they felt uncertain.`;return `Here’s a practical way to approach “${prompt}” in class:

1. Start with the core idea in one sentence, using familiar language.
2. Model one worked example and explain why each step is taken.
3. Ask learners to try a similar example independently.
4. Use a quick check question to identify any misconception.
5. Adjust the next activity: provide scaffolded practice for learners who need support and an extension challenge for learners who are ready.

I’m running in local demo mode, so this response is generated from predefined teaching patterns rather than a connected AI model. You can connect a secure API through a backend later.`}
function sendMessage(text){const value=(text||$('#chatInput')?.value||'').trim();if(!value)return;if(!currentChat){currentChat={id:Date.now(),title:'New conversation',messages:[]};conversations.unshift(currentChat)}currentChat.messages.push({role:'user',text:value});if(currentChat.title==='New conversation')currentChat.title=value.slice(0,28);$('#chatInput').value='';saveChats();renderChat();const box=$('#chatMessages');const typing=document.createElement('div');typing.className='message';typing.id='typing';typing.innerHTML='<div class="message-avatar"><i class="fa-solid fa-wand-magic-sparkles"></i></div><div class="message-bubble">Thinking through this<span class="typing-dots"> ···</span></div>';box.append(typing);box.scrollTop=box.scrollHeight;setTimeout(()=>{typing.remove();currentChat.messages.push({role:'assistant',text:demoAI(value)});saveChats();renderChat()},750)}
function drawCharts(page){Object.values(charts).forEach(c=>c.destroy());charts={};const dark=document.documentElement.dataset.theme==='dark',grid=dark?'#343a46':'#edf0f2',tick=dark?'#a1a6b3':'#7b8490';Chart.defaults.color=tick;Chart.defaults.font.family='DM Sans';const base={responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{boxWidth:8,usePointStyle:true,font:{size:10}}}},scales:{x:{grid:{display:false},ticks:{font:{size:9}}},y:{grid:{color:grid},ticks:{font:{size:9}}}}};const line=(id,labels,data,label)=>{const el=$('#'+id);if(el)charts[id]=new Chart(el,{type:'line',data:{labels,datasets:[{label,data,borderColor:'#398675',backgroundColor:'rgba(57,134,117,.10)',fill:true,tension:.35,pointRadius:3}]},options:base})};if(page==='analytics'){line('performanceChart',['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],[68,72,70,76,74,81,78],'Average score');const el=$('#subjectChart');if(el)charts.subject=new Chart(el,{type:'bar',data:{labels:['Maths','Physics','Graphics'],datasets:[{label:'Average score',data:[78,83,72],backgroundColor:['#398675','#75a99d','#b4d1c9'],borderRadius:4}]},options:{...base,plugins:{legend:{display:false}}}});line('engagementChart',['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],[72,75,74,80,79,86,84],'Engagement');const d=$('#distributionChart');if(d)charts.distribution=new Chart(d,{type:'doughnut',data:{labels:['Mastered','Developing','Needs support'],datasets:[{data:[14,13,5],backgroundColor:['#398675','#d5ad68','#c87878'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:8,font:{size:9}}}}}})}if(page==='admin'){const el=$('#adminChart');if(el)charts.admin=new Chart(el,{type:'bar',data:{labels:['Aug','Sep','Oct','Nov'],datasets:[{label:'Average performance',data:[72,74,77,81],backgroundColor:'#398675',borderRadius:4},{label:'Attendance',data:[87,89,90,91],backgroundColor:'#b5cec8',borderRadius:4}]},options:base})}}
function openModal(title,body,foot='',eyebrow='SMARTCLASS'){ $('#modalTitle').textContent=title;$('#modalEyebrow').textContent=eyebrow;$('#modalBody').innerHTML=body;$('#modalFoot').innerHTML=foot;$('#modalBackdrop').classList.remove('hidden')}
function closeModal(){$('#modalBackdrop').classList.add('hidden')}
function assignmentForm(){openModal('Create assignment',`<form id="assignmentForm" class="form-grid"><div class="form-group full"><label>Assignment title</label><input class="field" name="title" required placeholder="e.g. Unit 4 practice set"></div><div class="form-group"><label>Subject</label><select class="select-field" name="subject"><option>Mathematics</option><option>Physics</option><option>Engineering Graphics</option></select></div><div class="form-group"><label>Due date</label><input class="field" type="date" name="due" required></div><div class="form-group"><label>Difficulty</label><select class="select-field" name="difficulty"><option>Beginner</option><option selected>Intermediate</option><option>Advanced</option></select></div><div class="form-group full"><label>Description</label><textarea class="textarea-field" name="description" placeholder="Learning objectives and instructions..."></textarea></div></form>`,`<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveAssignment">Create assignment</button>`)}
function quizModal(){const qs=[['What is the derivative of x³?',['3x²','x²','3x','x⁴'],'3x²'],['Which is the SI unit of force?',['Joule','Newton','Watt','Pascal'],'Newton'],['Factorise x² − 16.',['(x−8)(x+2)','(x−4)²','(x−4)(x+4)','x(x−16)'],'(x−4)(x+4)']];openModal('Quick knowledge check',`<form id="quizForm">${qs.map((q,i)=>`<div style="margin-bottom:16px"><strong style="font-size:11px">${i+1}. ${q[0]}</strong>${q[1].map(o=>`<label class="quiz-option"><input type="radio" name="q${i}" value="${o}" required>${o}</label>`).join('')}</div>`).join('')}</form>`,`<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="submitQuiz">Submit answers</button>`,'ASSESSMENT DEMO')}
function profileModal(id){const s=students.find(x=>x.id===id);if(!s)return;openModal('Student profile',`<div class="student-profile-head">${avatar(s)}<div><h3>${s.name}</h3><p>${s.id} · ${s.cls}</p><span class="status ${statusClass(s.engagement)}">${s.engagement}</span></div></div><div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">${stat('Avg. score',s.score+'%','Recent assessments','fa-chart-simple')}${stat('Attendance',s.attendance+'%','This term','fa-calendar-check')}${stat('Understanding',s.understanding+'%','Current topic','fa-brain')}</div><h4 style="font:700 12px Manrope">Learning gap</h4><p style="font-size:11px;color:var(--muted)">${s.gap}</p><div class="notice-card"><strong>Suggested teacher action</strong><br>${s.understanding<60?'Schedule a short concept recap, provide scaffolded examples and check understanding with a low-stakes quiz.':'Continue targeted practice and offer an extension activity when the student is ready.'}</div>`,`<button class="btn" data-close>Close</button><button class="btn btn-primary" id="profileAdaptive" data-student="${s.id}">View learning pathway</button>`,'LEARNER DETAILS')}
function handleAction(action){if(action==='new-assignment')assignmentForm();if(action==='quick-quiz'||action==='student-quiz')quizModal();if(action==='generate-quiz'){sendMessage('Generate 10 MCQs on Algebra.')}if(action==='generate-lesson'){sendMessage('Create a 30-minute lesson plan for tomorrow.')}if(action==='export-csv'){const rows=[['Registration No.','Roll No.','Name','Theory Present','Theory Total','Theory Attendance %','Practical Present','Practical Total','Practical Attendance %'],...students.map(s=>[s.id,s.roll,s.name,s.theoryPresent,s.theoryTotal,s.attendance,s.practicalPresent,s.practicalTotal,s.practicalAttendance])];const csv=rows.map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='FE-Computer-B-attendance-27Jul-27Oct-2026.csv';a.click();URL.revokeObjectURL(a.href);toast('Attendance CSV exported.')}if(action==='mark-all'){students.forEach(s=>attendance[s.id]='Present');store.set('sac_attendance',attendance);render();toast('Session register updated locally (demo only).')}if(action==='qr-demo'){const s=students.find(x=>attendance[x.id]==='Absent')||students[0];openModal('QR check-in simulation',`<div style="text-align:center;padding:12px"><div style="font-size:72px;color:var(--text);margin:12px"><i class="fa-solid fa-qrcode"></i></div><strong>${s.name}</strong><p style="font-size:11px;color:var(--muted)">Simulate a student scanning the classroom QR code.</p><span class="status info">DEMO · NO CAMERA OR SCANNER</span></div>`,`<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="simulateCheckin" data-student="${s.id}">Simulate check-in</button>`)}if(action==='refresh-engagement')toast('Sample engagement data refreshed.');if(action==='adaptive-practice')toast('Recommended practice session started in demo mode.');if(action==='add-student')openModal('Add student',`<form id="addStudentForm" class="form-grid"><div class="form-group"><label>Student name</label><input class="field" name="name" required></div><div class="form-group"><label>Student ID</label><input class="field" name="id" required placeholder="ST-1009"></div></form>`,`<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveStudent">Add student</button>`);if(action==='save-profile'){store.set('sac_profile_name',$('#profileName').value);toast('Profile preferences saved.')}if(action==='setting-toggle')event.target.classList.toggle('on');if(action==='theme-switch')toggleTheme();if(action==='student-quiz')quizModal()}
function toggleTheme(){const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;store.set('sac_theme',next);$('#themeToggle').innerHTML=`<i class="fa-regular ${next==='dark'?'fa-sun':'fa-moon'}"></i>`;if(currentPage==='analytics'||currentPage==='admin')drawCharts(currentPage);if(currentPage==='settings')render()}
function setRole(role){activeRole=role;store.set('sac_role',role);$('#sideUserRole').textContent=role==='teacher'?'Teacher account':role==='student'?'Student account':'Administrator';if(role==='student')currentPage='overview';else if(role==='admin')currentPage='admin';else currentPage='overview';render();toast('Switched to '+role+' view.')}
document.addEventListener('click',e=>{if(e.target.closest('#newChat')){currentChat={id:Date.now(),title:'New conversation',messages:[]};conversations.unshift(currentChat);saveChats();renderChat();return}if(e.target.closest('#sendChat')){sendMessage();return}const nav=e.target.closest('[data-page]');if(nav){go(nav.dataset.page);return}const action=e.target.closest('[data-action]');if(action){handleAction(action.dataset.action);return}const profile=e.target.closest('[data-profile]');if(profile){profileModal(profile.dataset.profile);return}const adaptive=e.target.closest('[data-adaptive]');if(adaptive){selectedAdaptive=students.find(s=>s.id===adaptive.dataset.adaptive);render();return}const prompt=e.target.closest('[data-prompt]');if(prompt){sendMessage(prompt.dataset.prompt);return}const chat=e.target.closest('[data-chat]');if(chat){currentChat=conversations.find(c=>c.id==chat.dataset.chat);renderChat();return}const copy=e.target.closest('[data-copy]');if(copy){navigator.clipboard?.writeText(currentChat.messages[Number(copy.dataset.copy)].text);toast('Message copied.');return}if(e.target.closest('[data-close]'))closeModal();});
document.addEventListener('change',e=>{if(e.target.matches('.attendance-select')){attendance[e.target.dataset.attendance]=e.target.value;store.set('sac_attendance',attendance);render();toast('Attendance updated.')}if(e.target.id==='roleSelect')setRole(e.target.value);if(e.target.id==='studentFilter'||e.target.id==='studentSort')filterStudents();if(e.target.id==='analyticsPeriod'||e.target.id==='analyticsSubject')drawCharts('analytics')});
function filterStudents(){const q=($('#studentSearch')?.value||'').toLowerCase(),f=$('#studentFilter')?.value||'all',sort=$('#studentSort')?.value||'name';let list=students.filter(s=>(s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||String(s.roll).includes(q))&&(f==='all'||(f==='low'&&s.attendance<75)||(f==='ok'&&s.attendance>=75)));list.sort((a,b)=>sort==='practical'?b.practicalAttendance-a.practicalAttendance:sort==='attendance'?b.attendance-a.attendance:a.name.localeCompare(b.name));$('#studentTable').innerHTML=studentTable(list)}
document.addEventListener('input',e=>{if(e.target.id==='studentSearch')filterStudents()});
document.addEventListener('click',e=>{if(e.target.id==='saveAssignment'){const form=$('#assignmentForm');if(!form.reportValidity())return;const d=Object.fromEntries(new FormData(form));assignments.unshift({id:Date.now(),title:d.title,subject:d.subject,due:d.due,difficulty:d.difficulty,submissions:0,total:32,status:'Recently assigned'});store.set('sac_assignments',assignments);closeModal();render();toast('Assignment created.')}if(e.target.id==='submitQuiz'){const form=$('#quizForm');if(!form.reportValidity())return;const answers=['3x²','Newton','(x−4)(x+4)'];let score=0;answers.forEach((a,i)=>{if(new FormData(form).get('q'+i)===a)score++});$('#modalBody').innerHTML=`<div class="empty-state"><i class="fa-solid fa-award"></i><strong>Your score: ${score}/3</strong><p>${score===3?'Excellent work!':score===2?'Good progress. Review the missed concept.':'Keep practicing — revisit the worked examples.'}</p></div>`;$('#modalFoot').innerHTML='<button class="btn btn-primary" data-close>Done</button>'}if(e.target.id==='simulateCheckin'){attendance[e.target.dataset.student]='Present';store.set('sac_attendance',attendance);closeModal();render();toast('Simulated QR check-in recorded.')}if(e.target.id==='saveStudent'){const f=$('#addStudentForm');if(!f.reportValidity())return;const d=Object.fromEntries(new FormData(f));students.push({id:d.id,name:d.name,cls:'FY B.Tech',attendance:100,score:0,engagement:'Following',understanding:0,topic:'Not assessed',gap:'Awaiting assessment',initials:d.name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase()});attendance[d.id]='Present';store.set('sac_attendance',attendance);closeModal();render();toast('Student added to this demo session.')}if(e.target.id==='profileAdaptive'){const s=students.find(x=>x.id===e.target.dataset.student);if(s)selectedAdaptive=s;closeModal();go('adaptive')}});
$('#mainNav').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b)go(b.dataset.page)});
$('#themeToggle').addEventListener('click',toggleTheme);$('#mobileMenu').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#mobileOverlay').classList.add('show')});$('#sidebarClose').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#mobileOverlay').classList.remove('show')});$('#mobileOverlay').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#mobileOverlay').classList.remove('show')});$('#modalClose').addEventListener('click',closeModal);$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});$('#profileMenuBtn').addEventListener('click',()=>$('#profileMenu').classList.toggle('hidden'));$('#logoutBtn').addEventListener('click',()=>toast('Demo session signed out locally.'));$('#helpBtn').addEventListener('click',()=>openModal('Help & Support','<p style="font-size:11px;line-height:1.7;color:var(--muted)">This college project is a front-end demonstration. Use the navigation to explore classroom tools. Sample records are stored locally in this browser. No student data is sent to a server.</p>','<button class="btn btn-primary" data-close>Got it</button>'));$('#notificationBtn').addEventListener('click',()=>openModal('Notifications','<div class="activity-list"><div class="activity-item"><span class="activity-dot"></span><p><strong>3 learners may need support</strong><small>AI classroom insight · 10 min ago</small></p></div><div class="activity-item"><span class="activity-dot"></span><p><strong>8 new assignment submissions</strong><small>Mathematics · 24 min ago</small></p></div><div class="activity-item"><span class="activity-dot"></span><p><strong>Attendance register updated</strong><small>FY B.Tech · 35 min ago</small></p></div></div>','<button class="btn btn-primary" data-close>Close</button>'));$('#roleSelect').value=activeRole;$('#newChat')?.addEventListener('click',()=>{currentChat={id:Date.now(),title:'New conversation',messages:[]};conversations.unshift(currentChat);saveChats();renderChat()});$('#sendChat')?.addEventListener('click',()=>sendMessage());$('#chatInput')?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}});document.documentElement.dataset.theme=store.get('sac_theme','light');$('#themeToggle').innerHTML=`<i class="fa-regular ${document.documentElement.dataset.theme==='dark'?'fa-sun':'fa-moon'}"></i>`;render();

document.addEventListener('keydown',e=>{if(e.target.id==='chatInput'&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}});