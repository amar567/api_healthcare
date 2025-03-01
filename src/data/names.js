const stateArray = [
  "select here",
  "uttarakhand",
  "uttarpradesh",
  "rajasthan",
  "kerala",
  "jharkhand",
  "delhi",
  "chhatisgarh",
  "tamilnadu",
  "haryana",
  "madhyapradesh",
  "westbengal",
  "andhrapradesh",
  "maharastra",
  "gujrat",
  "goa",
];
const districtArray = [
  "select here",
  "agarmalwa",
  "ahmedabad",
  "alirajpur",
  "alorajpur",
  "ambala",
  "anantpur",
  "anuppur",
  "ashoknagar",
  "balaghat",
  "barwani",
  "betul",
  "bhind",
  "bhiwani",
  "bhopal",
  "burhanpur",
  "chandigarh",
  "charkidadri",
  "chattisgarh",
  "chhatarpur",
  "chhindwara",
  "chitoor",
  "damoh",
  "datia",
  "delhi",
  "dewas",
  "dhar",
  "dindori",
  "eastgodavari",
  "faridabad",
  "fatehbad",
  "guna",
  "guntur",
  "gurugram",
  "gwalior",
  "harda",
  "hisar",
  "hoshangabaad",
  "indore",
  "jabalpur",
  "jhabua",
  "jhajjar",
  "jind",
  "kaithal",
  "karnal",
  "katni",
  "khandwa",
  "khargone",
  "krishna",
  "kurnool",
  "kurushetra",
  "madhyapradesh",
  "mahendranagar",
  "mandla",
  "mandsaur",
  "morena",
  "narsinghpur",
  "thane",
  "neemuch",
  "niwari",
  "nuh",
  "palwal",
  "panchkula",
  "panipat",
  "panna",
  "prakasam",
  "puducherry",
  "pune",
  "raisen",
  "rajgarh",
  "ranchi",
  "ratlam",
  "rewa",
  "rewari",
  "rohtak",
  "sagar",
  "satna",
  "sehore",
  "seoni",
  "shahdol",
  "shajapur",
  "sheopur",
  "shivpuri",
  "sidhi",
  "singrauli",
  "sirsa",
  "sonipat",
  "sprsnellore",
  "srikakulam",
  "tamilnadu",
  "tikamgarh",
  "ujjain",
  "umaria",
  "vidisha",
  "visakhapatanam",
  "vizianagram",
  "westgodavari",
  "yrs",
  "yamunanagar",
];

const stateOption = stateArray.map((datas) => {
  return <option>{datas}</option>;
});

const districtOption = districtArray.map((datas) => {
  return <option>{datas}</option>;
});

export default stateArray;
export { districtArray };
export { stateOption };
export { districtOption };
