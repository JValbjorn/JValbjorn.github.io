const projectsData = [
  {
    id: 0,
    titleKey: "CoilbotTitle",
    descriptionKey: "CoilBotDescription",
    imageUrl: "../img/projects/coilbot.png",
    githubUrl: "https://github.com/GiliamvanTol/COIL-Interactive-Experience",
    siteUrl: "https://jvalbjorn.github.io/COIL-Interactive-Experience/"
  },
  {
    id: 1,
    titleKey: "ModerkagensMissionTitle",
    descriptionKey: "ModerkagensMissionDescription",
    imageUrl: "../img/projects/moderkagens-mission.png",
    githubUrl: "https://github.com/JValbjorn/Moderkagens-misson-2.0",
    siteUrl: "moderkagens-mission-2.0.jvalbjorn.dk"
  },
  {
    id: 2,
    titleKey: "ZeroBuzzBrewTitle",
    descriptionKey: "ZeroBuzzBrewDescription",
    imageUrl: "../img/projects/zero-buzz-brew.png",
    githubUrl: "https://github.com/LasseBilgrav/zerobuzz",
    siteUrl: "zerobuzz-brew.jvalbjorn.dk"
  },
  {
    id: 3,
    titleKey: "MusicSyncTitle",
    descriptionKey: "MusicSyncDescription",
    imageUrl: "",
    githubUrl: "https://github.com/JValbjorn/music-sync",
    siteUrl: "https://jvalbjorn.github.io/music-sync/"
  },
];

export function getProjectsDataKey(id) {
  let indexValue = projectsData.findIndex((x) => x.id == id);
  let value = projectsData[indexValue];
  return value;
}
