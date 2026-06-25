import fs from 'fs';

let content = fs.readFileSync('./public/index.html', 'utf-8');

// Font replacements
content = content.replace(
    'family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap',
    'family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap'
);
content = content.replace(/font-family:\s*'Open Sans',\s*sans-serif;/g, "font-family: 'Inter', sans-serif;");
content = content.replace(/font-family:\s*'Playfair Display',\s*serif;/g, "font-family: 'Montserrat', sans-serif;");

// Image replacements mapping keywords to photo IDs
const imageMap = {
    'construction,skyscraper,building': '1486406146926-c627a92ad1ab',
    'blueprint,construction,plans': '1503387762-592deb58ef4e',
    'commercial,building,construction': '1486406146926-c627a92ad1ab',
    'residential,house,construction': '1512917774080-9991f1c4c750',
    'renovation,interior,construction': '1581094794329-c8112a89af12',
    'restoration,building,historic': '1523634921620-2ba4eb651e73',
    'civil,infrastructure,bridge': '1545459720-aac8509eb02c',
    'roofing,roof,construction': '1632759145351-1d592919f522',
    'electrical,wiring,construction': '1621905252507-b35492cc74b4',
    'plumbing,pipes,construction': '1585704032915-c3400ca199e7',
    'mechanical,hvac,construction': '1504328345606-18bbc8c9d7d1',
    'construction,team,workers': '1504307651254-35680f356dfd',
    'residential,house,estimate': '1512917774080-9991f1c4c750',
    'framing,wood,construction': '1517581177682-a085bb7ffb15',
    'insulation,construction,wall': '1532323544230-7191fd51bc1b',
    'concrete,foundation,construction': '1590486803833-1c5dc8ddd4c8',
    'painting,interior,renovation': '1589939705384-5185137a7f0f',
    'hvac,ductwork,mechanical': '1610491462702-42e6ecd6a125',
    'construction,planning,meeting': '1531834685032-c34bf0d84c77',
    'texture,concrete': '1518640467707-6811f4a6ab73',
    'construction,skyline,building': '1486325212027-8081e485255e',
    'construction,team': '1541888086425-d81bb19240f5',
    'construction,estimator,office': '1503387762-592deb58ef4e',
    'blueprint,construction,drawings': '1503387762-592deb58ef4e',
    'commercial,office,building': '1486406146926-c627a92ad1ab',
    'residential,home,house': '1512917774080-9991f1c4c750',
    'renovation,remodel,interior': '1581094794329-c8112a89af12',
    'historic,restoration,building': '1523634921620-2ba4eb651e73',
    'civil,infrastructure,highway': '1545459720-aac8509eb02c',
    'electrical,mechanical,engineering': '1504328345606-18bbc8c9d7d1',
    'developer,real,estate,construction': '1560518883-ce09059eeffa',
    'architect,design,blueprint': '1503387762-592deb58ef4e',
    'contractor,construction,site': '1541888086425-d81bb19240f5',
    'architecture,blueprint,building': '1486406146926-c627a92ad1ab',
    'construction,planning,drawing': '1503387762-592deb58ef4e',
    'permit,drawing,architectural,blueprint': '1503387762-592deb58ef4e',
    '3d,rendering,architecture,visualization': '1503387762-592deb58ef4e',
    'bim,revit,building,model': '1503387762-592deb58ef4e',
    'shop,drawing,structural,steel': '1503387762-592deb58ef4e',
    'asbuilt,drawing,floor,plan': '1503387762-592deb58ef4e',
    'project,schedule,gantt,planning': '1503387762-592deb58ef4e',
    'contractor,construction,worker': '1541888086425-d81bb19240f5',
    'developer,real,estate,building': '1560518883-ce09059eeffa',
    'architect,office,design': '1503387762-592deb58ef4e',
    'construction,office,contact': '1541888086425-d81bb19240f5',
    'los,angeles,cityscape,downtown': '1580659324424-6a8b79f67645'
};

const fallbackImage = '1541888086425-d81bb19240f5';

const pattern = /https:\/\/source\.unsplash\.com\/(\d+)(?:x(\d+))?\/\?([a-zA-Z0-9,]+)/g;

content = content.replace(pattern, (match, width, height, keywords) => {
    const photoId = imageMap[keywords] || fallbackImage;
    const h = height ? `&h=${height}` : `&h=${width}`;
    return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80&w=${width}${h}`;
});

fs.writeFileSync('./public/index.html', content);
console.log("Images and fonts updated successfully.");
