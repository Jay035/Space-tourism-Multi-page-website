import moonImage from '../components/assets/destination/image-moon.png';
import marsImage from '../components/assets/destination/image-mars.png';
import europaImage from '../components/assets/destination/image-europa.png';
import titanImage from '../components/assets/destination/image-titan.png';
import crewMember1 from '../components/assets/crew/image-douglas-hurley.png';
import crewMember2 from '../components/assets/crew/image-mark-shuttleworth.png';
import crewMember3 from '../components/assets/crew/image-victor-glover.png';
import crewMember4 from '../components/assets/crew/image-anousheh-ansari.png';
import launchVehicleLandscape from '../components/assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportLandscape from '../components/assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsuleLandscape from '../components/assets/technology/image-spaceport-landscape.jpg';

export const moon = [
  {
    "name": "Moon",
    "images": {
      "png": moonImage,
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  }
]

export const mars = [
  {
    "name": "Mars",
    "images": {
      "png": marsImage,
      "webp": "./assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  }
]

export const europa = [
  {
    "name": "Europa",
    "images": {
      "png": europaImage,
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  }
]

export const titan = [
  {
    "name": "Titan",
    "images": {
      "png": titanImage,
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]

export const crew1 = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": crewMember1,
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  }
]
export const crew2 = [
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": crewMember2,
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  }
]
export const crew3 = [
  {
    "name": "Victor Glover",
    "images": {
      "png": crewMember3,
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
]
export const crew4 =  [
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": crewMember4,
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

export const terminology1 = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": launchVehicleLandscape
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  }
]
export const terminology2 = [
  {
    "name": "Spaceport",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": spaceportLandscape
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  }
]
export const terminology3 = [
  {
    "name": "Space capsule",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": spaceCapsuleLandscape
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]
