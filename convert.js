import fs from 'fs';
console.log("Hello?")
const csvData = `Name,Social Group,Gender,Age,Build,Height
Bartender,Criminals,F,40,L,Medium
Fence,Criminals,F,60,M,Tall
Informant,Criminals,F,20,S,Short
Bouncer,Criminals,M,20,L,Tall
Gangster,Criminals,M,40,M,Short
Mafia Don,Criminals,M,60,S,Medium
Bus Driver,Labor,M,60,L,Short
Waitress,Labor,F,40,M,Short
Riveter,Labor,F,20,L,Tall
Librarian,Labor,F,60,S,Medium
Ice Cream Man,Labor,M,20,M,Medium
Fireman,Labor,M,40,S,Tall
Musician,Immigrants,M,40,L,Short
Nun,Immigrants,F,60,L,Tall
Psychic,Immigrants,F,20,M,Short
Professor,Immigrants,M,60,M,Medium
Navy Sailor,Immigrants,M,20,S,Tall
Cabin Crew,Immigrants,F,40,S,Medium
Congressman,Government,M,60,L,Medium
Secret Agent,Government,M,20,M,Tall
Mayor,Government,M,40,S,Short
Secretary,Government,F,20,L,Short
Ambassador,Government,F,40,M,Medium
Lobbyist,Government,F,60,S,Tall
Pharmacist,Medicine,F,20,L,Medium
Veterinarian,Medicine,M,60,L,Tall
Nurse,Medicine,F,40,M,Tall
Surgeon,Medicine,M,40,S,Medium
Orderly,Medicine,M,20,M,Short
Coroner,Medicine,F,60,S,Short
Judge,Authority,F,60,L,Short
Patrolman,Authority,M,20,S,Short
State Attorney,Authority,M,40,L,Medium
Deputy,Authority,F,20,M,Medium
Lawyer,Authority,F,40,S,Tall
Dispatcher,Authority,M,60,M,Tall
Beggar,Outcasts,M,60,S,Short
Veteran,Outcasts,M,40,M,Tall
Greaser,Outcasts,M,20,L,Medium
War Widow,Outcasts,F,40,L,Short
Cat Lady,Outcasts,F,60,M,Medium
Showgirl,Outcasts,F,20,S,Tall
Ballplayer,Jet Set,M,20,L,Short
Benefactor,Jet Set,M,40,M,Medium
Restaurateur,Jet Set,F,60,M,Short
Actress,Jet Set,F,20,S,Medium
Psychiatrist,Jet Set,M,60,S,Tall
Artist,Jet Set,F,40,L,Tall
Newscaster,Press,M,60,M,Short
Paperboy,Press,M,20,S,Medium
Photographer,Press,M,40,L,Tall
Reporter,Press,F,20,M,Tall
Mailwoman,Press,F,40,S,Short
Editor,Press,F,60,L,Medium`;

const csvToJson = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const jsonData = lines.slice(1).map((line, index) => {
    const values = line.split(',');
    const obj = { ID: index + 1 };
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i].trim();
    });
    return obj;
  });
  return jsonData;
};

const jsonData = csvToJson(csvData);
console.log(JSON.stringify(jsonData, null, 2));

const saveJsonToFile = (jsonData, filePath) => {
  const jsonString = JSON.stringify(jsonData, null, 2);
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file saved successfully!');
    }
  });
};

const filePath = '/c:/Users/holla/Documents/GitHub/intent-to-kill/data.json';
saveJsonToFile(jsonData, filePath);